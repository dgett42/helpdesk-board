'use client';

export default function MyQueueSummary({ tickets, queue, onRemove, onClear }) {
  const queuedTickets = tickets.filter((t) => queue[t.id]);
  const count = queuedTickets.length;

  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
      <h2 className="text-sm font-semibold text-slate-100 mb-1">
        My Queue
      </h2>
      <p className="text-[11px] text-slate-500 mb-3">
        {count === 0
          ? 'No tickets in your queue.'
          : `You have ${count} ticket${count === 1 ? '' : 's'} queued.`}
      </p>

      {count > 0 && (
        <ul className="mb-3 space-y-2 max-h-64 overflow-y-auto">
          {queuedTickets.map((ticket) => (
            <li
              key={ticket.id}
              className="flex items-start justify-between gap-2 rounded-xl bg-slate-900/70 px-3 py-2"
            >
              <div>
                <p className="text-xs font-medium text-slate-100">
                  {ticket.title}
                </p>
                <p className="text-[11px] text-slate-500">
                  Priority: {ticket.priority} • Status: {ticket.status}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(ticket.id)}
                className="text-[11px] font-semibold text-rose-300 hover:text-rose-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={onClear}
        disabled={count === 0}
        className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800 disabled:cursor-not-allowed disabled:border-slate-800 disabled:bg-slate-950 disabled:text-slate-500"
      >
        Clear Queue
      </button>
    </aside>
  );
}
