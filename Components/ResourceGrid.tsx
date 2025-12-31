import { Shirt, Wind, Utensils, Dumbbell, Droplet, Moon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ResourceGrid() {
  const resources = [
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Fabrics & Materials",
      description: "Learn which fabrics soothe inflammation and which ones trigger it. From cotton to bamboo, we break it down.",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1599847935464-fde3827639c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzY2OTAwMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Environmental Factors",
      description: "Air quality, humidity, temperature—discover how your environment impacts your inflammation levels.",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd2VsbG5lc3MlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY2OTI2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Food & Nutrition",
      description: "Anti-inflammatory diets that actually work. Real experiences, backed by science.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1609869882537-6a860e45a0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmb29kfGVufDF8fHx8MTc2Njk4NjkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Exercise & Movement",
      description: "Workouts designed for sensitive bodies. Build strength without triggering flare-ups.",
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY2OTg2OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Skincare Deep Dive",
      description: "What to put on your face (and what to avoid). Ingredient breakdowns that make sense.",
      color: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1599847935464-fde3827639c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzY2OTAwMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Sleep & Recovery",
      description: "The connection between sleep quality and inflammation. Plus, the best bedding materials.",
      color: "from-indigo-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd2VsbG5lc3MlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY2OTI2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Everything You Need in One Place
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          No more endless googling. Get clear, actionable guidance on managing inflammation in every aspect of your life.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </div>
  );
}

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  image: string;
}

function ResourceCard({ icon, title, description, color, image }: ResourceCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity`} />
      </div>
      
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
