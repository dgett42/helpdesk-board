'use client';

export default function StatusFilter({ value, onChange }) {
  return (
    <label className="flex flex-col text-xs text-slate-300">
      <span className="mb-1 font-medium">Status</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      >
        <option value="All">All</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="On Hold">On Hold</option>
        <option value="Resolved">Resolved</option>
      </select>
    </label>
  );
}