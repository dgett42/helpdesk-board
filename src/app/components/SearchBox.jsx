'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <div className="flex flex-col text-xs text-slate-300">
      <span className="mb-1 font-medium">Search</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search title or description"
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      />
    </div>
  );
}
