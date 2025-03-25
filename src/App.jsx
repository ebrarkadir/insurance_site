import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SigortaButtons from "./components/SigortaButtons";
import AnlasmaliSirketler from "./components/AnlasmaliSirketler";
import Footer from "./components/Footer";

// Sayfa bileşenleri
import SirketBilgileri from "./pages/SirketBilgileri";
import Ekibimiz from "./pages/Ekibimiz";
import Iletisim from "./pages/Iletisim";
import Konum from "./pages/Konum";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          {/* Anasayfa */}
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

          {/* Sayfalar */}
          <Route path="/sirket-bilgileri" element={<SirketBilgileri />} />
          <Route path="/ekibimiz" element={<Ekibimiz />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/konum" element={<Konum />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
