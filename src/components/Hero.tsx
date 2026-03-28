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
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Boot Sequence */}
        <div className="terminal-box p-6 mb-8 font-mono text-sm">
          {bootText.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${
                line.includes("OK") ? "text-[var(--terminal-green)]" : "text-[var(--terminal-dim)]"
              }`}
            >
              {line.includes("OK") ? `[OK] ${line.replace("... OK", "")}` : `> ${line}`}
            </motion.div>
          ))}
          {showPrompt && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4"
            >
              <span className="text-[var(--terminal-amber)]">luca@terminal</span>
              <span className="text-[var(--terminal-dim)]">:</span>
              <span className="text-[var(--terminal-cyan)]">~</span>
              <span className="text-[var(--terminal-dim)]">$</span>{" "}
              <span className="glow text-[var(--terminal-green)] text-2xl sm:text-4xl font-bold">
                {typedName}
              </span>
              <span className="cursor-blink text-[var(--terminal-green)]" />
            </motion.div>
          )}
        </div>

        {/* Main Content */}
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal-box p-6 mb-6">
              <div className="flex items-center gap-2 mb-4 text-[var(--terminal-dim)] text-sm">
                <span>FILE:</span>
                <span className="text-[var(--terminal-cyan)]">profile.json</span>
                <span className="ml-auto">STATUS: ACTIVE</span>
              </div>
              
              <pre className="font-mono text-sm overflow-x-auto">
                <code className="text-[var(--terminal-dim)]">
                  {`{
  "role": "CS & Economics Student",
  "focus": ["Technology", "Markets", "Trading"],
  "mission": "Bridging code and markets",
  "status": "Building the future..."
}`}
                </code>
              </pre>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="terminal-box px-6 py-3 hover:bg-[var(--terminal-green)] hover:text-[var(--background)] transition-all duration-200 group"
              >
                <span className="text-[var(--terminal-amber)]">$</span>{" "}
                <span className="group-hover:glow">./connect.sh</span>
              </a>
              <a
                href="#about"
                className="terminal-box px-6 py-3 hover:bg-[var(--terminal-dim)] transition-all duration-200"
              >
                <span className="text-[var(--terminal-dim)]">$</span>{" "}
                <span>cat about.txt</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex gap-6 text-[var(--terminal-dim)]"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--terminal-green)] hover:glow transition-all"
              >
                [github]
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--terminal-cyan)] hover:glow-cyan transition-all"
              >
                [linkedin]
              </a>
              <a
                href="mailto:luca@example.com"
                className="hover:text-[var(--terminal-amber)] hover:glow-amber transition-all"
              >
                [email]
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}