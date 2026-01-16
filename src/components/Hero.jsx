function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary-400 font-mono text-sm md:text-base mb-4 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Thai Hoang.</span>
          <br />
          <span className="text-slate-400">I build things for the web.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-100">
          I'm a software developer passionate about creating beautiful, functional,
          and user-centered digital experiences. Currently focused on building
          accessible, human-centered products.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-200">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
