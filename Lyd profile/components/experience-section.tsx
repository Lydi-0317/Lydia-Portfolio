"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    year: "2025",
    role: "Data Science and Big Data Analytics Intern",
    company: "Blackbucks Engineers",
    companyUrl: "https://theblackbucks.com/",
    description:
      "Developed a network intrusion detection system using machine learning techniques to classify cyber-attack patterns in network traffic data. Improved classification performance through feature engineering and imbalance handling, achieving reliable detection under noisy conditions.",
    tags: ["Scikit-learn", "SMOTE", "Pandas", "XGBoost", "Hyperparameter Tuning"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          description="A timeline of my professional journey and the impact I've made along the way."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden md:left-[29px] md:block">
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    <div className="absolute h-3 w-3 rounded-full bg-primary/30 transition-all group-hover:scale-150 group-hover:bg-primary/50" />
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 transition-all hover:glow sm:p-8">
                  {/* Period */}
                  <span className="mb-2 inline-block text-sm font-medium text-primary">
                    {exp.year}
                  </span>

                  {/* Role & Company */}
                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {exp.company}
                    <ExternalLink size={12} />
                  </a>

                  {/* Description */}
                  <p className="mb-5 leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
