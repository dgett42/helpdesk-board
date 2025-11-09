'use client';

export default function TicketCard({ ticket, isQueued, onAddToQueue }) {
  const { id, title, description, priority, status, assignee, updatedAt } =
    ticket;

  const updatedLabel = new Date(updatedAt).toLocaleString();

  const priorityColor =
    priority === 'Critical'
      ? 'bg-red-500/20 text-red-300 border-red-500/40'
      : priority === 'High'
      ? 'bg-orange-500/20 text-orange-300 border-orange-500/40'
      : priority === 'Medium'
      ? 'bg-yellow-500/20 text-yellow-200 border-yellow-500/40'
      : 'bg-emerald-500/20 text-emerald-200 border-emerald-500/40';

  const statusColor =
    status === 'Resolved'
      ? 'text-emerald-300'
      : status === 'In Progress'
      ? 'text-sky-300'
      : status === 'On Hold'
      ? 'text-yellow-300'
      : 'text-slate-100';
