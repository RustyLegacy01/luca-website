"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const contactMethods = [
  { protocol: "EMAIL", address: "luca@example.com", href: "mailto:luca@example.com", status: "ONLINE", latency: "<50ms" },
  { protocol: "GITHUB", address: "github.com/luca", href: "https://github.com", status: "ACTIVE", latency: "24ms" },
  { protocol: "LINKEDIN", address: "linkedin.com/in/luca", href: "https://linkedin.com", status: "ONLINE", latency: "32ms" },
];

export default function Contact() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 lg:px-16" style={{ color: "#66ff66" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-8">
          <div style={{ color: "#66ff66", fontFamily: "monospace", fontSize: "0.875rem" }}>
            <span>$ </span>
            <span>./connect.sh</span>
          </div>
        </motion.div>

        <div className="terminal-box p-6 mb-6">
          <div className="flex items-center justify-between mb-4 pb-4" style={{ borderBottom: "1px solid #1a331a" }}>
            <span style={{ color: "#ffcc00" }}>NETWORK STATUS</span>
            <span style={{ color: "#00ff41" }}>● CONNECTED</span>
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
                style={{ border: "1px solid #1a331a", textDecoration: "none", display: "flex", padding: "0.75rem", alignItems: "center", justifyContent: "space-between" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ 
                    color: method.status === "ONLINE" ? "#00ff41" : "#ffcc00",
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.5rem",
                    border: `1px solid ${method.status === "ONLINE" ? "#00ff41" : "#ffcc00"}`,
                    borderRadius: "2px"
                  }}>
                    {method.status}
                  </span>
                  <div>
                    <div style={{ color: "#00ffff", fontFamily: "monospace", fontSize: "0.875rem" }}>
                      {method.protocol}
                    </div>
                    <div style={{ color: "#66ff66", fontSize: "0.75rem" }}>
                      {method.address}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#66ff66", fontSize: "0.75rem" }}>
                    latency: {method.latency}
                  </div>
                  <div style={{ 
                    color: "#00ff41", 
                    fontSize: "0.75rem",
                    opacity: hoveredMethod === method.protocol ? 1 : 0,
                    transition: "opacity 0.2s"
                  }}>
                    [CLICK TO CONNECT]
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="terminal-box-amber p-6"
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{ color: "#ffcc00", fontSize: "1.5rem" }}>⚡</div>
            <div>
              <h3 style={{ color: "#ffcc00", fontFamily: "monospace", fontWeight: "bold", marginBottom: "0.5rem" }}>
                READY FOR COLLABORATION
              </h3>
              <p style={{ color: "#66ff66", fontSize: "0.875rem", marginBottom: "1rem" }}>
                Open to internships, projects, and opportunities.
              </p>
              <a
                href="mailto:luca@example.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  border: "1px solid #ffcc00",
                  color: "#ffcc00",
                  textDecoration: "none",
                  fontSize: "0.875rem"
                }}
              >
                <span>$</span>
                <span>send_email</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}