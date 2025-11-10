'use client';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, queue, onAddToQueue }) {
  if (!tickets.length) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
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
