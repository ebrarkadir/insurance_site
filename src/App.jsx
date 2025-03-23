import Navbar from './components/Navbar';
import Slider from './components/Slider';
import SigortaButtons from './components/SigortaButtons';
import AnlasmaliSirketler from './components/AnlasmaliSirketler';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Slider />
        <SigortaButtons />
      </div>
      <AnlasmaliSirketler />
      <Footer />
    </>
  );
}

export default App;
