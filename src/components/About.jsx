function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">
          <span className="text-primary-400 font-mono text-lg font-normal mr-2">01.</span>
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-4 text-slate-400">
            <p>
              Hello! I'm Thai, a software developer who enjoys building things that live
              on the internet. My interest in web development started back when I decided
              to try customizing websites — turns out hacking together styles and scripts
              taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on a variety
              of projects. My main focus these days is building accessible, inclusive
              products and digital experiences.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {[
                'JavaScript (ES6+)',
                'React',
                'Node.js',
                'TypeScript',
                'Python',
                'Tailwind CSS',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary-400">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <div className="w-full aspect-square bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">T</span>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-primary-500 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
