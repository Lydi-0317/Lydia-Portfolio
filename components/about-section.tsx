"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { Cpu, Database, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Machine Learning Models",
    description: "Building predictive and classification models using modern machine learning algorithms.",
  },
  {
    icon: Database,
    title: "Data Analysis & Feature Engineering",
    description: "Processing datasets, extracting meaningful features, and preparing data for reliable model training.",
  },
  {
    icon: BarChart3,
    title: "Model Evaluation & Optimization",
    description: "Evaluating model performance using metrics and improving accuracy through tuning and validation.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-32 pt-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="A bit about me"
          description="I am an AI and Machine Learning enthusiast focused on building data-driven software systems. My work involves developing predictive models, recommendation engines, and intelligent applications using Python and modern machine learning frameworks. I have experience working with real-world datasets, feature engineering, model evaluation, and deploying practical solutions to solve real problems."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="leading-relaxed text-muted-foreground">
              I am an Artificial Intelligence and Machine Learning enthusiast focused on building data-driven software systems. 
              My interests lie in predictive modeling, recommendation systems, and solving real-world problems using data.
              I have hands-on experience working with real datasets, performing preprocessing, feature engineering, model training, and evaluation using {" "}
              <span className="font-medium text-foreground">Python</span> and{" "}
              <span className="font-medium text-foreground">Machine Learning Libraries</span>.

            </p>
            <p className="leading-relaxed text-muted-foreground">
              Currently, I specialize in building modern web applications with{" "}
              <span className="font-medium text-foreground">React</span>,{" "}
              <span className="font-medium text-foreground">Next.js</span>, and{" "}
              <span className="font-medium text-foreground">TypeScript</span>.
              I enjoy transforming raw data into meaningful insights and practical applications.
              My goal is to build intelligent applications that are reliable, scalable, and useful in real-world scenarios.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I'm not coding, you can find me exploring open source
              projects, writing technical articles, or experimenting with new
              technologies and creative side projects.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass group flex items-start gap-4 rounded-xl p-6 transition-all hover:glow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
