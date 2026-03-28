"use client";

const aboutData = [
  { key: "ROLE", value: "Year 13 Student", color: "#00ff41" },
  { key: "SCHOOL", value: "British School in the Netherlands", color: "#00ffff" },
  { key: "FOCUS", value: "[CS, Economics, Server Hosting]", color: "#ffcc00" },
  { key: "STATUS", value: "Building game servers & homelabs", color: "#00ff41" },
  { key: "MISSION", value: "Things that run 24/7", color: "#00ffff" },
];

const modules = [
  { id: "CS_CORE", name: "Computer Science", desc: "Python-first dev. Java & C(++). Love experimenting.", status: "ACTIVE" },
  { id: "SRV_OPS", name: "Server Operations", desc: "Self-hosted game servers. Homelab enthusiast.", status: "ACTIVE" },
  { id: "ECO_FIN", name: "Economics & Investing", desc: "Macro analysis. Long-term strategy. Markets.", status: "ACTIVE" },
  { id: "BKB_ALL", name: "Basketball", desc: "On the court when not in the terminal.", status: "RUNNING" },
];

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-8 lg:px-16" style={{ color: "#66ff66" }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 fade-in-up" style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem" }}>
          <span className="typewriter">$ cat about.txt</span>
        </div>

        <div className="terminal-box p-6 mb-8 fade-in-up delay-100">
          <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: "1px solid #1a331a" }}>
            <span style={{ color: "#ffcc00" }}>FILE:</span>
            <span style={{ color: "#00ffff" }}>profile.dat</span>
            <span className="ml-auto" style={{ color: "#66ff66" }}>READ-ONLY</span>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: "0.875rem" }}>
            {aboutData.map((item, index) => (
              <div 
                key={item.key} 
                className="flex gap-4 mb-2 fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <span style={{ color: "#66ff66", width: "6rem" }}>{item.key}:</span>
                <span style={{ color: item.color }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="terminal-box-amber p-6 mb-8 fade-in-up delay-300">
          <div style={{ color: "#ffcc00", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "1.6" }}>
            <span style={{ color: "#66ff66" }}>{"//"}</span> THE_STORY
            <br /><br />
            Built a game hosting company. Still running servers as a hobby.
            Love the intersection of code and systems that stay up.
            Long-term investor, macro thinker, basketball player.
            <br /><br />
            I love life.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod, index) => (
            <div 
              key={mod.id} 
              className="terminal-box p-4 fade-in-up glitch-hover"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: "#66ff66", fontSize: "0.75rem" }}>{mod.id}</span>
                <span 
                  className="pulse"
                  style={{ 
                    color: mod.status === "ACTIVE" || mod.status === "RUNNING" ? "#00ff41" : "#ffcc00", 
                    fontSize: "0.75rem" 
                  }}
                >
                  [{mod.status}]
                </span>
              </div>
              <h3 style={{ color: "#00ff41", fontFamily: "monospace", fontWeight: "bold", marginBottom: "0.25rem" }}>
                {mod.name}
              </h3>
              <p style={{ color: "#66ff66", fontSize: "0.875rem" }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}