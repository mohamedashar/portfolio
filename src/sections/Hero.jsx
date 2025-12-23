// Hero.jsx
import { motion } from "framer-motion";
import Beams from "../components/Beams";
import "../components/Beams.css";
import BlurText from "../components/BlurText";
import TextType from "../components/TextType";
import SplitText from "../components/SplitText";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* VIGNETTE */}
      <div className="vignette-overlay" />

      {/* BACKGROUND BEAMS */}
      <div
        className="absolute inset-0 z-0"
        style={{
          width: "120vw",
          height: "120vh",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#00ff66"
          speed={2}
          noiseIntensity={1.75}
          scale={0.22}
          rotation={30}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 gap-4">
        {/* WELCOME TEXT */}
        <TextType
          text={["Welcome to my portfolio"]}
          typingSpeed={70}
          pauseDuration={3000}
          showCursor={true}
          className="text-xs sm:text-base text-white tracking-wide"
        />

        {/* NAME */}
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          <BlurText
            text="MOHAMED"
            delay={80}
            animateBy="chars"
            direction="top"
            className="text-[26px] sm:text-6xl font-bold text-white leading-tight"
          />
          <BlurText
            text="ASHAR"
            delay={80}
            animateBy="chars"
            direction="top"
            className="text-[26px] sm:text-6xl font-bold text-neon leading-tight"
          />
        </div>

        {/* ROLE */}
        <SplitText
          text="Full Stack Developer · UI/UX · Cybersecurity"
          className="text-neon text-xs sm:text-base text-center"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 16 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 flex gap-3 w-full max-w-[300px] justify-center"
        >
          {/* DOWNLOAD CV */}
          <motion.a
            href="/ASHAR_CV.pdf"
            download="Mohamed_Ashar_CV.pdf"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="
              flex-1
              flex items-center justify-center gap-2
              px-4 py-3
              rounded-full
              bg-[#00ff66]
              text-black
              text-sm
              font-medium
              whitespace-nowrap
              shadow-[0_10px_30px_rgba(0,255,102,0.45)]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2v2H4v-2h16z" />
            </svg>
            Download CV
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/mohamedashar2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, boxShadow: "0 0 28px rgba(0,255,102,0.35)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="
              flex-1
              flex items-center justify-center gap-2
              px-4 py-3
              rounded-full
              bg-black
              border border-[#00ff66]/50
              text-sm
              text-white
              whitespace-nowrap
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-[#00ff66]"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.6c0-2.05-.04-4.68-2.85-4.68-2.85 0-3.28 2.22-3.28 4.52V24h-4V8z" />
            </svg>
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
