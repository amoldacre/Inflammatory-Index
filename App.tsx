import { useState } from 'react';
import { Hero } from './Components/Hero';
import { Navigation } from './Components/Navigation';
import { Food } from './Components/Food';
import { Movement } from './Components/Movement';
import { SkincareAnalyzer } from './Components/SkincareAnalyzer';
import { EnvironmentalFactors } from './Components/EnvironmentalFactors';
import { Lifestyle } from './Components/Lifestyle';
import { ResourceGrid } from './Components/ResourceGrid';
import { Footer } from './Components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <ResourceGrid />
        </>
      )}
      
      {activeSection === 'lifestyle' && <Lifestyle />}
      {activeSection === 'environment' && <EnvironmentalFactors />}
      {activeSection === 'food' && <Food />}
      {activeSection === 'movement' && <Movement />}
      {activeSection === 'skincare' && <SkincareAnalyzer />}
      
      <Footer />
    </div>
  );
}