import  { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Values from "./components/Values";
import AOS from "aos";
import "./main.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main className="overflow-x-hidden relative">
        <Header />
        <Hero />
        <Values />
        <Perks />
        <ScrollToTopButton/>
      </main>
      <Footer />
    </>
  );
}

export default App;
