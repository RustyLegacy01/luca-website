"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    protocol: "EMAIL",
    address: "luca@example.com",
    href: "mailto:luca@example.com",
    status: "ONLINE",
    latency: "<50ms",
  },
  {
    protocol: "GITHUB",
    address: "github.com/luca",
    href: "https://github.com",
    status: "ACTIVE",
    latency: "24ms",
  },
  {
    protocol: "LINKEDIN",
    address: "linkedin.com/in/luca",
    href: "https://linkedin.com",
    status: "ONLINE",
    latency: "32ms",
  },
];

export default function Contact() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);
  const [commandOutput, setCommandOutput] = useState<string[]>([]);

  const handleConnect = (method: string) => {
    setCommandOutput((prev) => [
      ...prev,
      `> Establishing connection to ${method}...`,
      `> Handshake successful`,
      `> Connection established`,
      `>`,
    ]);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16">
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
            <span className="typing">./connect.sh --interactive</span>
          </div>
        </motion.div>

        {/* Connection Status */}
        <div className="terminal-box p-6 mb-6">
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-[var(--terminal-dim)]/30">
            <span className="text-[var(--terminal-amber)]">NETWORK STATUS</span>
            <span className="text-[var(--terminal-green)]">● CONNECTED</span>
          </div>

          <div className="space-y-3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.protocol}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredMethod(method.protocol)}
                onMouseLeave={() => setHoveredMethod(null)}
                onClick={() => handleConnect(method.protocol)}
                className="flex items-center justify-between p-3 border border-[var(--terminal-dim)]/30 hover:border-[var(--terminal-green)] hover:bg-[var(--terminal-dark)]/30 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      method.status === "ONLINE"
                        ? "bg-[var(--terminal-green)]/20 text-[var(--terminal-green)]"
                        : "bg-[var(--terminal-amber)]/20 text-[var(--terminal-amber)]"
                    }`}
                  >
                    {method.status}
                  </span>
                  <div>
                    <div className="text-[var(--terminal-cyan)] font-mono text-sm">
                      {method.protocol}
                    </div>
                    <div className="text-[var(--terminal-dim)] text-xs">
                      {method.address}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[var(--terminal-dim)] text-xs">
                    latency: {method.latency}
                  </div>
                  <div
                    className={`text-xs transition-opacity ${
                      hoveredMethod === method.protocol
                        ? "opacity-100 text-[var(--terminal-green)]"
                        : "opacity-0"
                    }`}
                  >
                    [CLICK TO CONNECT]
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Terminal Output */}
        {commandOutput.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="terminal-box p-4 mb-6 bg-[var(--terminal-dark)]/50"
          >
            <div className="font-mono text-xs space-y-1">
              {commandOutput.map((line, index) => (
                <div
                  key={index}
                  className={
                    line.startsWith(">")
                      ? "text-[var(--terminal-green)]"
                      : "text-[var(--terminal-dim)]"
                  }
                >
                  {line}
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[var(--terminal-amber)]">luca@terminal</span>
                <span className="text-[var(--terminal-dim)]">:</span>
                <span className="text-[var(--terminal-cyan)]">~</span>
                <span className="text-[var(--terminal-dim)]">$</span>
                <span className="cursor-blink text-[var(--terminal-green)]" />
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="terminal-box-amber p-6"
        >
          <div className="flex items-start gap-4">
            <div className="text-[var(--terminal-amber)] text-2xl">⚡</div>
            <div>
              <h3 className="text-[var(--terminal-amber)] font-mono font-bold mb-2 glow-amber">
                READY FOR COLLABORATION
              </h3>
              <p className="text-[var(--terminal-dim)] text-sm mb-4">
                Open to internships, projects, and opportunities where I can apply
                skills in CS and finance.
              </p>
              <a
                href="mailto:luca@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--terminal-amber)] text-[var(--terminal-amber)] hover:bg-[var(--terminal-amber)] hover:text-[var(--background)] transition-all text-sm"
              >
                <span>$</span>
                <span>send_email --priority=high</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}