export default function Features() {
  const items = [
    {
      title: "Cyber Agents",
      desc: "Each agent has futuristic abilities and weapons.",
    },
    {
      title: "Competitive Maps",
      desc: "Designed for esports-level tactical gameplay.",
    },
    {
      title: "Rank System",
      desc: "Climb ranks and prove your skill globally.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-10 grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition">
          <h3 className="text-cyan-400 text-xl font-bold mb-2">
            {item.title}
          </h3>
          <p className="text-gray-400">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}