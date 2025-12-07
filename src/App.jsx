import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Software from "./pages/Software.jsx";
import AIPage from "./pages/AI.jsx";
import Films from "./pages/Films.jsx";
import Marketing from "./pages/Marketing.jsx";
import Contact from "./pages/Contact.jsx";
import Academics from "./pages/Academics.jsx";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-techBg via-black to-creativeBg">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;