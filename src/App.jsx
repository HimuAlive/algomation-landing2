import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Box from './Basic3d.jsx';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AlgoBento from './components/AlgoGrid';
import AboutSection from './components/AboutSection';
import FeatureSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

// src/App.jsx
function App() {
  return (
    <div className="bg-background min-h-screen text-text">
      <Navbar />
      <Hero />
      <AlgoBento />
      <AboutSection />
      <FeatureSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />  
    </div>
  )
}

export default App;
