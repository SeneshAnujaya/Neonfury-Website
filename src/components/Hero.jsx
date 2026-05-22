export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
      
      <p className="text-cyan-400 tracking-widest mb-4">
        CYBER TACTICAL SHOOTER
      </p>

      <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Enter the world of <br />
        <span className="text-cyan-400">NEONFURY</span>
      </h2>

      <p className="mt-6 max-w-xl text-gray-400">
        A next-generation 5v5 tactical FPS where cyber agents fight for control
        in a neon-drenched battlefield via github action VPS.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold">
          Download Game
        </button>
        <button className="border border-white/20 px-6 py-3 rounded-xl hover:border-white">
          Watch Trailer
        </button>
      </div>
    </section>
  );
}