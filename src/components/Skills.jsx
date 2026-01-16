function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Figma', 'VS Code', 'Agile/Scrum'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center">
          <span className="text-primary-400 font-mono text-lg font-normal mr-2">03.</span>
          Skills & Technologies
        </h2>
        <p className="section-subheading text-center mx-auto">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-slate-700">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
