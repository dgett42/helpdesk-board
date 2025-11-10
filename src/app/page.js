import Board from './components/Board';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8 bg-black text-slate-100 min-h-screen">
  <h1 className="text-3xl font-bold mb-4">Helpdesk Ticket Board</h1>
  <p className="text-sm text-slate-400 mb-6">
    Filter by status and priority, search by keyword, and add tickets to your queue.
  </p>
  <Board />
</main>
  );
}
