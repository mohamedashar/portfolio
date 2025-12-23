"use client";

import { motion } from "framer-motion";
import LetterGlitch from "../components/LetterGlitch";
import DecryptedText from "../components/DecryptedText";

const educationData = [
  {
    course: "B.Tech in Information Technology",
    college: "A.V.C College of Engineering",
    location: "Mayiladuthurai, Tamil Nadu, India",
    year: "2023 – 2026",
  },
  {
    course: "Diploma in Information Technology",
    college: "A.V.C Polytechnic College",
    location: "Mayiladuthurai, Tamil Nadu, India",
    year: "2020 – 2023",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen px-4 pt-28 pb-20 text-white overflow-hidden"
    >
      {/* LETTER GLITCH BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <LetterGlitch
          glitchSpeed={55}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          glitchColors={["#0aff6c", "#0a3d2a", "#062016"]}
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* DECRYPTED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 flex justify-center"
        >
          <DecryptedText
            text="EDUCATION"
            animateOn="view"
            revealDirection="center"
            speed={40}
            maxIterations={18}
            className="text-[#00ff66]"
            encryptedClassName="text-white/30"
            parentClassName="text-4xl md:text-5xl font-extrabold tracking-wide"
          />
        </motion.div>

        {/* EDUCATION CARDS */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className="
                rounded-3xl
                bg-white/5
                backdrop-blur-2xl
                border border-white/10
                shadow-[0_30px_100px_rgba(0,255,102,0.18)]
                p-8 md:p-10
              "
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {edu.course}
              </h3>

              <p className="text-lg md:text-xl text-white/85 mb-1">
                {edu.college}
              </p>

              <p className="text-sm md:text-base text-white/60 mb-5">
                {edu.location}
              </p>

              <span className="inline-block px-6 py-2 rounded-full text-sm font-semibold bg-black/50 border border-white/10 text-[#00ff66]">
                {edu.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
