import React from "react";
import Navbar from "./components/other/Navbar";
import Hero from "./components/other/Hero";
import Partnner from "./components/other/Patnner";
import Aboutus from "./components/other/Aboutus";
import Service from "./components/other/Service";

function App() {
  return (
    <div className="fontid">
      <Navbar />
      <Hero />
      <Partnner />
      <Aboutus />
      <Service />
    </div>
  );
}

export default App;
