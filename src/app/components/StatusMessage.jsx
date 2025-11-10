'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
        Loading tickets…
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-rose-600/60 bg-rose-950/60 px-4 py-3 text-sm text-rose-100">
        Unable to load tickets. {error}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
        No tickets match your filters.
      </div>
    );
  }

  return null;
}
