function App() {
	const skills = {
		Languages: ["TypeScript", "JavaScript", "Node.js", "PHP"],
		Frontend: ["React", "Next.js", "Vue", "GraphQL (Apollo)", "HTML5", "CSS"],
		"Backend & Infrastructure": ["AWS (Lambda, Fargate)", "PostgreSQL", "Kafka"],
	};

	const experience = [
		{
			company: "Bombas",
			role: "Staff Software Engineer",
			period: "Sep 2019 – Present",
			highlights: [
				"Led the architectural refactor of the core website from Shopify to a TypeScript and Next.js stack",
				"Successfully increased Core Web Vitals by an average of 80% across all primary metrics",
				"Specialized in high-scale web solutions using Apollo GraphQL and AWS",
			],
		},
		{
			company: "Hearst Magazines",
			role: "Senior Software Engineer",
			period: "Oct 2017 – Jul 2019",
			highlights: [
				"Refactored the internal CMS from PHP to React using GraphQL, significantly improving performance and the editorial user experience",
				"Leveraged Amazon Web Services (AWS) to support large-scale magazine platforms",
			],
		},
		{
			company: "VICE Media",
			role: "Senior Web Developer",
			period: "Nov 2015 – Oct 2017",
			highlights: [
				"Developed large-scale web applications across various distribution networks",
				"Utilized a modern stack including GraphQL, Vue, React, and PHP",
			],
		},
		{
			company: "SoulCycle Inc.",
			role: "Senior Web Developer",
			period: "Nov 2014 – Nov 2015",
			highlights: [
				"Implemented and architected mobile and desktop web solutions using JavaScript and HTML5",
			],
		},
		{
			company: "VICE Media, Inc.",
			role: "Senior Web Developer",
			period: "Sep 2012 – Nov 2014",
			highlights: [
				"Built digital presence on web and mobile platforms using PHP frameworks to enhance international reach",
			],
		},
	];

	const socials = [
		{
			name: "GitHub",
			href: "https://github.com/buddharage",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			),
		},
		{
			name: "LinkedIn",
			href: "https://linkedin.com/in/thaivietle",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
				</svg>
			),
		},
	];

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<header className="border-b border-slate-800">
				<div className="max-w-4xl mx-auto px-6 py-16">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
						<img
							src="/profile.jpg"
							alt="Thai Le"
							className="w-32 h-32 object-cover object-top border-2 border-slate-700"
						/>
						<div className="text-center md:text-left">
							<h1 className="text-4xl font-bold text-white mb-2">Thai Le</h1>
							<p className="text-xl text-blue-400 mb-4">Staff Software Engineer</p>
							<p className="text-slate-400 max-w-xl leading-relaxed">
								Technical Lead with deep expertise in modern full-stack technologies.
								Specialized in architecting web solutions that deliver exceptional user
								experience and high performance.
							</p>
							<div className="flex justify-center md:justify-start gap-4 mt-6">
								{socials.map((link) => (
									<a
										key={link.name}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
										aria-label={link.name}
									>
										{link.icon}
										<span className="text-sm">{link.name}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-4xl mx-auto px-6 py-12">
				{/* Skills Section */}
				<section className="mb-16">
					<h2 className="text-2xl font-bold text-white mb-6">Technical Skills</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{Object.entries(skills).map(([category, items]) => (
							<div key={category}>
								<h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
									{category}
								</h3>
								<div className="flex flex-wrap gap-2">
									{items.map((skill) => (
										<span
											key={skill}
											className="px-3 py-1 bg-slate-800 text-slate-300 text-sm"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Experience Section */}
				<section className="mb-16">
					<h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
					<div className="space-y-8">
						{experience.map((job, index) => (
							<div
								key={index}
								className="border-l-2 border-slate-700 pl-6 relative"
							>
								<div className="absolute w-3 h-3 bg-blue-400 -left-[7px] top-1"></div>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
									<div>
										<h3 className="text-lg font-semibold text-white">
											{job.role}
										</h3>
										<p className="text-blue-400">{job.company}</p>
									</div>
									<span className="text-slate-500 text-sm mt-1 md:mt-0">
										{job.period}
									</span>
								</div>
								<ul className="space-y-2 mt-3">
									{job.highlights.map((highlight, i) => (
										<li
											key={i}
											className="text-slate-400 text-sm leading-relaxed flex gap-2"
										>
											<span className="text-slate-600 mt-1">•</span>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>

				{/* Education & Volunteering */}
				<section className="grid md:grid-cols-2 gap-12">
					<div>
						<h2 className="text-2xl font-bold text-white mb-6">Education</h2>
						<div>
							<h3 className="text-lg font-semibold text-white">
								The University of Texas at Austin
							</h3>
							<p className="text-slate-400">
								Bachelor's Degree, Management Information Systems
							</p>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold text-white mb-6">Volunteering</h2>
						<div>
							<h3 className="text-lg font-semibold text-white">Code Nation</h3>
							<p className="text-slate-500 text-sm mb-2">Nov 2015 – Jan 2024</p>
							<p className="text-slate-400 text-sm leading-relaxed">
								Taught fundamental coding skills and provided professional
								experiences to students in under-resourced schools.
							</p>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t border-slate-800 mt-16">
				<div className="max-w-4xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
					Brooklyn, NY
				</div>
			</footer>
		</div>
	);
}

export default App;
