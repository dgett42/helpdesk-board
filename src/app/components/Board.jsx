'use client';

import { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';

const INITIAL_FILTERS = {
  status: 'All',
  priority: 'All',
};

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({}); 

  useEffect(() => {
    let cancelled = false;

    async function loadTickets() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch('/api/tickets');
        if (!res.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await res.json();
        if (!cancelled) {
          setTickets(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Unable to load tickets.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadTickets();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!tickets.length) return;

    const intervalMs = 8000; 

    const intervalId = setInterval(() => {
      setTickets((prev) => {
        if (!prev.length) return prev;

        const index = Math.floor(Math.random() * prev.length);
        const ticket = prev[index];

        if (!ticket) return prev;

        const updatedTicket = {
          ...ticket,
          ...getRandomUpdate(ticket),
          updatedAt: new Date().toISOString(),
        };

        const next = [...prev];
        next[index] = updatedTicket;
        return next;
      });
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [tickets.length]);

  const handleStatusChange = (status) => {
    setFilters((prev) => ({ ...prev, status }));
  };

  const handlePriorityChange = (priority) => {
    setFilters((prev) => ({ ...prev, priority }));
  };

  const handleAddToQueue = (ticketId) => {
    setQueue((prev) => {
      if (prev[ticketId]) return prev;
      return { ...prev, [ticketId]: true };
    });
  };

  const handleRemoveFromQueue = (ticketId) => {
    setQueue((prev) => {
      if (!prev[ticketId]) return prev;
      const next = { ...prev };
      delete next[ticketId];
      return next;
    });
  };

  const handleClearQueue = () => {
    setQueue({});
  };

  
  const searchLower = search.toLowerCase();

  const visibleTickets = tickets.filter((ticket) => {
    if (filters.status !== 'All' && ticket.status !== filters.status) {
      return false;
    }
    if (filters.priority !== 'All' && ticket.priority !== filters.priority) {
      return false;
    }
    if (searchLower) {
      const inTitle = ticket.title.toLowerCase().includes(searchLower);
      const inDescription = ticket.description
        .toLowerCase()
        .includes(searchLower);
      if (!inTitle && !inDescription) return false;
    }
    return true;
  }); 

   const isEmpty = !loading && !error && visibleTickets.length === 0;

  return (
    <section className="space-y-6">
      {/* Filters row */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end">
        <div className="flex gap-3 md:flex-none">
          <div className="w-40">
            <StatusFilter value={filters.status} onChange={handleStatusChange} />
          </div>
          <div className="w-40">
            <PriorityFilter value={filters.priority} onChange={handlePriorityChange} />
          </div>
        </div>
        <div className="flex-1 md:max-w-sm lg:max-w-md">
          <SearchBox value={search} onChange={setSearch} />
        </div>
      </div>

      {/* Global status (loading, error, empty) */}
      <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />

      {/* Tickets grid */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-100">Tickets</h2>
        <TicketList
          tickets={visibleTickets}
          queue={queue}
          onAddToQueue={handleAddToQueue}
        />
      </div>

      {/* My Queue full width at the bottom */}
      <div className="pt-2">
        <MyQueueSummary
          tickets={tickets}
          queue={queue}
          onRemove={handleRemoveFromQueue}
          onClear={handleClearQueue}
        />
      </div>
    </section>
  );
}

function getRandomUpdate(ticket) {
  const statusTransitions = {
    Open: ['In Progress', 'On Hold'],
    'In Progress': ['Resolved', 'On Hold'],
    'On Hold': ['In Progress'],
    Resolved: ['Resolved'],
  };

  const priorityTransitions = {
    Low: ['Low', 'Medium'],
    Medium: ['Low', 'Medium', 'High'],
    High: ['Medium', 'High', 'Critical'],
    Critical: ['High', 'Critical'],
  };

 const changeStatus = Math.random() < 0.5;

  if (changeStatus) {
    const options = statusTransitions[ticket.status] || [ticket.status];
    const nextStatus = options[Math.floor(Math.random() * options.length)];
    return { status: nextStatus };
  } else {
    const options = priorityTransitions[ticket.priority] || [ticket.priority];
    const nextPriority = options[Math.floor(Math.random() * options.length)];
    return { priority: nextPriority };
  }
}

