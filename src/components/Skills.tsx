"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "Technologies",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Git",
      "Linux",
      "Docker",
    ],
  },
  {
    title: "Finance & Trading",
    skills: [
      "Technical Analysis",
      "Market Research",
      "Risk Management",
      "Portfolio Theory",
      "Data Analysis",
      "Excel/Google Sheets",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Communication",
      "Teamwork",
      "Time Management",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            What I <span className="gradient-text">Bring to the Table</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A diverse skill set spanning technical development and financial
            analysis, built through self-study, projects, and hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50"
            >
              <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
