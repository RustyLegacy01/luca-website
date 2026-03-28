"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [bootText, setBootText] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let delay = 0;
    const sequence = [
      "BIOS DATE 03/28/26 10:47:22 VER 1.0.4",
      "CPU: NEURAL_PROCESSOR_X1 @ 4.2GHz",
      "MEM: 64TB NEURAL RAM... OK",
      "GPU: QUANTUM_RENDERER... OK",
      "LOADING KERNEL...",
      "MOUNTING FILESYSTEMS...",
      "INITIALIZING USER PROFILE...",
      "luca@system:~$ whoami",
    ];
    sequence.forEach((line, index) => {
      delay += Math.random() * 200 + 100;
      setTimeout(() => {
        setBootText((prev) => [...prev, line]);
        if (index === sequence.length - 1) {
          setTimeout(() => setShowPrompt(true), 300);
        }
      }, delay);
    });
  }, []);

  useEffect(() => {
    if (!showPrompt) return;
    const name = "Luca";
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(name.slice(0, i + 1));
      i++;
      if (i >= name.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [showPrompt]);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="terminal-box p-6 mb-8 font-mono text-sm" style={{ color: '#88cc88' }}>
          {bootText.map((line, index) => (
            <div key={index} style={{ color: line.includes("OK") ? '#00ff41' : '#88cc88' }}>
              {line.includes("OK") ? `[OK] ${line.replace("... OK", "")}` : `> ${line}`}
            </div>
          ))}
          {showPrompt && (
            <div className="mt-4">
              <span style={{ color: '#ffcc00' }}>luca@terminal</span>
              <span style={{ color: '#88cc88' }}>:</span>
              <span style={{ color: '#00ffff' }}>~</span>
              <span style={{ color: '#88cc88' }}>$</span>{" "}
              <span className="glow" style={{ color: '#00ff41', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {typedName}
              </span>
              <span className="cursor-blink" style={{ color: '#00ff41' }} />
            </div>
          )}
        </div>

        {showContent && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="terminal-box p-6 mb-6" style={{ color: '#88cc88' }}>
              <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: '#88cc88' }}>
                <span>FILE:</span>
                <span style={{ color: '#00ffff' }}>profile.json</span>
                <span className="ml-auto">STATUS: ACTIVE</span>
              </div>
              
              <pre className="font-mono text-sm overflow-x-auto" style={{ color: '#88cc88' }}>
                <code>{`{
  "role": "CS & Economics Student",
  "focus": ["Technology", "Markets", "Trading"],
  "mission": "Bridging code and markets",
  "status": "Building the future..."
}`}</code>
              </pre>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="terminal-box px-6 py-3 transition-all duration-200 group" style={{ color: '#88cc88', textDecoration: 'none' }}>
                <span style={{ color: '#ffcc00' }}>$</span>{" "}
                <span className="group-hover:glow" style={{ color: '#00ff41' }}>./connect.sh</span>
              </a>
              <a href="#about" className="terminal-box px-6 py-3 transition-all duration-200" style={{ color: '#88cc88', textDecoration: 'none' }}>
                <span style={{ color: '#88cc88' }}>$</span>{" "}
                <span style={{ color: '#88cc88' }}>cat about.txt</span>
              </a>
            </div>

            <div className="mt-8 flex gap-6" style={{ color: '#88cc88' }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#88cc88', textDecoration: 'none' }} className="hover:glow">
                [github]
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#88cc88', textDecoration: 'none' }} className="hover:glow-cyan">
                [linkedin]
              </a>
              <a href="mailto:luca@example.com" style={{ color: '#88cc88', textDecoration: 'none' }} className="hover:glow-amber">
                [email]
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}