"use client";

const skillModules = [
  { category: "LANGUAGES", skills: ["Python (primary)", "Java", "C", "C++"], color: "#00ff41" },
  { category: "SYSTEMS", skills: ["Linux", "Server Management", "Game Hosting", "Homelab"], color: "#00ffff" },
  { category: "FINANCE", skills: ["Macro Analysis", "Long-term Investing", "Strategy", "Market Research"], color: "#ffcc00" },
  { category: "LIFE", skills: ["Basketball", "Experimenting", "Learning", "Server Hoarding"], color: "#66ff66" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 sm:px-8 lg:px-16" style={{ color: "#66ff66" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8" style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem" }}>
          <span>$ </span>
          <span>ls -la skills/</span>
        </div>

        <div className="space-y-4">
          {skillModules.map((module) => (
            <div key={module.category} className="terminal-box p-4">
              <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #1a331a" }}>
                <span style={{ color: "#66ff66" }}>drwxr-xr-x</span>
                <span style={{ color: "#ffcc00" }}>luca</span>
                <span style={{ color: "#66ff66" }}>users</span>
                <span style={{ color: "#00ffff" }}>4096</span>
                <span style={{ color: "#66ff66" }}>Mar 28</span>
                <span style={{ color: module.color, fontWeight: "bold", marginLeft: "0.5rem" }}>
                  {module.category}/
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {module.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2" style={{ fontSize: "0.875rem" }}>
                    <span style={{ color: module.color }}>›</span>
                    <span style={{ color: "#66ff66" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 terminal-box p-6">
          <div style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem", marginBottom: "1rem" }}>
            <span>$ top</span>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
            {[
              { name: "Python", value: 95, color: "#00ff41" },
              { name: "Server Ops", value: 85, color: "#00ffff" },
              { name: "Basketball", value: 80, color: "#ffcc00" },
              { name: "Learning", value: 99, color: "#66ff66" },
            ].map((stat) => (
              <div key={stat.name} style={{ marginBottom: "0.75rem" }}>
                <div className="flex justify-between mb-1">
                  <span style={{ color: stat.color }}>{stat.name}</span>
                  <span style={{ color: "#66ff66" }}>{stat.value}%</span>
                </div>
                <div style={{ height: "0.5rem", background: "#0a1a0a", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ height: "100%", backgroundColor: stat.color, width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}