function Hero() {
  return (
    <main id="main-content">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            ML Engineer / Data Science Student
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Building practical machine learning systems with thoughtful software
            engineering.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I&apos;m Abhishek, an IIT Madras BS in Data Science and Applications
            student focused on machine learning engineering, data-driven products,
            and strong technical fundamentals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-white"
              href="#contact"
            >
              Get in touch
            </a>
          </div>
        </div>

        <aside className="border-l-2 border-blue-700 pl-5 text-sm leading-6 text-slate-600">
          <p className="font-semibold text-slate-950">Current focus</p>
          <p className="mt-2">
            Machine learning projects, engineering practice, and open-source
            contributions.
          </p>
        </aside>
      </section>
    </main>
  );
}

export default Hero;
