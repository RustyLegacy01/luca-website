"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-8 lg:px-16" style={{ borderTop: "1px solid #1a331a" }}>
      <div className="max-w-4xl mx-auto">
        <div className="terminal-box p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4" style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
            <div style={{ color: "#66ff66" }}>
              <span style={{ color: "#ffcc00" }}>SYS:</span> TERMINAL_v1.0.4
              <span style={{ margin: "0 0.5rem" }}>|</span>
              <span style={{ color: "#00ff41" }}>UPTIME:</span> {currentYear}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "#66ff66" }}>STATUS:</span>
              <span style={{ color: "#00ff41" }}>● OPERATIONAL</span>
            </div>

            <nav style={{ display: "flex", gap: "1rem" }}>
              {["hero", "about", "skills", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  style={{ color: "#66ff66", textDecoration: "none" }}
                >
                  [{section}]
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-4 pt-4" style={{ borderTop: "1px solid #1a331a", fontFamily: "monospace", fontSize: "0.75rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ color: "#66ff66" }}>
                <span style={{ color: "#00ffff" }}>luca@terminal</span>
                <span>:</span>
                <span style={{ color: "#ffcc00" }}>~</span>
                <span>$</span>{" "}
                <span style={{ color: "#00ff41" }}>echo &quot;Thanks for visiting&quot;</span>
              </div>
              <div style={{ color: "#449944" }}>
                {"// Built with caffeine and code"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}