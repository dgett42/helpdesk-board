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

  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold ${priorityColor}`}
          >
            Priority: {priority}
          </span>
          <span className={`text-xs font-medium ${statusColor}`}>
            Status: {status}
          </span>
        </div>
        <h2 className="mt-1 text-sm font-semibold text-slate-100">
          {title}
        </h2>
        <p className="text-xs text-slate-400 leading-snug">
          {description}
        </p>
        <p className="mt-1 text-xs text-slate-500">
          <span className="font-medium">Assignee:</span>{' '}
          {assignee || 'Unassigned'}
        </p>
        <p className="text-[11px] text-slate-500">
          Updated: <span className="font-mono">{updatedLabel}</span>
        </p>
      </div>

      <div className="mt-3">
        <button
          type="button"
          onClick={() => onAddToQueue(id)}
          disabled={isQueued}
          className="w-full rounded-xl border border-sky-500/60 bg-sky-600/20 px-3 py-2 text-xs font-semibold text-sky-100 hover:bg-sky-600/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800 disabled:text-slate-400"
        >
          {isQueued ? 'In My Queue' : 'Add to My Queue'}
        </button>
        {isQueued && (
          <p className="mt-1 text-[11px] text-slate-500">
            Already added to your queue.
          </p>
        )}
      </div>
    </article>
  );
}