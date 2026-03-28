"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const aboutData = [
  {
    key: "ROLE",
    value: "CS & Economics Student",
    color: "var(--terminal-green)",
  },
  {
    key: "FOCUS",
    value: "[Technology, Markets, Trading]",
    color: "var(--terminal-cyan)",
  },
  {
    key: "STATUS",
    value: "University-bound // Building the future",
    color: "var(--terminal-amber)",
  },
  {
    key: "MISSION",
    value: "Bridging code and markets",
    color: "var(--terminal-green)",
  },
];

const modules = [
  {
    id: "CS_CORE",
    name: "Computer Science",
    desc: "Software engineering, algorithms, efficient solutions",
    status: "ACTIVE",
  },
  {
    id: "FIN_MOD",
    name: "Trading & Finance",
    desc: "Markets, strategies, quantitative analysis",
    status: "ACTIVE",
  },
  {
    id: "EDU_SYS",
    name: "Education",
    desc: "University next year. CS + Economics double down.",
    status: "PENDING",
  },
  {
    id: "LRN_ENG",
    name: "Learning Engine",
    desc: "Always exploring. Always curious.",
    status: "RUNNING",
  },
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= aboutData.length + 2) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-[var(--terminal-dim)] text-sm mb-4">
            <span>$</span>
            <span className="typing">cat about.txt</span>
          </div>
        </motion.div>

        {/* Profile Data */}
        <div className="terminal-box p-6 mb-8">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[var(--terminal-dim)]/30">
            <span className="text-[var(--terminal-amber)]">FILE:</span>
            <span className="text-[var(--terminal-cyan)]">profile.dat</span>
            <span className="ml-auto text-[var(--terminal-dim)]">READ-ONLY</span>
          </div>

          <div className="font-mono text-sm space-y-2">
            {aboutData.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: visibleLines > index ? 1 : 0,
                  x: visibleLines > index ? 0 : -20,
                }}
                transition={{ duration: 0.3 }}
                className="flex gap-4"
              >
                <span className="text-[var(--terminal-dim)] w-20">{item.key}:</span>
                <span style={{ color: item.color }}>{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="terminal-box-amber p-6 mb-8"
        >
          <div className="text-[var(--terminal-amber)] font-mono text-sm leading-relaxed">
            <span className="text-[var(--terminal-dim)]">{"//"}</span> INTERSECTION_POINT
            <br />
            <br />
            Student with a unique blend. The future belongs to those who
            understand both technology and economics. Positioning at that
            intersection.
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="terminal-box p-4 hover:border-[var(--terminal-cyan)] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[var(--terminal-dim)] text-xs">{mod.id}</span>
                <span
                  className={`text-xs ${
                    mod.status === "ACTIVE" || mod.status === "RUNNING"
                      ? "text-[var(--terminal-green)]"
                      : "text-[var(--terminal-amber)]"
                  }`}
                >
                  [{mod.status}]
                </span>
              </div>
              <h3 className="text-[var(--terminal-green)] font-mono font-bold mb-1 group-hover:glow">
                {mod.name}
              </h3>
              <p className="text-[var(--terminal-dim)] text-sm">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}