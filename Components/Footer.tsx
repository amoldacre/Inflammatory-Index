import { Heart, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">InflammaWell</span>
            </div>
            <p className="text-gray-400">
              Your trusted resource for managing inflammatory conditions naturally and effectively.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Fabrics Guide</li>
              <li className="hover:text-white cursor-pointer transition-colors">Food Database</li>
              <li className="hover:text-white cursor-pointer transition-colors">Skincare Encyclopedia</li>
              <li className="hover:text-white cursor-pointer transition-colors">Exercise Plans</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-white cursor-pointer transition-colors">Forum</li>
              <li className="hover:text-white cursor-pointer transition-colors">Newsletter</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for those on their healing journey
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 InflammaWell. This information is for educational purposes only and not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
