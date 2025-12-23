"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Heart } from "lucide-react";
import ShinyText from "../components/ShinyText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black px-4 pt-28 pb-24 text-white overflow-hidden"
    >
      {/* SOFT GREEN GLOW BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,255,102,0.08),transparent_60%)]" />

      <div className="max-w-5xl mx-auto text-center">
        {/* ✅ SHINY HEADING (FIXED) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <ShinyText
            text="CONTACT"
            speed={3}
            className="text-[2.2rem] md:text-[2.6rem] font-semibold tracking-widest"
          />
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-white/70 max-w-xl mx-auto mb-14 text-sm md:text-base leading-relaxed"
        >
          Open to opportunities, collaborations, and discussions.
          <br />
          Reach out anytime.
        </motion.p>

        {/* CONTACT GRID */}
        <div className="grid gap-6 sm:grid-cols-2">
          <ContactCard
            icon={<Mail className="w-6 h-6 text-[#00ff66]" />}
            label="Email"
            value="ashar.mohd2004@gmail.com"
          />

          <ContactCard
            icon={<Phone className="w-6 h-6 text-[#00ff66]" />}
            label="Phone"
            value="+91 7598608731"
          />

          <ContactCard
            icon={<MapPin className="w-6 h-6 text-[#00ff66]" />}
            label="Location"
            value="Tamil Nadu, India"
          />

          <ContactCard
            icon={<Linkedin className="w-6 h-6 text-[#00ff66]" />}
            label="LinkedIn"
            value="Connect with me"
            href="https://www.linkedin.com/in/mohamedashar2004"
            external
          />
        </div>

        {/* FOOTER */}
        <div className="mt-20 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-white/60">
            Designed & Built by
            <span className="text-[#00ff66] font-medium">Mohamed Ashar</span>
            <Heart className="w-4 h-4 text-[#00ff66] fill-[#00ff66] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* REUSABLE CARD */
function ContactCard({ icon, label, value, href, external }) {
  const Wrapper = href ? "a" : "div";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#00ff66]/40 to-transparent"
    >
      <Wrapper
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block rounded-3xl bg-[#0b0f0d]/80 border border-[#00ff66]/25 px-6 py-7 flex items-center gap-4 transition-all duration-300 group-hover:border-[#00ff66]/50 group-hover:shadow-[0_25px_70px_rgba(0,255,102,0.18)]"
      >
        <div className="w-12 h-12 rounded-xl bg-[#00ff66]/15 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-sm text-white/60">{label}</p>
          <p className="text-sm md:text-base font-medium">{value}</p>
        </div>
      </Wrapper>
    </motion.div>
  );
}
