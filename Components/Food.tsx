import { Apple, Flame, Salad, UtensilsCrossed, BookOpen, Search } from 'lucide-react';
import { FoodAnalyzer } from './FoodAnalyzer';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function Food() {
  const [showAnalyzer, setShowAnalyzer] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Food as Medicine
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          What you eat either feeds inflammation or fights it. There's no neutral ground. Let's break down exactly what to eat, what to avoid, and why it matters.
        </p>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button
          onClick={() => setShowAnalyzer(false)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
            !showAnalyzer
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-300'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Learn About Food
        </button>
        <button
          onClick={() => setShowAnalyzer(true)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
            showAnalyzer
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
              : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-300'
          }`}
        >
          <Search className="w-5 h-5" />
          Food Analyzer
        </button>
      </div>

      {showAnalyzer ? (
        <FoodAnalyzer />
      ) : (
        <>
          {/* Hero Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1609869882537-6a860e45a0d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBmb29kfGVufDF8fHx8MTc2Njk4NjkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fresh vegetables and healthy food"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          {/* Anti-Inflammatory Foods Section */}
          <FoodSection
            icon={<Apple className="w-6 h-6" />}
            title="Anti-Inflammatory Powerhouses"
            color="green"
            intro="These foods actively reduce inflammation in your body. Eat them liberally and often."
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FoodCategoryCard
                  title="Omega-3 Rich Foods"
                  emoji="🐟"
                  foods={[
                    { name: 'Wild-caught salmon', detail: '2-3x per week, rich in EPA/DHA' },
                    { name: 'Sardines', detail: 'Small fish = less mercury, high omega-3' },
                    { name: 'Mackerel', detail: 'Affordable and packed with anti-inflammatory fats' },
                    { name: 'Walnuts', detail: 'Best plant source of omega-3s' },
                    { name: 'Chia seeds', detail: '1-2 tbsp daily in smoothies or oatmeal' },
                    { name: 'Flaxseeds', detail: 'Grind fresh for maximum benefit' },
                  ]}
                />

                <FoodCategoryCard
                  title="Colorful Vegetables"
                  emoji="🥦"
                  foods={[
                    { name: 'Leafy greens', detail: 'Spinach, kale, arugula—loaded with antioxidants' },
                    { name: 'Cruciferous veggies', detail: 'Broccoli, cauliflower, Brussels sprouts' },
                    { name: 'Beets', detail: 'Contain betalains (powerful anti-inflammatory)' },
                    { name: 'Sweet potatoes', detail: 'Beta-carotene rich, fiber-packed' },
                    { name: 'Bell peppers', detail: 'High in vitamin C and antioxidants' },
                    { name: 'Carrots', detail: 'Beta-carotene reduces inflammation' },
                  ]}
                />

                <FoodCategoryCard
                  title="Berries & Fruits"
                  emoji="🫐"
                  foods={[
                    { name: 'Blueberries', detail: 'Highest antioxidant content of any fruit' },
                    { name: 'Strawberries', detail: 'Vitamin C and anti-inflammatory compounds' },
                    { name: 'Cherries', detail: 'Reduce inflammatory markers significantly' },
                    { name: 'Pomegranate', detail: 'Powerful antioxidant, anti-inflammatory' },
                    { name: 'Pineapple', detail: 'Contains bromelain (anti-inflammatory enzyme)' },
                    { name: 'Papaya', detail: 'Papain enzyme reduces inflammation' },
                  ]}
                />

                <FoodCategoryCard
                  title="Herbs & Spices"
                  emoji="🌿"
                  foods={[
                    { name: 'Turmeric', detail: 'Curcumin is a superstar—take with black pepper' },
                    { name: 'Ginger', detail: 'Fresh or powdered, powerful anti-inflammatory' },
                    { name: 'Garlic', detail: 'Allicin compound fights inflammation' },
                    { name: 'Cinnamon', detail: 'Regulates blood sugar and reduces inflammation' },
                    { name: 'Rosemary', detail: 'Antioxidant and anti-inflammatory' },
                    { name: 'Oregano', detail: 'High in antioxidants' },
                  ]}
                />

                <FoodCategoryCard
                  title="Healthy Fats"
                  emoji="🥑"
                  foods={[
                    { name: 'Extra virgin olive oil', detail: 'Oleocanthal works like ibuprofen' },
                    { name: 'Avocados', detail: 'Monounsaturated fats reduce inflammation' },
                    { name: 'Coconut oil', detail: 'Medium-chain triglycerides (in moderation)' },
                    { name: 'Olives', detail: 'Polyphenols fight inflammation' },
                    { name: 'Grass-fed butter/ghee', detail: 'If tolerated, contains beneficial CLA' },
                  ]}
                />

                <FoodCategoryCard
                  title="Other Superstars"
                  emoji="⭐"
                  foods={[
                    { name: 'Green tea', detail: 'EGCG is highly anti-inflammatory' },
                    { name: 'Dark chocolate', detail: '70%+ cacao, rich in flavonoids' },
                    { name: 'Bone broth', detail: 'Collagen and minerals heal gut lining' },
                    { name: 'Fermented foods', detail: 'Kimchi, sauerkraut, kefir—gut health = less inflammation' },
                    { name: 'Mushrooms', detail: 'Beta-glucans support immune function' },
                  ]}
                />
              </div>

              <PersonalInsight
                color="green"
                text="I built my diet around these foods and within 3 weeks my eczema improved dramatically. Now I do 'eat the rainbow'—every meal has multiple colors from vegetables and fruits. My body knows the difference between real food and processed junk."
              />
            </div>
          </FoodSection>

          {/* Inflammatory Foods Section */}
          <FoodSection
            icon={<Flame className="w-6 h-6" />}
            title="Inflammatory Triggers to Avoid"
            color="red"
            intro="These foods pour gasoline on the inflammation fire. Minimize or eliminate them completely."
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <AvoidFoodCard
                  title="Refined Sugar & Sweeteners"
                  emoji="🍬"
                  why="Spikes blood sugar, feeds bad gut bacteria, triggers inflammatory cytokines"
                  examples={[
                    'Soda and sweet drinks',
                    'Candy and desserts',
                    'Sweetened yogurt',
                    'Breakfast cereals',
                    'Granola bars',
                    'Flavored coffee drinks',
                  ]}
                  alternatives="Use: Dates, raw honey (small amounts), maple syrup, stevia, monk fruit"
                />

                <AvoidFoodCard
                  title="Refined Grains"
                  emoji="🍞"
                  why="Stripped of nutrients, spike blood sugar, often contain gluten (inflammatory for many)"
                  examples={[
                    'White bread',
                    'White pasta',
                    'White rice',
                    'Most crackers',
                    'Pastries and cakes',
                    'Pizza dough',
                  ]}
                  alternatives="Use: Quinoa, brown rice, sweet potatoes, cauliflower rice, lettuce wraps"
                />

                <AvoidFoodCard
                  title="Seed/Vegetable Oils"
                  emoji="🛢️"
                  why="High in omega-6 (inflammatory), heavily processed, oxidize easily when heated"
                  examples={[
                    'Canola oil',
                    'Corn oil',
                    'Soybean oil',
                    'Sunflower oil',
                    'Safflower oil',
                    'Anything with "vegetable oil"',
                  ]}
                  alternatives="Use: Olive oil, avocado oil, coconut oil, grass-fed butter, ghee"
                />

                <AvoidFoodCard
                  title="Processed Meats"
                  emoji="🌭"
                  why="Preservatives (nitrates), high sodium, advanced glycation end products (AGEs)"
                  examples={[
                    'Hot dogs',
                    'Bacon (conventional)',
                    'Deli meats',
                    'Sausages',
                    'Pepperoni',
                    'Spam',
                  ]}
                  alternatives="Use: Fresh poultry, wild fish, grass-fed beef, organic/nitrate-free options"
                />

                <AvoidFoodCard
                  title="Dairy (for some people)"
                  emoji="🥛"
                  why="Casein protein can trigger inflammation in sensitive individuals, hormones, lactose"
                  examples={[
                    'Cow\'s milk',
                    'Cheese (especially processed)',
                    'Ice cream',
                    'Creamy sauces',
                    'Yogurt (sweetened)',
                  ]}
                  alternatives="Use: Coconut milk, almond milk, cashew cheese, coconut yogurt (unsweetened)"
                />

                <AvoidFoodCard
                  title="Alcohol"
                  emoji="🍺"
                  why="Disrupts gut barrier, increases inflammation, impairs liver detox, dehydrates"
                  examples={[
                    'Beer (also contains gluten)',
                    'Wine (sulfites)',
                    'Cocktails (sugar)',
                    'Hard liquor',
                  ]}
                  alternatives="Use: Sparkling water with fruit, herbal tea, kombucha (low sugar)"
                />
              </div>

              <PersonalInsight
                color="red"
                text="Cutting out seed oils was a game-changer I didn't expect. I started reading labels obsessively—'vegetable oil' is in EVERYTHING. Switched to cooking with olive oil and ghee, stopped eating fried restaurant food. My joint pain decreased by 70% in a month. Those oils are silent inflammation bombs."
              />
            </div>
          </FoodSection>

          {/* Meal Planning Section */}
          <FoodSection
            icon={<UtensilsCrossed className="w-6 h-6" />}
            title="Building Anti-Inflammatory Meals"
            color="blue"
            intro="It's not just about individual foods—it's about how you combine them into satisfying, healing meals."
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl text-gray-900 mb-4">The Perfect Plate Formula</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <PlateComponent
                    emoji="🥬"
                    percentage="50%"
                    title="Vegetables"
                    description="Half your plate should be colorful veggies"
                  />
                  <PlateComponent
                    emoji="🍗"
                    percentage="25%"
                    title="Protein"
                    description="Wild fish, pasture-raised poultry, grass-fed meat"
                  />
                  <PlateComponent
                    emoji="🍠"
                    percentage="25%"
                    title="Complex Carbs"
                    description="Sweet potato, quinoa, brown rice, or skip entirely"
                  />
                  <PlateComponent
                    emoji="🥑"
                    percentage="+"
                    title="Healthy Fat"
                    description="Olive oil, avocado, nuts, seeds"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <MealExample
                  meal="Breakfast"
                  emoji="🌅"
                  options={[
                    'Green smoothie (spinach, berries, chia, coconut milk)',
                    'Oatmeal with walnuts, blueberries, cinnamon',
                    'Scrambled eggs with sautéed veggies and avocado',
                    'Chia pudding with coconut milk and berries',
                  ]}
                />
                <MealExample
                  meal="Lunch"
                  emoji="☀️"
                  options={[
                    'Big salad with salmon, olive oil, lots of veggies',
                    'Chicken and veggie stir-fry with cauliflower rice',
                    'Sweet potato stuffed with ground turkey and veggies',
                    'Bone broth soup with chicken and vegetables',
                  ]}
                />
                <MealExample
                  meal="Dinner"
                  emoji="🌙"
                  options={[
                    'Grilled wild fish with roasted Brussels sprouts',
                    'Grass-fed beef with mashed cauliflower and broccoli',
                    'Turkey meatballs in tomato sauce with zucchini noodles',
                    'Coconut curry with chicken and mixed vegetables',
                  ]}
                />
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl text-gray-900 mb-4">Snack Smart</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <SnackOption text="🥜 Handful of raw nuts" />
                  <SnackOption text="🥕 Veggies + guacamole" />
                  <SnackOption text="🫐 Berries with coconut cream" />
                  <SnackOption text="🍫 Dark chocolate (70%+)" />
                  <SnackOption text="🥚 Hard-boiled eggs" />
                  <SnackOption text="🥥 Coconut chips" />
                  <SnackOption text="🥑 Half an avocado" />
                  <SnackOption text="🍎 Apple with almond butter" />
                </div>
              </div>
            </div>
          </FoodSection>

          {/* Diet Approaches Section */}
          <FoodSection
            icon={<Salad className="w-6 h-6" />}
            title="Anti-Inflammatory Diet Approaches"
            color="purple"
            intro="Different approaches work for different people. These are the most effective frameworks for reducing inflammation."
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <DietApproachCard
                  title="Mediterranean Diet"
                  rating="Excellent"
                  pros={[
                    'Heavily researched and proven effective',
                    'Focuses on whole foods, fish, olive oil, vegetables',
                    'Easy to follow and sustainable',
                    'Reduces inflammation markers significantly',
                  ]}
                  cons={[
                    'Includes grains (may not work if gluten-sensitive)',
                    'Moderate wine consumption (skip if inflammation is severe)',
                  ]}
                />

                <DietApproachCard
                  title="Paleo / Primal"
                  rating="Excellent"
                  pros={[
                    'Eliminates processed foods, grains, dairy, legumes',
                    'Focuses on meat, fish, vegetables, fruits, nuts',
                    'Very effective for autoimmune conditions',
                    'Naturally low in inflammatory foods',
                  ]}
                  cons={[
                    'Can be restrictive',
                    'Requires meal planning',
                    'More expensive (quality meats)',
                  ]}
                />

                <DietApproachCard
                  title="AIP (Autoimmune Protocol)"
                  rating="Very Effective"
                  pros={[
                    'Most restrictive but most effective for severe inflammation',
                    'Eliminates all potential triggers',
                    'Excellent for eczema, psoriasis, autoimmune conditions',
                    'Systematic reintroduction helps identify triggers',
                  ]}
                  cons={[
                    'Very restrictive (no grains, dairy, eggs, nightshades, nuts, seeds)',
                    'Difficult to maintain long-term',
                    'Requires dedication and planning',
                  ]}
                />

                <DietApproachCard
                  title="Whole30"
                  rating="Good for Reset"
                  pros={[
                    '30-day elimination diet',
                    'Helps identify food sensitivities',
                    'Breaks sugar addiction',
                    'Clear rules and structure',
                  ]}
                  cons={[
                    'Only 30 days (need sustainable approach after)',
                    'Very restrictive temporarily',
                    'Can be socially challenging',
                  ]}
                />
              </div>

              <PersonalInsight
                color="purple"
                text="I started with Whole30 to reset everything, then transitioned to a modified paleo approach. Discovered I'm highly sensitive to gluten and dairy—eliminating them reduced my asthma attacks by 80%. Now I follow an 80/20 rule: strict at home, flexible when traveling. Find what works for YOUR body."
              />

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="text-xl text-gray-900 mb-3">My Recommendation: Start Here</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    <span className="text-gray-700">Eliminate the Big 3: refined sugar, seed oils, processed foods (30 days minimum)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    <span className="text-gray-700">Add anti-inflammatory foods: fatty fish 2-3x/week, tons of vegetables, berries, olive oil</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    <span className="text-gray-700">If symptoms persist, try eliminating gluten and dairy for 30 days</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    <span className="text-gray-700">Track your symptoms—keep a food journal to identify YOUR specific triggers</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                    <span className="text-gray-700">Build a sustainable approach—this is a lifestyle, not a 30-day fix</span>
                  </li>
                </ol>
              </div>
            </div>
          </FoodSection>

          {/* CTA to Analyzer */}
          <div className="mt-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 border-2 border-emerald-300 text-center">
            <h2 className="text-2xl text-gray-900 mb-4">Ready to Analyze Specific Foods?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Use our Food Analyzer to get detailed breakdowns of any food, ingredient, or product—including what to watch out for and healthier alternatives.
            </p>
            <button
              onClick={() => setShowAnalyzer(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              <Search className="w-5 h-5" />
              Open Food Analyzer
            </button>
          </div>
        </>
      )}
    </div>
  );
}

interface FoodSectionProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  intro: string;
  children: React.ReactNode;
}

function FoodSection({ icon, title, color, intro, children }: FoodSectionProps) {
  const colorMap: Record<string, string> = {
    green: 'from-green-500 to-emerald-500',
    red: 'from-red-500 to-orange-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
  };

  return (
    <section className="mb-16">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`bg-gradient-to-br ${colorMap[color]} p-3 rounded-xl text-white`}>
            {icon}
          </div>
          <h2 className="text-2xl sm:text-3xl text-gray-900">{title}</h2>
        </div>
        <p className="text-lg text-gray-600 ml-14">{intro}</p>
      </div>
      {children}
    </section>
  );
}

interface FoodCategoryCardProps {
  title: string;
  emoji: string;
  foods: { name: string; detail: string }[];
}

function FoodCategoryCard({ title, emoji, foods }: FoodCategoryCardProps) {
  return (
    <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
      <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {foods.map((food, index) => (
          <li key={index} className="bg-emerald-50 p-3 rounded-lg">
            <p className="text-gray-900">{food.name}</p>
            <p className="text-sm text-gray-600">{food.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface AvoidFoodCardProps {
  title: string;
  emoji: string;
  why: string;
  examples: string[];
  alternatives: string;
}

function AvoidFoodCard({ title, emoji, why, examples, alternatives }: AvoidFoodCardProps) {
  return (
    <div className="bg-white border-2 border-red-200 rounded-xl p-6">
      <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      <div className="bg-red-50 p-3 rounded-lg mb-3">
        <p className="text-sm text-gray-700">
          <strong>Why avoid:</strong> {why}
        </p>
      </div>
      <div className="mb-3">
        <p className="text-sm text-gray-600 mb-2">Common examples:</p>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
              • {example}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong className="text-emerald-700">✓ {alternatives}</strong>
        </p>
      </div>
    </div>
  );
}

interface PersonalInsightProps {
  color: string;
  text: string;
}

function PersonalInsight({ color, text }: PersonalInsightProps) {
  const colorMap: Record<string, string> = {
    green: 'from-green-50 to-emerald-50 border-green-200',
    red: 'from-red-50 to-orange-50 border-red-200',
    purple: 'from-purple-50 to-pink-50 border-purple-200',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border-2 rounded-xl p-6 italic`}>
      <p className="text-gray-700">
        <span className="text-2xl text-gray-400 mr-1">"</span>
        {text}
        <span className="text-2xl text-gray-400 ml-1">"</span>
      </p>
      <p className="text-sm text-gray-600 mt-2">— My Experience</p>
    </div>
  );
}

interface PlateComponentProps {
  emoji: string;
  percentage: string;
  title: string;
  description: string;
}

function PlateComponent({ emoji, percentage, title, description }: PlateComponentProps) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="text-2xl text-blue-600 mb-1">{percentage}</div>
      <p className="text-gray-900 mb-1">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

interface MealExampleProps {
  meal: string;
  emoji: string;
  options: string[];
}

function MealExample({ meal, emoji, options }: MealExampleProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        {meal}
      </h3>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index} className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg">
            • {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SnackOptionProps {
  text: string;
}

function SnackOption({ text }: SnackOptionProps) {
  return (
    <div className="bg-emerald-50 p-3 rounded-lg text-center text-sm text-gray-700">
      {text}
    </div>
  );
}

interface DietApproachCardProps {
  title: string;
  rating: string;
  pros: string[];
  cons: string[];
}

function DietApproachCard({ title, rating, pros, cons }: DietApproachCardProps) {
  return (
    <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl text-gray-900">{title}</h3>
        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
          {rating}
        </span>
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-emerald-700 mb-2">✓ Pros:</p>
          <ul className="space-y-1">
            {pros.map((pro, index) => (
              <li key={index} className="text-sm text-gray-700 bg-emerald-50 p-2 rounded">
                • {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-red-700 mb-2">✗ Cons:</p>
          <ul className="space-y-1">
            {cons.map((con, index) => (
              <li key={index} className="text-sm text-gray-700 bg-red-50 p-2 rounded">
                • {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
