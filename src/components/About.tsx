"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const aboutData = [
  { key: "ROLE", value: "CS & Economics Student", color: "#00ff41" },
  { key: "FOCUS", value: "[Technology, Markets, Trading]", color: "#00ffff" },
  { key: "STATUS", value: "University-bound", color: "#ffcc00" },
  { key: "MISSION", value: "Bridging code and markets", color: "#00ff41" },
];

const modules = [
  { id: "CS_CORE", name: "Computer Science", desc: "Software engineering, algorithms", status: "ACTIVE" },
  { id: "FIN_MOD", name: "Trading & Finance", desc: "Markets, strategies, analysis", status: "ACTIVE" },
  { id: "EDU_SYS", name: "Education", desc: "University next year", status: "PENDING" },
  { id: "LRN_ENG", name: "Learning Engine", desc: "Always exploring", status: "RUNNING" },
];

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= 6) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-4 sm:px-8 lg:px-16" style={{ color: "#66ff66" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
          <div style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem" }}>
            <span>$ </span>
            <span>cat about.txt</span>
          </div>
        </motion.div>

        <div className="terminal-box p-6 mb-8">
          <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: "1px solid #1a331a" }}>
            <span style={{ color: "#ffcc00" }}>FILE:</span>
            <span style={{ color: "#00ffff" }}>profile.dat</span>
            <span className="ml-auto" style={{ color: "#66ff66" }}>READ-ONLY</span>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: "0.875rem" }}>
            {aboutData.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: visibleLines > index ? 1 : 0, x: visibleLines > index ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 mb-2"
              >
                <span style={{ color: "#66ff66", width: "5rem" }}>{item.key}:</span>
                <span style={{ color: item.color }}>{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="terminal-box-amber p-6 mb-8"
        >
          <div style={{ color: "#ffcc00", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "1.6" }}>
            <span style={{ color: "#66ff66" }}>{"//"}</span> INTERSECTION_POINT
            <br /><br />
            Student with a unique blend. The future belongs to those who
            understand both technology and economics.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="terminal-box p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ color: "#66ff66", fontSize: "0.75rem" }}>{mod.id}</span>
                <span style={{ color: mod.status === "ACTIVE" || mod.status === "RUNNING" ? "#00ff41" : "#ffcc00", fontSize: "0.75rem" }}>
                  [{mod.status}]
                </span>
              </div>
              <h3 style={{ color: "#00ff41", fontFamily: "monospace", fontWeight: "bold", marginBottom: "0.25rem" }}>
                {mod.name}
              </h3>
              <p style={{ color: "#66ff66", fontSize: "0.875rem" }}>{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}