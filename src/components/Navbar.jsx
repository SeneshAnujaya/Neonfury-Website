export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-black text-white border-b border-white/10">
      <h1 className="text-2xl font-bold text-cyan-400 tracking-widest">
        NEONFURY
      </h1>

      <nav className="hidden md:flex gap-8 text-gray-300">
        <a className="hover:text-white" href="#">Home</a>
        <a className="hover:text-white" href="#">Agents</a>
        <a className="hover:text-white" href="#">Maps</a>
        <a className="hover:text-white" href="#">Esports</a>
      </nav>

      <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-xl font-semibold">
        Play Now
      </button>
    </header>
  );
}