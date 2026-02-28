"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Lydi-0317", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lydia-dondapati/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lydjohn17@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground"
        >
          Designed & Built by{" "}
          <span className="font-medium text-foreground">Lydia Dondapati</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
