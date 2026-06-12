import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const links = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "SKILLS", id: "skills" },
  { name: "PROJECTS", id: "projects" },
  { name: "EDUCATION", id: "education" },
  { name: "CERTIFICATIONS", id: "certifications" },
  { name: "CONTACT", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const itemRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  /* SCROLL DETECTION */
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].id);
        if (section && scrollPos >= section.offsetTop) {
          setActive(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* MOVE LIQUID INDICATOR */
  useEffect(() => {
    const measure = () => {
      const activeEl = itemRefs.current[active];
      const nav = navRef.current;
      if (!activeEl || !nav) return;
      const elRect = activeEl.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      {/* MAIN GLASS CAPSULE */}
      <div
        className="
          relative w-full max-w-6xl flex items-center px-4 py-2 lg:px-6 lg:py-3
          rounded-full
          bg-black/40
          backdrop-blur-[28px] backdrop-saturate-150
          border border-white/15
          shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.04)]
          ring-1 ring-[#00ff66]/10
        "
      >
        {/* top sheen / liquid refraction highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
        >
          <div className="absolute -inset-px rounded-full bg-gradient-to-b from-white/[0.10] via-white/[0.02] to-transparent" />
          <div className="absolute -top-1/2 left-1/4 w-2/3 h-full rounded-full bg-white/[0.06] blur-2xl rotate-6" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#00ff66]/10 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#00ff66]/5 blur-3xl" />
        </div>

        {/* LOGO */}
        <img
          src={logo}
          alt="Ashar"
          className="relative z-10 h-6 lg:h-8 w-auto drop-shadow-[0_0_8px_rgba(0,255,102,0.25)]"
        />

        {/* DESKTOP NAV (ONLY ≥ 1024px) */}
        <div
          ref={navRef}
          className="relative z-10 hidden lg:flex items-center gap-1 ml-auto"
        >
          {/* LIQUID INDICATOR */}
          <motion.span
            className="
              absolute top-1/2 -translate-y-1/2 h-9 rounded-full
              bg-gradient-to-b from-[#00ff66]/25 via-[#00ff66]/10 to-transparent
              border border-[#00ff66]/30
              shadow-[0_0_18px_rgba(0,255,102,0.35),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_2px_rgba(0,255,102,0.15)]
              backdrop-blur-md
            "
            animate={{ left: indicator.left, width: indicator.width }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          />

          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <motion.a
                key={link.id}
                ref={(el) => (itemRefs.current[link.id] = el)}
                href={`#${link.id}`}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`
                  relative z-10 px-4 py-2 text-[12px] font-medium tracking-wider
                  rounded-full transition-colors duration-300
                  ${
                    isActive
                      ? "text-[#00ff66] drop-shadow-[0_0_10px_rgba(0,255,102,0.65)]"
                      : "text-white/55 hover:text-white/90 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  }
                `}
              >
                {link.name}
              </motion.a>
            );
          })}
        </div>

        {/* MOBILE / TABLET BUTTON */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="
            relative z-10 lg:hidden ml-auto flex items-center justify-center
            w-8 h-8 text-base lg:w-10 lg:h-10 lg:text-xl rounded-full text-white
            bg-white/[0.04] border border-white/10
            hover:bg-white/[0.08] hover:shadow-[0_0_14px_rgba(0,255,102,0.25)]
            transition-all duration-300
          "
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          ☰
        </motion.button>
      </div>

      {/* MOBILE / TABLET MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="
              lg:hidden absolute top-full mt-3 w-[94%] max-w-md
              rounded-3xl px-4 py-4
              bg-black/50 backdrop-blur-[32px] backdrop-saturate-150
              border border-white/15
              shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]
              overflow-hidden
            "
          >
            {/* glass sheen */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.08] via-transparent to-transparent"
            />
            <ul className="relative z-10 flex flex-col gap-2">
              {links.map((link) => {
                const isActive = active === link.id;
                return (
                  <li key={link.id}>
                    <motion.a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        block px-4 py-3 rounded-2xl text-sm font-medium tracking-wider
                        transition-all duration-300 border
                        ${
                          isActive
                            ? "text-[#00ff66] bg-[#00ff66]/10 border-[#00ff66]/30 shadow-[0_0_16px_rgba(0,255,102,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] drop-shadow-[0_0_8px_rgba(0,255,102,0.5)]"
                            : "text-white/55 border-transparent hover:text-white/90 hover:bg-white/[0.06] hover:border-white/10"
                        }
                      `}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}