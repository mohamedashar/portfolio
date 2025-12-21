export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Featured <span className="neon-text">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-black/70 neon-border rounded-2xl p-6 neon-hover">
            <h3 className="neon-text font-semibold mb-2">
              Cloud Automation
            </h3>
            <p className="text-gray-400 text-sm">
              Automated cloud infrastructure using AWS and IaC.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
