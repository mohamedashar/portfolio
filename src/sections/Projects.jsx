"use client";

import { motion } from "framer-motion";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import ElectricBorder from "../components/ElectricBorder";

const projects = [
  {
    title: "Devotional Tracker",
    description:
      "An offline location-tracking application that helps users discover and navigate devotional places without internet dependency. Uses locally stored geospatial data for reliability in low-connectivity areas.",
    tech: ["Offline Maps", "Location Services", "JavaScript"],
  },
  {
    title: "TN Power Vision",
    description:
      "A machine-learning driven predictive analytics system for forecasting solar power generation and improving grid efficiency using historical and real-time data.",
    tech: ["Machine Learning", "Python", "Data Analysis"],
    highlight: "Winner – 1st Place, TANSAM Hackathon",
  },
  {
    title: "Drone Detection System",
    description:
      "A real-time drone detection web application using image processing and object detection techniques with a responsive monitoring dashboard.",
    tech: ["Computer Vision", "Object Detection", "YOLO"],
    github: "https://github.com/mohamedashar/Drone-Detection-System",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black px-4 pt-28 pb-24 text-white overflow-hidden"
    >
      {/* Soft Green Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.08),transparent_60%)]" />

      <div className="relative z-10">

        {/* 🔥 Balanced Line Shadow Heading */}
<div className="mb-16 text-center">
  <h2 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4.2rem] font-bold tracking-tight text-[#00ff66] leading-none">
    <LineShadowText shadowColor="#00ff66">
      PROJECTS
    </LineShadowText>
  </h2>
</div>

        {/* PROJECT CARDS */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <ElectricBorder
                color="#00ff55"
                speed={0.6}
                chaos={0.09}
                borderRadius={24}
                style={{ borderRadius: 24 }}
              >
                <div className="rounded-3xl bg-[#0b0f0d]/85 border border-[#00ff66]/20 px-7 py-7 transition-all duration-300 hover:border-[#00ff66]/45 hover:shadow-[0_30px_80px_rgba(0,255,102,0.18)]">

                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <p className="text-sm text-[#00ff66] font-medium mb-4">
                      {project.highlight}
                    </p>
                  )}

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-black/60 border border-[#00ff66]/30 text-[#00ff66]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GITHUB BUTTON */}
                  {project.github && (
                    <div className="flex justify-start">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InteractiveHoverButton
                          className="
                            border border-[#00ff66]/40 
                            text-white 
                            hover:bg-[#00ff66] 
                            hover:text-black 
                            transition-all duration-300
                          "
                        >
                          View on GitHub
                        </InteractiveHoverButton>
                      </a>
                    </div>
                  )}

                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}