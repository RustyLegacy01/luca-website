"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16" style={{ fontFamily: "monospace", fontSize: "0.875rem" }}>
            <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#00ff41", textDecoration: "none" }}>
              <span style={{ color: "#ffcc00" }}>luca</span>
              <span style={{ color: "#66ff66" }}>@</span>
              <span style={{ color: "#00ffff" }}>terminal</span>
              <span style={{ color: "#66ff66" }}>:~$</span>
            </a>

            <div style={{ color: "#66ff66" }} className="hidden sm:block">
              [{currentTime}]
            </div>

            <nav className="hidden sm:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} style={{ padding: "0.25rem 0.75rem", color: "#66ff66", textDecoration: "none" }}>
                  ./{link.name}
                </a>
              ))}
              <a href="#contact" className="terminal-box" style={{ marginLeft: "1rem", padding: "0.25rem 1rem", color: "#66ff66", textDecoration: "none" }}>
                ./connect
              </a>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ padding: "0.5rem", color: "#00ff41", background: "none", border: "none", cursor: "pointer" }} className="sm:hidden">
              <span style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
                {isMobileMenuOpen ? "[CLOSE]" : "[MENU]"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 sm:hidden" style={{ top: "3.5rem" }}>
            <div className="terminal-box m-4 p-4">
              <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontFamily: "monospace" }}>
                {navLinks.map((link, index) => (
                  <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.75rem 1rem", color: "#66ff66", textDecoration: "none" }}>
                    <span style={{ color: "#ffcc00" }}>{index + 1}.</span>{" "}
                    ./{link.name}
                  </a>
                ))}
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: "0.5rem", padding: "0.75rem 1rem", textAlign: "center", color: "#00ff41", border: "1px solid #00ff41", textDecoration: "none" }}>
                  ./connect --now
                </a>
              </nav>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}