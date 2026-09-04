import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto p-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e40af20,transparent_60%)] pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight">
            WatchTower
          </h1>

          <p className="text-slate-400 mt-2 text-lg max-w-2xl">
            Track only the market changes that deserve your attention.
          </p>

          <Dashboard />
        </div>
      </div>
    </main>
  );
}