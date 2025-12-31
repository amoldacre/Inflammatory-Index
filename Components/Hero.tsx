import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-teal-50/30 to-blue-100/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-emerald-700">Your Inflammation Relief Guide</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900">
              Break Free from <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Inflammation</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600">
              Living with asthma, allergies, or eczema? You're not alone. Discover evidence-based insights, 
              personal experiences, and practical tools to take control of your inflammatory journey.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                Explore Resources
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 bg-white text-emerald-700 rounded-lg border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-md transition-all">
                Try Analyzers
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <StatCard number="1000+" label="Foods Analyzed" />
              <StatCard number="500+" label="Ingredients" />
              <StatCard number="50+" label="Resources" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-200 rounded-full blur-3xl opacity-30" />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd2VsbG5lc3MlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY2OTI2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wellness lifestyle"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-emerald-100">
      <div className="text-2xl text-emerald-600">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}
