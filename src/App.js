import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { Footer } from "./components/Features/Footer/Footer";
import { Header } from "./components/Features/Header/Header";
import { AboutMe } from "./components/Pages/AboutMe/AboutMe";
import { Contact } from "./components/Pages/Contact/Contact";
import { Home } from "./components/Pages/Home/Home";
import { Portfolio } from "./components/Pages/Portfolio/Portfolio";
// import AOS from "aos";
// import "aos/dist/aos.css";

function App() {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
