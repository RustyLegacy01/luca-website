"use client";

import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactLinks = [
  {
    name: "Email",
    value: "luca@example.com",
    href: "mailto:luca@example.com",
    icon: Mail,
    isLucide: true,
    description: "Drop me a line anytime",
  },
  {
    name: "GitHub",
    value: "github.com/luca",
    href: "https://github.com",
    icon: GitHubIcon,
    isLucide: false,
    description: "Check out my projects",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/luca",
    href: "https://linkedin.com",
    icon: LinkedInIcon,
    isLucide: false,
    description: "Let&apos;s connect professionally",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you want to discuss tech, trading, opportunities, or just
            say hi — I&apos;m always open to interesting conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700/50 transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                  {link.isLucide ? (
                    <link.icon className="w-5 h-5" />
                  ) : (
                    <link.icon />
                  )}
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-semibold mb-1">{link.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                {link.value}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {link.description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-violet-600 dark:from-blue-700 dark:to-violet-700 rounded-3xl p-8 sm:p-12 text-center text-white"
        >
          <Send className="w-10 h-10 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            I&apos;m currently open to internships, projects, and opportunities where
            I can apply my skills in CS and finance.
          </p>
          <a
            href="mailto:luca@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            Send me an email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
