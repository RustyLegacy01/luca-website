"use client";

import { motion } from "framer-motion";

const skillModules = [
  { category: "PROGRAMMING", skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"], color: "#00ff41" },
  { category: "TECH_STACK", skills: ["React", "Next.js", "Node.js", "Git", "Linux", "Docker"], color: "#00ffff" },
  { category: "FINANCE", skills: ["Technical Analysis", "Market Research", "Risk Mgmt", "Portfolio Theory", "Data Analysis", "Excel"], color: "#ffcc00" },
  { category: "SYSTEM", skills: ["Problem Solving", "Analysis", "Communication", "Teamwork", "Time Mgmt", "Adaptability"], color: "#66ff66" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-16" style={{ color: "#66ff66" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
          <div style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem" }}>
            <span>$ </span>
            <span>ls -la skills/</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {skillModules.map((module, index) => (
            <motion.div
              key={module.category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="terminal-box p-4"
            >
              <div className="flex items-center gap-2 mb-3 pb-3" style={{ borderBottom: "1px solid #1a331a" }}>
                <span style={{ color: "#66ff66" }}>drwxr-xr-x</span>
                <span style={{ color: "#ffcc00" }}>luca</span>
                <span style={{ color: "#66ff66" }}>users</span>
                <span style={{ color: "#00ffff" }}>4096</span>
                <span style={{ color: "#66ff66" }}>Mar 28</span>
                <span style={{ color: module.color, fontWeight: "bold", marginLeft: "0.5rem" }}>
                  {module.category}/
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {module.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2" style={{ fontSize: "0.875rem" }}>
                    <span style={{ color: module.color }}>›</span>
                    <span style={{ color: "#66ff66" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 terminal-box p-6"
        >
          <div style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem", marginBottom: "1rem" }}>
            <span>$ top</span>
          </div>

          <div style={{ fontFamily: "monospace", fontSize: "0.75rem" }}>
            {[
              { name: "Coding", value: 85, color: "#00ff41" },
              { name: "Analysis", value: 78, color: "#00ffff" },
              { name: "Trading", value: 70, color: "#ffcc00" },
              { name: "Learning", value: 95, color: "#66ff66" },
            ].map((stat) => (
              <div key={stat.name} style={{ marginBottom: "0.75rem" }}>
                <div className="flex justify-between mb-1">
                  <span style={{ color: stat.color }}>{stat.name}</span>
                  <span style={{ color: "#66ff66" }}>{stat.value}%</span>
                </div>
                <div style={{ height: "0.5rem", background: "#0a1a0a", borderRadius: "2px", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{ height: "100%", backgroundColor: stat.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}