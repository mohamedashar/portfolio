"use client";

import { motion } from "framer-motion";
import TrueFocus from "../components/TrueFocus";
import Squares from "../components/Squares";

import {
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJs,
} from "react-icons/fa";

import {
  SiC,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";

import { Shield, Radar, Wifi } from "lucide-react";

const skillsData = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Cybersecurity Tools",
    items: [
      { name: "Nmap", icon: Radar },
      { name: "Burp Suite", icon: Shield },
      { name: "Aircrack-ng", icon: Wifi },
    ],
  },
  {
    title: "UI / UX & Design",
    items: [
      { name: "Figma", icon: FaFigma },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Premiere Pro", icon: SiAdobepremierepro },
      { name: "After Effects", icon: SiAdobeaftereffects },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white px-4 pt-28 pb-20 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.15}
          squareSize={56}
          direction="diagonal"
          borderColor="rgba(0,255,102,0.12)"
          hoverFillColor="rgba(0,255,102,0.04)"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADING */}
        <div className="mb-16 text-center">
          <TrueFocus
            sentence="SKILLS AND TOOLS"
            blurAmount={6}
            borderColor="#00ff66"
            glowColor="rgba(0,255,102,0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1}
          />
          <style>{`
            .focus-word:nth-child(3) { color: #00ff66; }
          `}</style>
        </div>

        {/* GRID */}
        <motion.div
          className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div
                className="
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border border-white/10
                  p-6 md:p-7 lg:p-8
                  shadow-[0_30px_90px_rgba(0,255,102,0.12)]
                "
              >
                <h3 className="text-xl font-semibold mb-6 text-neon">
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="
                          flex items-center gap-3
                          px-4 py-3
                          rounded-xl
                          bg-black/40
                          border border-white/10
                        "
                      >
                        <Icon className="w-5 h-5 text-neon shrink-0" />
                        <span className="text-sm text-white/90">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
