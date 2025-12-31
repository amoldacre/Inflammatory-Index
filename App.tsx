import { useState } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { Food } from './components/Food';
import { Movement } from './components/Movement';
import { SkincareAnalyzer } from './components/SkincareAnalyzer';
import { EnvironmentalFactors } from './components/EnvironmentalFactors';
import { Lifestyle } from './components/Lifestyle';
import { ResourceGrid } from './components/ResourceGrid';
import { Footer } from './components/Footer';

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