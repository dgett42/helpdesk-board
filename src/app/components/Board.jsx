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

  