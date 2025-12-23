import { useEffect, useRef, useState } from "react";
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
  const indicatorRef = useRef(null);
  const itemRefs = useRef({});

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
    const activeEl = itemRefs.current[active];
    const indicator = indicatorRef.current;
    const nav = navRef.current;

    if (!activeEl || !indicator || !nav) return;

    const elRect = activeEl.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    indicator.style.width = `${elRect.width}px`;
    indicator.style.transform = `translateX(${elRect.left - navRect.left}px)`;
  }, [active]);

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="glass-nav w-full max-w-6xl flex items-center px-6 py-3">
        {/* LOGO */}
        <img src={logo} alt="Ashar" className="h-7 lg:h-8 w-auto" />

        {/* DESKTOP NAV (ONLY ≥ 1024px) */}
        <div
          ref={navRef}
          className="relative hidden lg:flex items-center gap-1 ml-auto"
        >
          {/* LIQUID INDICATOR */}
          <span ref={indicatorRef} className="glass-indicator" />

          {links.map(link => (
            <a
              key={link.id}
              ref={el => (itemRefs.current[link.id] = el)}
              href={`#${link.id}`}
              className={`glass-link ${
                active === link.id ? "glass-link-active" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE / TABLET BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden ml-auto text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="lg:hidden absolute top-full mt-3 w-[94%] max-w-md glass-mobile px-4 py-4">
          <ul className="flex flex-col gap-2">
            {links.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`glass-mobile-link ${
                    active === link.id ? "glass-mobile-active" : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
