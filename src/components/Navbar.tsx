"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { 
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }));
    };

    window.addEventListener("scroll", handleScroll);
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "terminal-box border-t-0 border-l-0 border-r-0"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 font-mono text-sm">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2 text-[var(--terminal-green)] glow"
            >
              <span className="text-[var(--terminal-amber)]">luca</span>
              <span className="text-[var(--terminal-dim)]">@</span>
              <span className="text-[var(--terminal-cyan)]">terminal</span>
              <span className="text-[var(--terminal-dim)]">:~$</span>
            </a>

            {/* Time Display */}
            <div className="hidden sm:block text-[var(--terminal-dim)]">
              [{currentTime}]
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden sm:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1 text-[var(--terminal-dim)] hover:text-[var(--terminal-green)] hover:glow transition-all"
                >
                  ./{link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 px-4 py-1 terminal-box hover:bg-[var(--terminal-green)] hover:text-[var(--background)] transition-all"
              >
                ./connect
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 text-[var(--terminal-green)]"
              aria-label="Toggle menu"
            >
              <span className="font-mono text-xs">
                {isMobileMenuOpen ? "[CLOSE]" : "[MENU]"}
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 sm:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--background)]/90"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-14 left-0 right-0 terminal-box m-4 p-4">
              <nav className="flex flex-col gap-2 font-mono">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-[var(--terminal-dim)] hover:text-[var(--terminal-green)] hover:bg-[var(--terminal-dark)]/50 transition-all"
                  >
                    <span className="text-[var(--terminal-amber)]">{index + 1}.</span>{" "}
                    ./{link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-4 py-3 text-center text-[var(--terminal-green)] border border-[var(--terminal-green)] hover:bg-[var(--terminal-green)] hover:text-[var(--background)] transition-all"
                >
                  ./connect --now
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}