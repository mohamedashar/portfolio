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
          className="text-sm sm:text-base text-white tracking-wide"
        />

        {/* NAME */}
        {/* NAME */}
<div className="flex items-center justify-center gap-2 whitespace-nowrap">
  <BlurText
    text="MOHAMED"
    delay={80}
    animateBy="chars"
    direction="top"
    className="text-[30px] sm:text-6xl font-bold text-white leading-tight"
  />
  <BlurText
    text="ASHAR"
    delay={80}
    animateBy="chars"
    direction="top"
    className="text-[30px] sm:text-6xl font-bold text-neon leading-tight"
  />
</div>


        {/* ROLE */}
        <SplitText
  text="Full Stack Developer · UI/UX · Cybersecurity"
  className="text-neon text-sm sm:text-base text-center"
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


        {/* PREMIUM BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-6 flex gap-3"
        >
          {/* DOWNLOAD CV */}
          <a
            href="/Mohamed_Ashar_CV.pdf"
            download
            className="hero-btn primary premium-btn"
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
          </a>

          {/* CONTACT (NO ICON) */}
          <a
            href="#contact"
            className="hero-btn outline premium-btn"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* FLOATING SOCIAL ICONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-social"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.6c0-2.05-.04-4.68-2.85-4.68-2.85 0-3.28 2.22-3.28 4.52V24h-4V8z" />
          </svg>
        </a>

        {/* GITHUB */}
        <button
          onClick={() => alert("🚧 GitHub profile coming soon!")}
          className="glass-social"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
