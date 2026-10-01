function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a className="font-semibold tracking-tight" href="#main-content">
            Abhishek
          </a>
          <p className="text-sm text-slate-600">ML Engineer Portfolio</p>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
          Aspiring Machine Learning Engineer
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Building practical machine learning systems with thoughtful software
          engineering.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          A focused portfolio foundation for projects, experience, and open-source
          work.
        </p>
      </main>
    </div>
  );
}

export default App;
