'use client';

import TicketCard from './TicketCard';

export default function TicketList({ tickets, queue, onAddToQueue }) {
  if (!tickets.length) {
    return (
      <div className="mt-2 text-sm text-slate-500">
        {}
        {}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          isQueued={!!queue[ticket.id]}
          onAddToQueue={onAddToQueue}
        />
      ))}
    </div>
  );
}
