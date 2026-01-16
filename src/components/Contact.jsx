function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary-400 font-mono text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 mb-10">
          I'm currently looking for new opportunities. Whether you have a question,
          want to collaborate on a project, or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <a
          href="mailto:hello@example.com"
          className="btn-primary inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact
