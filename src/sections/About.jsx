// About.jsx
import LightRays from "../components/LightRays";
import BlurText from "../components/BlurText";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        bg-black
        text-white
        px-4
        pt-28
        sm:pt-32
        pb-20
        overflow-hidden
      "
    >
      {/* DESKTOP / TABLET LIGHT RAYS */}
      <div className="absolute inset-0 hidden sm:block">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ff66"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.08}
          distortion={0.04}
        />
      </div>

      {/* MOBILE SOFT GLOW */}
      <div className="absolute inset-0 sm:hidden bg-[radial-gradient(circle_at_top,#00ff6620,transparent_60%)]" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[92%]
          sm:max-w-3xl
          md:max-w-5xl
          lg:max-w-6xl
        "
      >
        <div
          className="
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-6
            sm:p-10
            md:p-14
            shadow-[0_40px_120px_rgba(0,255,102,0.15)]
          "
        >
          <BlurText
            text="About Me"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          />

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
            I’m a <span className="text-neon">B.Tech Information Technology</span>{" "}
            student with a strong interest in{" "}
            <span className="text-neon">design</span>,{" "}
            <span className="text-neon">development</span>, and{" "}
            <span className="text-neon">security-focused engineering</span>,
            creating modern, user-centric digital experiences with{" "}
            <span className="text-neon">clean visuals</span> and{" "}
            <span className="text-neon">solid technical foundations</span>.
            <br />
            <br />
            As a <span className="text-neon">full-stack developer</span>, I build{" "}
            <span className="text-neon">scalable applications</span> across
            frontend and backend technologies with a focus on{" "}
            <span className="text-neon">secure, reliable code</span>. I’m{" "}
            <span className="text-neon">highly motivated</span>, always willing
            to learn new technologies, and enjoy contributing to projects where{" "}
            <span className="text-neon">
              creativity, performance, and security
            </span>{" "}
            come together to solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
