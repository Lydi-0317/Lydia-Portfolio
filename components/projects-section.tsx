"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./section-header";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Multimodal E-commerce Price Prediction System",
    description:
      "Developed an end-to-end machine learning pipeline predicting product prices using text, image and structured product data. Built feature fusion regression model using XGBoost for large-scale dataset.",
    tags: ["Python","Scikit-learn","TF-IDF","XGBoost","Pandas","NumPy", "PIL"],
    github: "https://github.com/Lydi-0317/Multimodal-Price-Prediction",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Personalized Restaurant Recommendation Engine",
    description:
      "Built a ranking-based recommendation system using customer behavior and location data to generate personalized Top-K restaurant suggestions.",
    tags: ["Python", "LightGBM", "Scikit-learn", "Pandas", "Feature Engineering"],
    github: "https://github.com/Lydi-0317/Predictive-Restaurant-Recommender",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Song Recommendation System",
    description:
      "Developed a personalized music recommendation system that suggests similar songs based on listening patterns and audio characteristics. The system analyzes track features and automatically groups related songs to help users discover new music aligned with their preferences.",
    tags: ["Python", "Scikit-learn", "KMeans", "PCA"],
    github: "https://github.com/Lydi-0317/Song-Recommendation-System",
    live: "https://example.com",
    featured: true,
  },
];

function FeaturedProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className="glass group relative overflow-hidden rounded-2xl transition-all hover:glow"
    >
      {/* Gradient Top Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="p-8">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ArrowUpRight size={20} />
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Featured
            </span>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Github size={16} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/50 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
  );
}

function SmallProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      whileHover={{ y: -4 }}
      className="glass group flex h-full flex-col rounded-xl p-6 transition-all hover:glow"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
          <Code size={18} />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      <h3 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Code({ size, ...props }: { size: number } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          description="A collection of projects that showcase my skills and passion for building great software."
        />

        {/* Featured Projects */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-lg font-semibold text-foreground"
        >
          Other Noteworthy Projects
        </motion.h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, i) => (
            <SmallProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
