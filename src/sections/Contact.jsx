export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Contact <span className="neon-text">Me</span>
        </h2>

        <a
          href="mailto:youremail@example.com"
          className="inline-block mt-6 px-8 py-3 rounded-xl bg-neon text-black font-semibold neon-glow hover:neon-glow-strong transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
