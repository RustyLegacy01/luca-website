"use client";

import { motion } from "framer-motion";

const skillModules = [
  {
    category: "PROGRAMMING",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML/CSS"],
    color: "var(--terminal-green)",
  },
  {
    category: "TECH_STACK",
    skills: ["React", "Next.js", "Node.js", "Git", "Linux", "Docker"],
    color: "var(--terminal-cyan)",
  },
  {
    category: "FINANCE",
    skills: ["Technical Analysis", "Market Research", "Risk Mgmt", "Portfolio Theory", "Data Analysis", "Excel/GSheets"],
    color: "var(--terminal-amber)",
  },
  {
    category: "SYSTEM",
    skills: ["Problem Solving", "Analysis", "Communication", "Teamwork", "Time Mgmt", "Adaptability"],
    color: "var(--terminal-dim)",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16">
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
            <span className="typing">ls -la skills/</span>
          </div>
        </motion.div>

        {/* Skills Grid */}
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
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[var(--terminal-dim)]/30">
                <span className="text-[var(--terminal-dim)]">drwxr-xr-x</span>
                <span className="text-[var(--terminal-amber)]">luca</span>
                <span className="text-[var(--terminal-dim)]">users</span>
                <span className="text-[var(--terminal-cyan)]">4096</span>
                <span className="text-[var(--terminal-dim)]">Mar 28 10:47</span>
                <span style={{ color: module.color }} className="ml-2 font-bold">
                  {module.category}/
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {module.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-2 text-sm group cursor-default"
                  >
                    <span style={{ color: module.color }} className="opacity-50 group-hover:opacity-100">
                      ›
                    </span>
                    <span className="text-[var(--terminal-dim)] group-hover:text-[var(--foreground)] transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 terminal-box p-6"
        >
          <div className="flex items-center gap-2 mb-4 text-[var(--terminal-dim)] text-sm">
            <span>$</span>
            <span>top</span>
          </div>

          <div className="space-y-4 font-mono text-xs">
            {[
              { name: "Coding", value: 85, color: "var(--terminal-green)" },
              { name: "Analysis", value: 78, color: "var(--terminal-cyan)" },
              { name: "Trading", value: 70, color: "var(--terminal-amber)" },
              { name: "Learning", value: 95, color: "var(--terminal-dim)" },
            ].map((stat) => (
              <div key={stat.name}>
                <div className="flex justify-between mb-1">
                  <span style={{ color: stat.color }}>{stat.name}</span>
                  <span className="text-[var(--terminal-dim)]">{stat.value}%</span>
                </div>
                <div className="h-2 bg-[var(--terminal-dark)] rounded-sm overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-sm"
                    style={{ backgroundColor: stat.color }}
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