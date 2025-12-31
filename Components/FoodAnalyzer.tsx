import { useState } from 'react';
import { Search, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

// Mock database - in a real app, this would come from an API or database
const foodDatabase: Record<string, FoodData> = {
  salmon: {
    name: 'Salmon',
    goodComponents: ['Omega-3 fatty acids (EPA & DHA)', 'High-quality protein', 'Vitamin D', 'Selenium', 'B vitamins'],
    nutrients: {
      protein: '22g per 100g',
      omega3: '2.3g per 100g',
      vitaminD: '570 IU per 100g',
      calories: '206 per 100g',
    },
    cautions: ['Check for farm-raised vs wild-caught', 'May contain mercury (usually low levels)', 'Potential allergen for some individuals'],
    avoidsIfContains: ['Fish allergy', 'Severe seafood sensitivity'],
    summary: 'Salmon is one of the most powerful anti-inflammatory foods. Rich in omega-3s, it actively reduces inflammation markers in your body. From my experience, eating wild-caught salmon 2-3 times per week significantly reduced my eczema flare-ups.',
    rating: 'excellent',
  },
  gluten: {
    name: 'Gluten',
    goodComponents: ['Provides texture in baked goods', 'Source of protein (in whole grains)'],
    nutrients: {
      protein: 'Varies by product',
      fiber: 'Present in whole grain forms',
    },
    cautions: ['Major inflammatory trigger for many', 'Can cause intestinal permeability', 'May worsen autoimmune conditions', 'Hidden in many processed foods'],
    avoidsIfContains: ['Celiac disease', 'Gluten sensitivity', 'Autoimmune conditions', 'Chronic inflammation', 'Eczema or psoriasis'],
    summary: 'Gluten is a protein found in wheat, barley, and rye that can trigger significant inflammation, even in people without celiac disease. In my journey, eliminating gluten reduced my asthma symptoms by 60% within 3 weeks. It\'s worth trying a 30-day elimination.',
    rating: 'caution',
  },
  turmeric: {
    name: 'Turmeric',
    goodComponents: ['Curcumin (powerful anti-inflammatory)', 'Antioxidants', 'Antimicrobial properties', 'Natural pain reliever'],
    nutrients: {
      curcumin: '3-5% by weight',
      iron: 'Good source',
      manganese: 'Excellent source',
      calories: 'Very low',
    },
    cautions: ['Take with black pepper for better absorption', 'May interact with blood thinners', 'High doses may cause digestive issues'],
    avoidsIfContains: ['Gallbladder problems', 'Bleeding disorders (without doctor approval)'],
    summary: 'Turmeric is nature\'s anti-inflammatory powerhouse. The active compound curcumin has been shown to be as effective as some anti-inflammatory drugs. I add it to my morning smoothie with black pepper and healthy fats—game changer for joint pain.',
    rating: 'excellent',
  },
  'refined sugar': {
    name: 'Refined Sugar',
    goodComponents: ['Quick energy source'],
    nutrients: {
      calories: '387 per 100g',
      carbohydrates: '100g per 100g',
    },
    cautions: ['Highly inflammatory', 'Spikes blood sugar', 'Feeds harmful gut bacteria', 'Suppresses immune function', 'Addictive properties'],
    avoidsIfContains: ['Diabetes', 'Any inflammatory condition', 'Skin issues (acne, eczema)', 'Autoimmune diseases', 'Asthma or allergies'],
    summary: 'Refined sugar is public enemy #1 for inflammation. It triggers inflammatory pathways and feeds bad bacteria in your gut. When I cut out refined sugar, my eczema cleared up in 10 days. Use dates, honey, or maple syrup in moderation instead.',
    rating: 'avoid',
  },
  spinach: {
    name: 'Spinach',
    goodComponents: ['Chlorophyll', 'Vitamins A, C, K', 'Folate', 'Iron', 'Magnesium', 'Antioxidants'],
    nutrients: {
      vitaminK: '483% DV per 100g',
      vitaminA: '188% DV per 100g',
      folate: '49% DV per 100g',
      iron: '15% DV per 100g',
      calories: '23 per 100g',
    },
    cautions: ['High in oxalates (may affect kidney stone formers)', 'Cook to reduce oxalate content'],
    avoidsIfContains: ['History of kidney stones (consume in moderation)', 'On blood thinners (consult doctor due to vitamin K)'],
    summary: 'Spinach is loaded with anti-inflammatory nutrients. The antioxidants help combat oxidative stress that triggers inflammation. I blend it into smoothies every morning—you barely taste it, but your body will thank you.',
    rating: 'excellent',
  },
  doritos: {
    name: 'Doritos (Nacho Cheese)',
    goodComponents: ['Convenient snack', 'Some corn content (though heavily processed)'],
    nutrients: {
      calories: '150 per 28g (1oz)',
      totalFat: '8g',
      sodium: '210mg',
      carbs: '18g',
      protein: '2g',
    },
    cautions: [
      'Loaded with inflammatory seed oils (corn, canola, sunflower)',
      'Contains MSG and artificial flavors',
      'High in sodium',
      'Artificial colors (Red 40, Yellow 5, Yellow 6)',
      'Contains maltodextrin (spikes blood sugar)',
      'May contain gluten cross-contamination',
    ],
    avoidsIfContains: [
      'Any inflammatory condition',
      'Eczema or skin issues',
      'Asthma or allergies',
      'MSG sensitivity',
      'High blood pressure',
      'Trying to reduce inflammation',
    ],
    summary: 'Doritos are basically an inflammation bomb. The combination of seed oils, MSG, artificial colors, and refined carbs creates the perfect storm for triggering flare-ups. I used to crush a bag weekly—my eczema was out of control. Cut these out and within 2 weeks my skin was noticeably calmer. If you need a crunch, try plantain chips or veggie sticks.',
    rating: 'avoid',
  },
  'frosted flakes': {
    name: 'Frosted Flakes (Kellogg\'s)',
    goodComponents: ['Fortified with vitamins and minerals', 'Quick breakfast option'],
    nutrients: {
      calories: '110 per 3/4 cup',
      sugar: '12g',
      sodium: '150mg',
      iron: '45% DV',
      vitaminD: '10% DV',
    },
    cautions: [
      'First ingredient is sugar-coated corn',
      '12g sugar per serving (3 teaspoons!)',
      'Refined grains cause blood sugar spikes',
      'Contains BHT (preservative linked to inflammation)',
      'Minimal fiber or protein',
      'High glycemic index',
    ],
    avoidsIfContains: [
      'Diabetes or pre-diabetes',
      'Inflammatory conditions',
      'Eczema or acne',
      'ADHD or focus issues',
      'Trying to stabilize blood sugar',
    ],
    summary: 'Frosted Flakes are basically candy masquerading as breakfast. That sugar rush crashes hard and triggers inflammatory responses. I ate these every morning as a kid—constant asthma issues. Switched to oatmeal with berries and cinnamon, and my morning wheezing stopped. The vitamins are synthetic add-ins; get real nutrients from whole foods.',
    rating: 'avoid',
  },
  'kind bar': {
    name: 'KIND Bar (Dark Chocolate Nuts & Sea Salt)',
    goodComponents: [
      'Whole nuts (almonds, peanuts)',
      'Real dark chocolate',
      'No artificial sweeteners',
      'Good source of fiber',
      'Healthy fats from nuts',
    ],
    nutrients: {
      calories: '200',
      protein: '6g',
      fiber: '7g',
      sugar: '5g',
      totalFat: '16g',
    },
    cautions: [
      'Some varieties contain honey (inflammatory for some)',
      'Calorie-dense',
      'May contain soy lecithin',
      'Potential allergen (tree nuts, peanuts)',
    ],
    avoidsIfContains: [
      'Tree nut allergy',
      'Peanut allergy',
      'Severe honey sensitivity',
    ],
    summary: 'KIND bars are one of the better packaged snack options. Real ingredients you can actually pronounce. The nuts provide anti-inflammatory omega-3s and the low sugar won\'t spike you. I keep these in my bag for emergencies—way better than grabbing fast food. Just watch the calories if you\'re tracking intake.',
    rating: 'excellent',
  },
  'coca-cola': {
    name: 'Coca-Cola (Regular)',
    goodComponents: ['None from a health perspective'],
    nutrients: {
      calories: '140 per 12oz',
      sugar: '39g (10 teaspoons!)',
      sodium: '45mg',
      carbs: '39g',
    },
    cautions: [
      'Massive sugar content causes inflammation spikes',
      'Phosphoric acid damages gut lining',
      'Caramel coloring (potential carcinogen)',
      'Caffeine can trigger anxiety/inflammation in sensitive people',
      'Linked to obesity, diabetes, and chronic inflammation',
      'Depletes calcium and minerals',
    ],
    avoidsIfContains: [
      'Any inflammatory condition',
      'Diabetes or insulin resistance',
      'Eczema, psoriasis, or acne',
      'Asthma or allergies',
      'Osteoporosis concerns',
      'Anyone trying to be healthy',
    ],
    summary: 'Soda is liquid inflammation. 39g of sugar floods your system, triggering an inflammatory cascade that lasts hours. When I quit soda, my constant afternoon energy crashes disappeared and my skin cleared up dramatically. If you need fizz, try sparkling water with a squeeze of lemon. Your body will thank you.',
    rating: 'avoid',
  },
  'oatmeal': {
    name: 'Oatmeal (Plain Steel-Cut or Rolled)',
    goodComponents: [
      'High in beta-glucan (anti-inflammatory fiber)',
      'Rich in antioxidants (avenanthramides)',
      'Lowers cholesterol',
      'Stabilizes blood sugar',
      'Promotes gut health',
      'Rich in minerals (manganese, phosphorus, magnesium)',
    ],
    nutrients: {
      calories: '150 per 1/2 cup dry',
      protein: '5g',
      fiber: '4g',
      iron: '10% DV',
      magnesium: '15% DV',
    },
    cautions: [
      'Buy gluten-free if sensitive (oats can be cross-contaminated)',
      'Avoid instant/flavored varieties (added sugar)',
      'Some people have oat sensitivity',
    ],
    avoidsIfContains: [
      'Celiac disease (unless certified gluten-free)',
      'Oat allergy (rare but exists)',
    ],
    summary: 'Steel-cut oatmeal is my go-to breakfast. The beta-glucan fiber is clinically proven to reduce inflammation markers. I top mine with blueberries, cinnamon, and walnuts—keeps me full for hours and my eczema loves it. Avoid the instant packets full of sugar; make it yourself with real toppings.',
    rating: 'excellent',
  },
  'pringles': {
    name: 'Pringles (Original)',
    goodComponents: ['Uniform shape for stacking?'],
    nutrients: {
      calories: '150 per 14 crisps',
      totalFat: '9g',
      sodium: '150mg',
      carbs: '15g',
    },
    cautions: [
      'Made from dehydrated potatoes + additives (not real potato chips)',
      'Contains inflammatory oils (corn, cottonseed)',
      'Wheat starch (gluten)',
      'MSG and artificial flavors',
      'High in acrylamide (forms when starchy foods are fried)',
      'Engineered to be addictive',
    ],
    avoidsIfContains: [
      'Gluten sensitivity or celiac',
      'Inflammatory conditions',
      'Eczema or skin issues',
      'MSG sensitivity',
      'Trying to eat real food',
    ],
    summary: 'Pringles aren\'t even real chips—they\'re a processed paste formed into chip shapes. The seed oils and additives make them inflammatory nightmares. Every time I ate these, I\'d wake up with puffy eyes and inflamed skin. Now I make my own veggie chips in the air fryer. Tastes better and my body doesn\'t hate me.',
    rating: 'avoid',
  },
};

interface FoodData {
  name: string;
  goodComponents: string[];
  nutrients: Record<string, string>;
  cautions: string[];
  avoidsIfContains: string[];
  summary: string;
  rating: 'excellent' | 'caution' | 'avoid';
}

export function FoodAnalyzer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<FoodData | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    const found = foodDatabase[query];
    
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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Food Analyzer
        </h1>
        <p className="text-lg text-gray-600">
          Search any food, product, or ingredient to see how it affects inflammation
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Try: salmon, gluten, turmeric, refined sugar, spinach..."
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
          {Object.keys(foodDatabase).map((food) => (
            <button
              key={food}
              onClick={() => {
                setSearchQuery(food);
                setResult(foodDatabase[food]);
                setNotFound(false);
              }}
              className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm hover:bg-emerald-100 transition-colors"
            >
              {foodDatabase[food].name}
            </button>
          ))}
        </div>
      </div>

      {notFound && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
          <h3 className="text-lg text-gray-900 mb-2">Food Not Found</h3>
          <p className="text-gray-600">
            We don't have data for "{searchQuery}" yet. Try one of the suggested foods or check back soon—we're constantly expanding our database!
          </p>
        </div>
      )}

      {result && (
        <div className="space-y-6">
          <div className={`rounded-xl p-6 border-2 ${
            result.rating === 'excellent' ? 'bg-emerald-50 border-emerald-200' :
            result.rating === 'caution' ? 'bg-yellow-50 border-yellow-200' :
            'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl text-gray-900">{result.name}</h2>
              <span className={`px-4 py-2 rounded-lg text-sm ${
                result.rating === 'excellent' ? 'bg-emerald-600 text-white' :
                result.rating === 'caution' ? 'bg-yellow-600 text-white' :
                'bg-red-600 text-white'
              }`}>
                {result.rating === 'excellent' ? 'Anti-Inflammatory' :
                 result.rating === 'caution' ? 'Use Caution' :
                 'Avoid'}
              </span>
            </div>
          </div>

          <ResultSection
            icon={<CheckCircle className="w-5 h-5" />}
            title="Good Components"
            color="emerald"
            items={result.goodComponents}
          />

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-900">Key Nutrients</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {Object.entries(result.nutrients).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="text-blue-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <ResultSection
            icon={<AlertTriangle className="w-5 h-5" />}
            title="Cautions"
            color="yellow"
            items={result.cautions}
          />

          <ResultSection
            icon={<XCircle className="w-5 h-5" />}
            title="Avoid If You Have"
            color="red"
            items={result.avoidsIfContains}
          />

          <div className={`rounded-xl p-6 border-2 ${
            result.rating === 'excellent' ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200' :
            result.rating === 'caution' ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' :
            'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-lg ${
                result.rating === 'excellent' ? 'bg-emerald-600' :
                result.rating === 'caution' ? 'bg-yellow-600' :
                'bg-red-600'
              }`}>
                <Info className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">The Bottom Line</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{result.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}

interface ResultSectionProps {
  icon: React.ReactNode;
  title: string;
  color: 'emerald' | 'yellow' | 'red' | 'blue';
  items: string[];
}

function ResultSection({ icon, title, color, items }: ResultSectionProps) {
  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-600',
      itemBg: 'bg-emerald-50',
      border: 'border-gray-200',
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      itemBg: 'bg-yellow-50',
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