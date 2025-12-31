import { Leaf, Search, Sparkles, Wind, Heart, Apple, Dumbbell } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-emerald-900">InflammaWell</span>
          </button>
          
          <div className="flex gap-1 sm:gap-2">
            <NavButton 
              icon={<Sparkles className="w-4 h-4" />}
              label="Home"
              active={activeSection === 'home'}
              onClick={() => setActiveSection('home')}
            />
            <NavButton 
              icon={<Heart className="w-4 h-4" />}
              label="Lifestyle"
              active={activeSection === 'lifestyle'}
              onClick={() => setActiveSection('lifestyle')}
            />
            <NavButton 
              icon={<Wind className="w-4 h-4" />}
              label="Environment"
              active={activeSection === 'environment'}
              onClick={() => setActiveSection('environment')}
            />
            <NavButton 
              icon={<Apple className="w-4 h-4" />}
              label="Food"
              active={activeSection === 'food'}
              onClick={() => setActiveSection('food')}
            />
            <NavButton 
              icon={<Dumbbell className="w-4 h-4" />}
              label="Movement"
              active={activeSection === 'movement'}
              onClick={() => setActiveSection('movement')}
            />
            <NavButton 
              icon={<Search className="w-4 h-4" />}
              label="Skincare"
              active={activeSection === 'skincare'}
              onClick={() => setActiveSection('skincare')}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg transition-all ${
        active 
          ? 'bg-emerald-100 text-emerald-700' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}