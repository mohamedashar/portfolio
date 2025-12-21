const skills = [
  "AWS",
  "Cybersecurity",
  "Automation",
  "Linux",
  "Networking",
  "Python",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Skills & <span className="neon-text">Tools</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-black/70 neon-border rounded-xl px-6 py-4 neon-hover"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
