import Board from './components/Board';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-slate-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-4">Helpdesk Ticket Board</h1>
        <p className="text-sm text-slate-400 mb-6">
          Filter by status and priority, search by keyword, and add tickets to your queue.
        </p>
        <Board />
      </div>
    </main>
  );
}
