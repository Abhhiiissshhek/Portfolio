function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:gap-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            About
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl">
            Learning the full path from data to dependable software.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              I&apos;m pursuing a BS in Data Science and Applications at IIT Madras
              while building a practical foundation in machine learning
              engineering.
            </p>
            <p>
              I&apos;m especially interested in how data, models, and software come
              together to solve real problems in a clear, maintainable way.
            </p>
          </div>
        </div>

        <aside className="max-w-sm border border-slate-200 border-t-2 border-t-blue-700 bg-slate-50 p-6 lg:mt-1">
          <h3 className="font-semibold text-slate-950">What I&apos;m working on</h3>
          <ul className="mt-5 divide-y divide-slate-200 text-sm leading-6 text-slate-600">
            <li className="flex gap-3 py-3 pt-0">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-700" />
              Building practical machine learning projects
            </li>
            <li className="flex gap-3 py-3">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-700" />
              Strengthening software engineering fundamentals
            </li>
            <li className="flex gap-3 pt-3">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-700" />
              Contributing to collaborative open-source work
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default About;
