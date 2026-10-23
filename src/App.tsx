import { Headphones, ArrowRight } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <Headphones size={28} />
          <span>mixMate.</span>
        </div>

        <nav>
          <a href="#home">home</a>
          <a href="#features">features</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              ✦ your dj sidekick ✦
            </span>

            <h1>mixMate</h1>

            <h2>get your mix together.</h2>

            <p>
              a home for your music, minus the mess.
              organise your tracks, put together sets and discover what sounds good together - all before you hit play.
            </p>

            <a href="#features" className="get-started">
              explore mixMate
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;