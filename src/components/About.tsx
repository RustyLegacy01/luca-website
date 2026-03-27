"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, GraduationCap, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Computer Science",
    description:
      "Building with modern technologies. Passionate about software engineering, algorithms, and creating efficient solutions.",
  },
  {
    icon: TrendingUp,
    title: "Trading & Finance",
    description:
      "Active interest in financial markets, trading strategies, and quantitative analysis. Always analyzing trends and opportunities.",
  },
  {
    icon: GraduationCap,
    title: "University Bound",
    description:
      "Heading to university next year to deepen my knowledge in CS and Economics. Excited for the journey ahead.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description:
      "Curious by nature. Constantly exploring new technologies, market theories, and ways to combine them effectively.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The Intersection of{" "}
            <span className="gradient-text">Code & Markets</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a student with a unique blend of interests. I believe that the
            future belongs to those who understand both technology and economics
            — and I&apos;m positioning myself at that intersection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 sm:p-8 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
