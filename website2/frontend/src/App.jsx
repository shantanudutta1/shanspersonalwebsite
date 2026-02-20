import Hero from './components/Hero';
import Harmonization from './components/Harmonization';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#0B1120', minHeight: '100vh' }}>
      <Hero />
      <Harmonization />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
