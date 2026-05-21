import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Trailer from "./components/Trailer";
import Footer from "./components/Footer";
import './app.css';

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Trailer />
      <Footer />
    </div>
  );
}