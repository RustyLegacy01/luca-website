"use client";

const bootText = [
  { text: "BIOS DATE 03/28/26 10:47:22 VER 1.0.4", color: "#88cc88" },
  { text: "CPU: SELF_HOSTED_X1 @ 4.2GHz", color: "#88cc88" },
  { text: "MEM: HOMELAB_SERVER_STACK", color: "#00ff41", ok: true },
  { text: "GPU: BASKETBALL_RENDERER", color: "#00ff41", ok: true },
  { text: "LOADING KERNEL...", color: "#88cc88" },
  { text: "MOUNTING FILESYSTEMS...", color: "#88cc88" },
  { text: "SPINNING UP GAME_SERVERS...", color: "#88cc88" },
  { text: "luca@system:~$ whoami", color: "#88cc88" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="terminal-box p-6 mb-8 font-mono text-sm relative overflow-hidden scanline-sweep">
          {bootText.map((line, index) => (
            <div 
              key={index} 
              className="fade-in-up"
              style={{ 
                color: line.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {line.ok ? `[OK] ${line.text.replace("... OK", "")}` : `> ${line.text}`}
            </div>
          ))}
          <div className="mt-4 fade-in-up" style={{ animationDelay: '0.8s' }}>
            <span style={{ color: '#ffcc00' }}>luca@terminal</span>
            <span style={{ color: '#88cc88' }}>:</span>
            <span style={{ color: '#00ffff' }}>~</span>
            <span style={{ color: '#88cc88' }}>$</span>{" "}
            <span className="glow" style={{ color: '#00ff41', fontSize: '1.5rem', fontWeight: 'bold' }}>
              Luca
            </span>
            <span className="cursor-blink" style={{ color: '#00ff41' }} />
          </div>
        </div>

        <div>
          <div className="terminal-box p-6 mb-6 fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: '#88cc88' }}>
              <span>FILE:</span>
              <span style={{ color: '#00ffff' }}>profile.json</span>
              <span className="ml-auto">STATUS: ACTIVE</span>
            </div>
            
            <pre className="font-mono text-sm overflow-x-auto" style={{ color: '#88cc88' }}>
              <code>{`{
  "role": "Year 13 Student @ BSN",
  "focus": ["CS", "Economics", "Server Hosting", "Game Servers"],
  "mission": "Building things that run 24/7",
  "status": "I love life"
}`}</code>
            </pre>
          </div>

          <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: '1.2s' }}>
            <a 
              href="#contact" 
              className="terminal-box px-6 py-3 group" 
              style={{ color: '#88cc88', textDecoration: 'none' }}
            >
              <span style={{ color: '#ffcc00' }}>$</span>{" "}
              <span className="group-hover:glow transition-all duration-200" style={{ color: '#00ff41' }}>./connect.sh</span>
            </a>
            <a 
              href="#about" 
              className="terminal-box px-6 py-3" 
              style={{ color: '#88cc88', textDecoration: 'none' }}
            >
              <span style={{ color: '#88cc88' }}>$</span>{" "}
              <span style={{ color: '#88cc88' }}>cat about.txt</span>
            </a>
          </div>

          <div className="mt-8 flex gap-6 fade-in-up" style={{ color: '#88cc88', animationDelay: '1.4s' }}>
            <a 
              href="https://github.com/RustyLegacy01" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#88cc88', textDecoration: 'none' }} 
              className="hover:glow transition-all duration-200"
            >
              [github]
            </a>
            <a 
              href="https://www.linkedin.com/in/luca-noble-6ab1992b3/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#88cc88', textDecoration: 'none' }} 
              className="hover:glow transition-all duration-200"
            >
              [linkedin]
            </a>
            <a 
              href="mailto:rustyluca1@gmail.com" 
              style={{ color: '#88cc88', textDecoration: 'none' }} 
              className="hover:glow transition-all duration-200"
            >
              [email]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}