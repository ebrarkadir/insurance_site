import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SigortaButtons from "./components/SigortaButtons";
import AnlasmaliSirketler from "./components/AnlasmaliSirketler";
import Ekibimiz from "./pages/Ekibimiz";
import Footer from "./components/Footer";

// Sayfa bileşenleri
import SirketBilgileri from "./pages/SirketBilgileri";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <SigortaButtons />
                <AnlasmaliSirketler />
              </>
            }
          />

          <Route path="/sirket-bilgileri" element={<SirketBilgileri />} />
        </Routes>
        <Routes>
          <Route path="/ekibimiz" element={<Ekibimiz />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
