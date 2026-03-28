"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-8 lg:px-16 border-t border-[var(--terminal-dim)]/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="terminal-box p-4"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs">
            {/* Left: System Info */}
            <div className="text-[var(--terminal-dim)]">
              <span className="text-[var(--terminal-amber)]">SYS:</span> TERMINAL_v1.0.4
              <span className="mx-2">|</span>
              <span className="text-[var(--terminal-green)]">UPTIME:</span> {currentYear}
            </div>

            {/* Center: Status */}
            <div className="flex items-center gap-2">
              <span className="text-[var(--terminal-dim)]">STATUS:</span>
              <span className="text-[var(--terminal-green)]">● OPERATIONAL</span>
            </div>

            {/* Right: Navigation */}
            <nav className="flex gap-4">
              {["hero", "about", "skills", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="text-[var(--terminal-dim)] hover:text-[var(--terminal-green)] transition-colors"
                >
                  [{section}]
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 pt-4 border-t border-[var(--terminal-dim)]/30 flex flex-col sm:flex-row justify-between items-center gap-2 text-[var(--terminal-dim)] text-xs">
            <div>
              <span className="text-[var(--terminal-cyan)]">luca@terminal</span>
              <span>:</span>
              <span className="text-[var(--terminal-amber)]">~</span>
              <span>$</span>{" "}
              <span className="text-[var(--terminal-green)]">echo &quot;Thanks for visiting&quot;</span>
            </div>
            <div className="text-[var(--terminal-dim)]/50">
              {"// Built with caffeine and code"}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}