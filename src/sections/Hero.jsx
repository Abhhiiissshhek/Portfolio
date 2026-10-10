function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:gap-14 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-20 lg:py-32">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
          ML Engineer / Data Science Student
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Building practical machine learning systems with thoughtful software
          engineering.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          I&apos;m Abhishek, an IIT Madras BS in Data Science and Applications
          student focused on machine learning engineering, data-driven products,
          and strong technical fundamentals.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 sm:w-auto"
            href="#projects"
          >
            View projects
          </a>
          <a
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-white sm:w-auto"
            href="#contact"
          >
            Get in touch
          </a>
        </div>
      </div>

      <aside className="max-w-sm border-l-2 border-blue-700 pl-5 text-sm leading-6 text-slate-600 lg:mb-2">
        <p className="font-semibold text-slate-950">Current focus</p>
        <p className="mt-2">
          Machine learning projects, engineering practice, and open-source
          contributions.
        </p>
      </aside>
    </section>
  );
}

export default Hero;
