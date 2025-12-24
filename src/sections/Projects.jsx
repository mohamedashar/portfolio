"use client";

import { motion } from "framer-motion";
import Shuffle from "../components/Shuffle";
import Particles from "../components/Particles";

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
    tech: ["Computer Vision", "Object Detection", "Web App"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black px-4 pt-28 pb-24 text-white overflow-hidden"
    >
      {/* PARTICLES BACKGROUND — DESKTOP ONLY */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Particles
          particleColors={["#00ff66"]}
          particleCount={150}
          particleSpread={12}
          speed={0.6}
          particleBaseSize={90}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* SOFT PREMIUM GREEN OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.08),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADING */}
        <div className="mb-14 text-center">
          <Shuffle
            text="PROJECTS"
            shuffleDirection="right"
            duration={0.35}
            stagger={0.04}
            triggerOnce
            tag="h2"
            className="projects-heading"
          />
        </div>

        {/* PROJECT LIST */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#00ff66]/30 via-[#00ff66]/10 to-transparent">
                <div className="rounded-3xl bg-[#0b0f0d]/80 border border-[#00ff66]/20 px-7 py-6 transition-all duration-300 group-hover:border-[#00ff66]/45 group-hover:shadow-[0_30px_80px_rgba(0,255,102,0.18)]">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
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

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-black/60 border border-[#00ff66]/30 text-[#00ff66]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HEADING STYLE */}
      <style>{`
        .projects-heading {
          font-size: 3.58rem;
          font-weight: 700;
          letter-spacing: 0em;
          color: #00ff66;
        }

        @media (max-width: 768px) {
          .projects-heading {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </section>
  );
}
