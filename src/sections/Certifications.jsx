"use client";

import { motion } from "framer-motion";
import FloatingLines from "../components/FloatingLines";
import FuzzyText from "../components/FuzzyText";
import { ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    description:
      "Focuses on ethical hacking methodologies, penetration testing basics, vulnerability analysis, and security best practices.",
    verify:
      "https://www.credly.com/badges/333253c5-58c4-4df8-aab7-47e0045c6fb4/public_url",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    description:
      "Introduces cybersecurity concepts including threat landscapes, security operations, risk management, and defensive strategies.",
    verify:
      "https://www.credly.com/badges/25b81985-766f-4cbe-aafb-61dce4053ec2/public_url",
  },
  {
    title: "IBM Data Privacy Fundamentals",
    issuer: "IBM",
    description:
      "Covers core principles of data privacy, regulatory frameworks, data protection practices, and risk awareness in modern digital environments.",
    verify:
      "https://www.credly.com/badges/99bcbd16-82e6-4d0d-9087-c3b5df8b779d/public_url",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative min-h-screen px-4 pt-28 pb-24 overflow-hidden text-white bg-black"
    >
      {/* FLOATING LINES — DESKTOP ONLY */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={["#00ff66", "#0a3d2a", "#02160c"]}
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto">
        {/* HEADING */}
        <div className="mb-20 flex justify-center overflow-hidden">
          <div className="whitespace-nowrap scale-[0.78] sm:scale-100">
            <FuzzyText
              fontSize="clamp(2.5rem, 6vw, 3.5rem)"
              fontWeight={900}
              color="#00ff66"
              baseIntensity={0.14}
              hoverIntensity={0.45}
            >
              CERTIFICATIONS
            </FuzzyText>
          </div>
        </div>

        {/* CERTIFICATION CARDS */}
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="group relative h-full rounded-[2rem] p-[1px] bg-gradient-to-br from-[#00ff66]/40 via-[#00ff66]/10 to-transparent">
                <div className="relative h-full rounded-[2rem] bg-black/70 border border-white/10 p-7 flex flex-col transition-all duration-300 group-hover:border-[#00ff66]/40 group-hover:shadow-[0_40px_120px_rgba(0,255,102,0.25)]">
                  
                  {/* ICON + ISSUER */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#00ff66]/15 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-[#00ff66]" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00ff66]/15 text-[#00ff66] border border-[#00ff66]/30">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg md:text-xl font-semibold mb-3 leading-snug">
                    {cert.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-white/70 leading-relaxed mb-8">
                    {cert.description}
                  </p>

                  {/* VERIFY BUTTON */}
                  <div className="mt-auto">
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs px-5 py-2.5 rounded-full border border-white/10 bg-black/50 hover:bg-[#00ff66]/10 hover:border-[#00ff66]/40 transition"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
