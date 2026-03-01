"use client";

import { motion } from "framer-motion";
import FuzzyText from "../components/FuzzyText";
import { ShieldCheck } from "lucide-react";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import { HexagonBackground } from "../components/ui/hexagon-background";

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
      "https://www.credly.com/badges/99bcbd16-82e6-4d0d-9087-c3b5df8b779d/public_url",
  },
  {
    title: "IBM Data Privacy Fundamentals",
    issuer: "IBM",
    description:
      "Covers core principles of data privacy, regulatory frameworks, data protection practices, and risk awareness in modern digital environments.",
    verify:
      "https://www.credly.com/badges/25b81985-766f-4cbe-aafb-61dce4053ec2/public_url",
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
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <HexagonBackground
  hexagonSize={75}
  hexagonMargin={3}
  className="absolute inset-0 z-0 bg-black"
  hexagonProps={{
    className:
      "before:bg-transparent before:border before:border-[#1a1a1a] before:opacity-100 after:bg-black",
  }}
/>

      {/* LIGHT DEPTH OVERLAY (soft, not killing animation) */}
      <div className="absolute inset-0 z-10 bg-black/30 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 pt-28 pb-24">
        {/* HEADING */}
        <div className="mb-20 flex justify-center overflow-hidden">
          <div className="whitespace-nowrap scale-[0.85] sm:scale-100">
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

        {/* CARDS */}
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={cardVariants}>
              <div className="relative h-full rounded-[2rem] p-[1px] bg-gradient-to-br from-[#00ff66]/40 via-[#00ff66]/10 to-transparent">
                <div className="relative h-full rounded-[2rem] bg-black/70 border border-white/10 p-7 flex flex-col transition-all duration-300 hover:border-[#00ff66]/40 hover:shadow-[0_40px_120px_rgba(0,255,102,0.25)]">

                  <div className="mb-5 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#00ff66]/15 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-[#00ff66]" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00ff66]/15 text-[#00ff66] border border-[#00ff66]/30">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-3 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed mb-8">
                    {cert.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InteractiveHoverButton className="border border-[#00ff66]/40 text-white hover:bg-[#00ff66] hover:text-black text-xs px-6 py-2.5">
                        View Credential
                      </InteractiveHoverButton>
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