import { useState } from 'react';
import { Search, Shield, CheckCircle, AlertTriangle, Lightbulb, Info } from 'lucide-react';

// Mock database for skincare ingredients
const skincareDatabase: Record<string, SkincareData> = {
  retinol: {
    name: 'Retinol',
    safetyRating: 7,
    goodAspects: [
      'Proven to reduce fine lines and wrinkles',
      'Increases cell turnover',
      'Improves skin texture and tone',
      'Helps unclog pores',
      'Stimulates collagen production',
    ],
    concerns: [
      'Can cause initial irritation and dryness',
      'Increases sun sensitivity',
      'May trigger inflammation in sensitive skin',
      'Not safe during pregnancy',
      'Requires gradual introduction',
    ],
    recommendations: [
      'Start with 0.25% concentration 2x per week',
      'Always use SPF 30+ during the day',
      'Apply at night only',
      'Avoid if you have active eczema flare-ups',
      'Pair with hydrating ingredients like hyaluronic acid',
    ],
    explanation: 'Retinol is a vitamin A derivative that\'s incredibly effective for anti-aging but can be tricky for inflammatory skin. I learned the hard way—started too strong and got a massive eczema flare. Now I use 0.3% every third night with ceramide moisturizer, and it\'s transformative without irritation.',
  },
  'hyaluronic acid': {
    name: 'Hyaluronic Acid',
    safetyRating: 9,
    goodAspects: [
      'Holds 1000x its weight in water',
      'Deeply hydrating without being heavy',
      'Suitable for all skin types',
      'Reduces inflammation',
      'Non-comedogenic',
      'Helps heal damaged skin barrier',
    ],
    concerns: [
      'In very dry climates, can pull moisture from skin if not sealed',
      'Molecular weight matters (look for multi-weight HA)',
      'Some people react to specific sources',
    ],
    recommendations: [
      'Apply to damp skin for best absorption',
      'Layer under a moisturizer to seal it in',
      'Perfect for inflamed, sensitive skin',
      'Use morning and night',
      'Look for products with multiple molecular weights',
    ],
    explanation: 'This is my holy grail for eczema-prone skin. Hyaluronic acid is a humectant that draws moisture into your skin without any irritation. I apply it on damp skin right after washing, then seal it with a ceramide cream. My skin went from flaky to plump in days.',
  },
  'fragrance': {
    name: 'Fragrance/Parfum',
    safetyRating: 2,
    goodAspects: [
      'Makes products smell pleasant',
    ],
    concerns: [
      'One of the top skin allergens',
      'Major inflammatory trigger',
      'Can disrupt skin barrier',
      'Often contains dozens of unlisted chemicals',
      'Causes contact dermatitis',
      'Worsens eczema, rosacea, and psoriasis',
    ],
    recommendations: [
      'Avoid entirely if you have inflammatory skin conditions',
      'Look for "fragrance-free" not "unscented"',
      'Check for "parfum" on ingredient lists',
      'Natural fragrances can be just as irritating',
      'Essential oils count as fragrances—avoid those too',
    ],
    explanation: 'Fragrance in skincare is a nightmare for sensitive skin. It serves zero functional purpose and is a leading cause of allergic reactions. Since I went 100% fragrance-free, my skin became dramatically calmer. Yes, products smell boring now, but my face doesn\'t burn anymore.',
  },
  'niacinamide': {
    name: 'Niacinamide (Vitamin B3)',
    safetyRating: 9,
    goodAspects: [
      'Powerful anti-inflammatory',
      'Strengthens skin barrier',
      'Reduces redness and irritation',
      'Helps control oil production',
      'Fades hyperpigmentation',
      'Works for all skin types',
    ],
    concerns: [
      'High concentrations (10%+) may irritate some people',
      'Can conflict with vitamin C in same routine (myth, but can pill)',
    ],
    recommendations: [
      'Sweet spot is 5-10% concentration',
      'Use morning and/or night',
      'Excellent for inflammatory conditions',
      'Pairs well with hyaluronic acid and ceramides',
      'Safe for sensitive and eczema-prone skin',
    ],
    explanation: 'Niacinamide is a superstar for inflamed skin. It literally calms down inflammatory pathways. I use a 10% serum every morning under sunscreen, and it\'s reduced my redness by at least 50%. Plus it helps repair the skin barrier that gets damaged during eczema flares.',
  },
  'salicylic acid': {
    name: 'Salicylic Acid (BHA)',
    safetyRating: 6,
    goodAspects: [
      'Excellent for unclogging pores',
      'Oil-soluble (gets deep into pores)',
      'Anti-inflammatory properties',
      'Helps with acne',
      'Exfoliates dead skin',
    ],
    concerns: [
      'Can be very drying',
      'May trigger irritation in sensitive skin',
      'Not ideal during active eczema flares',
      'Overuse can damage skin barrier',
      'Increases sun sensitivity',
    ],
    recommendations: [
      'Start with 0.5-1% concentration',
      'Use 2-3 times per week maximum',
      'Skip if you have active inflammation',
      'Always follow with moisturizer',
      'Use sunscreen the next day',
    ],
    explanation: 'Salicylic acid is tricky for inflammatory skin. It can help with breakouts, but it can also strip your skin. I only use a 0.5% cleanser when I have congestion, and I immediately follow with a thick barrier repair cream. Listen to your skin—if it stings, stop.',
  },
};

interface SkincareData {
  name: string;
  safetyRating: number;
  goodAspects: string[];
  concerns: string[];
  recommendations: string[];
  explanation: string;
}

export function SkincareAnalyzer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<SkincareData | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    const found = skincareDatabase[query];
    
    if (found) {
      setResult(found);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getSafetyColor = (rating: number) => {
    if (rating >= 8) return 'emerald';
    if (rating >= 5) return 'yellow';
    return 'red';
  };

  const getSafetyLabel = (rating: number) => {
    if (rating >= 8) return 'Safe for Sensitive Skin';
    if (rating >= 5) return 'Use with Caution';
    return 'High Risk for Inflammation';
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Skincare Ingredient Analyzer
        </h1>
        <p className="text-lg text-gray-600">
          Discover if that ingredient is friend or foe to your sensitive skin
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Try: retinol, hyaluronic acid, fragrance, niacinamide..."
            className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-emerald-400 focus:outline-none transition-colors"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Quick search:</span>
          {Object.keys(skincareDatabase).map((ingredient) => (
            <button
              key={ingredient}
              onClick={() => {
                setSearchQuery(ingredient);
                setResult(skincareDatabase[ingredient]);
                setNotFound(false);
              }}
              className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm hover:bg-pink-100 transition-colors"
            >
              {skincareDatabase[ingredient].name}
            </button>
          ))}
        </div>
      </div>

      {notFound && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
          <h3 className="text-lg text-gray-900 mb-2">Ingredient Not Found</h3>
          <p className="text-gray-600">
            We don't have data for "{searchQuery}" yet. Try one of the suggested ingredients or check back soon!
          </p>
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <div className={`rounded-xl p-6 border-2 ${
            getSafetyColor(result.safetyRating) === 'emerald' ? 'bg-emerald-50 border-emerald-200' :
            getSafetyColor(result.safetyRating) === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
            'bg-red-50 border-red-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <h2 className="text-2xl text-gray-900">{result.name}</h2>
              <span className={`inline-flex px-4 py-2 rounded-lg text-sm ${
                getSafetyColor(result.safetyRating) === 'emerald' ? 'bg-emerald-600 text-white' :
                getSafetyColor(result.safetyRating) === 'yellow' ? 'bg-yellow-600 text-white' :
                'bg-red-600 text-white'
              }`}>
                {getSafetyLabel(result.safetyRating)}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Safety Rating for Inflammatory Skin</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-white rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      getSafetyColor(result.safetyRating) === 'emerald' ? 'bg-emerald-500' :
                      getSafetyColor(result.safetyRating) === 'yellow' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${result.safetyRating * 10}%` }}
                  />
                </div>
                <span className="text-xl text-gray-900">{result.safetyRating}/10</span>
              </div>
            </div>
          </div>

          <SkincareSection
            icon={<CheckCircle className="w-5 h-5" />}
            title="Good Aspects"
            color="emerald"
            items={result.goodAspects}
          />

          <SkincareSection
            icon={<AlertTriangle className="w-5 h-5" />}
            title="Concerns"
            color="red"
            items={result.concerns}
          />

          <SkincareSection
            icon={<Lightbulb className="w-5 h-5" />}
            title="Recommendations"
            color="blue"
            items={result.recommendations}
          />

          <div className={`rounded-xl p-6 border-2 ${
            getSafetyColor(result.safetyRating) === 'emerald' ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200' :
            getSafetyColor(result.safetyRating) === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' :
            'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-lg ${
                getSafetyColor(result.safetyRating) === 'emerald' ? 'bg-emerald-600' :
                getSafetyColor(result.safetyRating) === 'yellow' ? 'bg-yellow-600' :
                'bg-red-600'
              }`}>
                <Info className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">My Personal Experience</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{result.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

interface SkincareSectionProps {
  icon: React.ReactNode;
  title: string;
  color: 'emerald' | 'red' | 'blue';
  items: string[];
}

function SkincareSection({ icon, title, color, items }: SkincareSectionProps) {
  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-600',
      itemBg: 'bg-emerald-50',
      border: 'border-gray-200',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      itemBg: 'bg-red-50',
      border: 'border-gray-200',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      itemBg: 'bg-blue-50',
      border: 'border-gray-200',
    },
  };

  const classes = colorClasses[color];

  return (
    <div className={`bg-white rounded-xl p-6 border ${classes.border}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`${classes.bg} p-2 rounded-lg`}>
          <div className={classes.text}>{icon}</div>
        </div>
        <h3 className="text-xl text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className={`p-3 ${classes.itemBg} rounded-lg text-gray-700`}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
