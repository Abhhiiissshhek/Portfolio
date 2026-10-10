import SiteHeader from "./components/SiteHeader";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
