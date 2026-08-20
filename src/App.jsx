import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Workflow from "./components/Workflow";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <main className="site-shell">
        <Navbar />
        <Hero />
        <Marquee />
        <Features />
        <Stats />
        <Workflow />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
