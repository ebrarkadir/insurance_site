import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SigortaButtons from "./components/SigortaButtons";
import AnlasmaliSirketler from "./components/AnlasmaliSirketler";
import Footer from "./components/Footer";
import BizeUlasin from "./pages/BizeUlasin";
import SikcaSorulanSorular from "./pages/SikcaSorulanSorular";
// Sayfa bileşenleri
import SirketBilgileri from "./pages/SirketBilgileri";
import Ekibimiz from "./pages/Ekibimiz";
import Iletisim from "./pages/Iletisim";
import Konum from "./pages/Konum";
import HasarAninda from "./pages/HasarAninda";

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
          <Route path="/bize-ulasin" element={<BizeUlasin />} />
          <Route
            path="/sikca-sorulan-sorular"
            element={<SikcaSorulanSorular />}
          />
          <Route path="/hasar-aninda" element={<HasarAninda />} />

          {/* 404 Sayfası */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
