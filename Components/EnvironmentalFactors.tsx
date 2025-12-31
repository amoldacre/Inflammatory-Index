import { Wind, Droplets, Thermometer, Home, TreePine, Flame, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function EnvironmentalFactors() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Environmental Factors & Inflammation
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Your environment is quietly shaping your inflammation levels every single day. Here's what you need to know about the air you breathe, the humidity around you, and everything in between.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwd2VsbG5lc3MlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY2OTI2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Environmental wellness"
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>

      {/* Air Quality Section */}
      <EnvironmentalSection
        icon={<Wind className="w-6 h-6" />}
        title="Air Quality"
        color="blue"
        intro="The air you breathe directly impacts your respiratory system and inflammatory response."
      >
        <div className="space-y-6">
          <InfoCard
            title="Indoor Air Pollution"
            type="danger"
            items={[
              'Dust mites (the #1 indoor allergen—they thrive in bedding, carpets, upholstery)',
              'Mold spores (anywhere there\'s moisture: bathrooms, basements, window sills)',
              'Pet dander (stays airborne for hours, settles on everything)',
              'VOCs from cleaning products, air fresheners, and new furniture',
              'Cooking fumes and smoke (especially from frying)',
            ]}
          />

          <InfoCard
            title="Outdoor Air Quality"
            type="danger"
            items={[
              'Pollen (trees in spring, grass in summer, ragweed in fall)',
              'Air pollution from traffic (PM2.5 particles trigger systemic inflammation)',
              'Ozone (worse on hot, sunny days)',
              'Wildfire smoke (can travel hundreds of miles)',
              'Industrial emissions',
            ]}
          />

          <PersonalExperience
            color="blue"
            text="I used to wake up congested every single morning. Turned out my bedroom was a dust mite paradise. Got allergen-proof pillow and mattress covers, swapped heavy curtains for washable ones, and started using a HEPA air purifier. Within a week, I was breathing clearly for the first time in years."
          />

          <ActionableSteps
            title="What You Can Do"
            steps={[
              'Invest in a quality HEPA air purifier for your bedroom and main living space',
              'Check AQI (Air Quality Index) daily—avoid outdoor exercise on poor air days',
              'Use allergen-proof covers on pillows and mattresses',
              'Wash bedding weekly in hot water (130°F+) to kill dust mites',
              'Ditch air fresheners and scented candles—they add VOCs',
              'Vacuum with a HEPA filter vacuum 2-3x per week',
              'Keep humidity between 30-50% to prevent mold and dust mite growth',
            ]}
          />
        </div>
      </EnvironmentalSection>

      {/* Humidity Section */}
      <EnvironmentalSection
        icon={<Droplets className="w-6 h-6" />}
        title="Humidity Levels"
        color="teal"
        intro="Both too much and too little humidity can trigger inflammatory responses."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard
              title="Too Humid (>60%)"
              type="danger"
              items={[
                'Mold and mildew growth explodes',
                'Dust mites thrive and multiply',
                'Bacteria growth increases',
                'Asthma and allergy symptoms worsen',
                'Skin conditions like eczema can flare',
              ]}
            />

            <InfoCard
              title="Too Dry (<30%)"
              type="danger"
              items={[
                'Dry, cracked skin (broken skin barrier = inflammation)',
                'Respiratory passages dry out and become irritated',
                'Increased susceptibility to infections',
                'Eczema flares from moisture loss',
                'Static electricity (annoying but also irritating to skin)',
              ]}
            />
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 border-2 border-teal-200">
            <div className="flex items-start gap-3">
              <div className="bg-teal-600 p-2 rounded-lg mt-1">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xl text-gray-900 mb-2">The Sweet Spot: 40-50%</h4>
                <p className="text-gray-700 mb-4">
                  This is the ideal humidity range for inflammatory conditions. Mold can't thrive, dust mites struggle, and your skin stays hydrated without excess moisture.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Minimizes mold and dust mite growth</li>
                  <li>• Keeps respiratory passages comfortable</li>
                  <li>• Maintains healthy skin barrier</li>
                  <li>• Optimal for sleep quality</li>
                </ul>
              </div>
            </div>
          </div>

          <PersonalExperience
            color="teal"
            text="I live in a humid climate and my eczema was brutal in summer. Got a dehumidifier for my bedroom and kept it at 45%. The difference was night and day—literally couldn't believe how much better my skin felt. In winter, I switch to a humidifier when it drops below 35%."
          />

          <ActionableSteps
            title="How to Control Humidity"
            steps={[
              'Buy a hygrometer ($10-15) to monitor humidity levels',
              'Use a dehumidifier in humid climates or seasons (aim for 40-50%)',
              'Use a humidifier in dry climates or winter (but clean it weekly!)',
              'Run bathroom exhaust fans during and after showers',
              'Fix any leaks immediately—even small ones promote mold',
              'Ensure proper ventilation in your home',
              'Don\'t overwater indoor plants (they increase humidity)',
            ]}
          />
        </div>
      </EnvironmentalSection>

      {/* Temperature Section */}
      <EnvironmentalSection
        icon={<Thermometer className="w-6 h-6" />}
        title="Temperature"
        color="orange"
        intro="Extreme temperatures stress your body and can trigger inflammatory responses."
      >
        <div className="space-y-6">
          <InfoCard
            title="Heat & Inflammation"
            type="warning"
            items={[
              'Sweating can irritate eczema and cause breakouts',
              'Heat causes blood vessels to dilate (redness, swelling)',
              'Triggers histamine release in some people',
              'Can worsen rosacea and psoriasis',
              'Dehydration from heat reduces skin barrier function',
            ]}
          />

          <InfoCard
            title="Cold & Inflammation"
            type="warning"
            items={[
              'Dry air in heated spaces strips skin moisture',
              'Cold air constricts airways (asthma triggers)',
              'Skin becomes dry and cracked (leads to inflammation)',
              'Cold-induced urticaria (hives from cold exposure)',
              'Chilblains in extreme cases',
            ]}
          />

          <PersonalExperience
            color="orange"
            text="Hot showers were my guilty pleasure until I realized they were destroying my skin barrier. Switched to lukewarm showers and immediately applied thick moisturizer while still damp. My skin went from sandpaper to smooth in about 10 days. It's a small sacrifice for huge results."
          />

          <ActionableSteps
            title="Temperature Management"
            steps={[
              'Keep bedroom temperature between 60-67°F for optimal sleep',
              'Take lukewarm (not hot) showers—hot water strips natural oils',
              'Moisturize immediately after bathing while skin is damp',
              'Layer clothing so you can adjust to temperature changes',
              'Use a humidifier when running heat in winter',
              'Avoid abrupt temperature changes when possible',
              'Stay hydrated in both hot and cold weather',
            ]}
          />
        </div>
      </EnvironmentalSection>

      {/* Indoor Environment Section */}
      <EnvironmentalSection
        icon={<Home className="w-6 h-6" />}
        title="Your Indoor Environment"
        color="purple"
        intro="You spend 90% of your time indoors. Making your home inflammation-friendly is crucial."
      >
        <div className="space-y-6">
          <InfoCard
            title="Bedroom Optimization"
            type="success"
            items={[
              'Use hypoallergenic, dust-mite proof pillow and mattress covers',
              'Choose natural, breathable bedding (organic cotton, bamboo)',
              'Wash sheets weekly in hot water (130°F minimum)',
              'Remove carpet if possible (hard floors are easier to keep allergen-free)',
              'Minimize clutter where dust collects',
              'Keep pets out of the bedroom (I know, it\'s hard)',
              'Use blackout curtains that are washable',
            ]}
          />

          <InfoCard
            title="Cleaning Products"
            type="warning"
            items={[
              'Most conventional cleaners contain harsh VOCs and fragrances',
              'Bleach can trigger asthma and respiratory inflammation',
              'Antibacterial products often contain triclosan (inflammatory)',
              'Air fresheners and plug-ins are loaded with synthetic fragrances',
            ]}
          />

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h4 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
              Better Cleaning Alternatives
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-800">White vinegar (diluted)</p>
                <p className="text-sm text-gray-600">Multi-purpose cleaner</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-800">Baking soda</p>
                <p className="text-sm text-gray-600">Scrubbing & deodorizing</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-800">Castile soap</p>
                <p className="text-sm text-gray-600">Gentle all-purpose</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-800">Hydrogen peroxide</p>
                <p className="text-sm text-gray-600">Disinfecting</p>
              </div>
            </div>
          </div>

          <PersonalExperience
            color="purple"
            text="Switched to fragrance-free, plant-based cleaners and my chronic headaches disappeared. Turns out those 'fresh scent' products were triggering low-grade inflammation. Now I clean with diluted vinegar and castile soap. House smells like nothing—which is exactly the point."
          />
        </div>
      </EnvironmentalSection>

      {/* Outdoor Environment Section */}
      <EnvironmentalSection
        icon={<TreePine className="w-6 h-6" />}
        title="Outdoor Allergens & Triggers"
        color="green"
        intro="Nature is beautiful, but it's also full of inflammatory triggers if you're sensitive."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <SeasonalCard
              season="Spring"
              triggers={['Tree pollen (oak, birch, cedar)', 'Mold from spring rains', 'Grass starting to pollinate']}
            />
            <SeasonalCard
              season="Summer"
              triggers={['Grass pollen peaks', 'Ozone and smog', 'Mold from humidity', 'Insect stings']}
            />
            <SeasonalCard
              season="Fall"
              triggers={['Ragweed (worst offender)', 'Mold from wet leaves', 'Dust from heating systems']}
            />
          </div>

          <InfoCard
            title="Year-Round Outdoor Triggers"
            type="warning"
            items={[
              'Traffic pollution (diesel exhaust is highly inflammatory)',
              'Cigarette smoke (even secondhand)',
              'Strong perfumes and fragrances in public',
              'Chlorine in pools (dries skin and irritates airways)',
              'Lawn chemicals and pesticides',
            ]}
          />

          <ActionableSteps
            title="Outdoor Protection Strategies"
            steps={[
              'Check daily pollen counts (stay indoors on high pollen days)',
              'Shower and change clothes after being outside during pollen season',
              'Keep car and home windows closed during high pollen times',
              'Wear wraparound sunglasses to keep pollen out of eyes',
              'Exercise outdoors in early morning or after rain (lower pollen)',
              'Avoid mowing lawns or being around freshly cut grass',
              'Use saline nasal rinses after outdoor exposure',
            ]}
          />
        </div>
      </EnvironmentalSection>

      {/* Chemical Sensitivities Section */}
      <EnvironmentalSection
        icon={<Flame className="w-6 h-6" />}
        title="Chemical Sensitivities & VOCs"
        color="red"
        intro="Volatile Organic Compounds (VOCs) are invisible inflammatory triggers lurking everywhere."
      >
        <div className="space-y-6">
          <InfoCard
            title="Common Sources of VOCs"
            type="danger"
            items={[
              'Paints, varnishes, and sealants',
              'New furniture and pressed wood products',
              'Carpets and flooring',
              'Air fresheners and scented products',
              'Cleaning products',
              'Personal care products (perfumes, hairspray)',
              'Dry-cleaned clothes (perchloroethylene)',
              'Nail polish and remover',
            ]}
          />

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 p-2 rounded-lg mt-1">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xl text-gray-900 mb-2">Why VOCs Matter</h4>
                <p className="text-gray-700">
                  VOCs trigger inflammatory responses in your respiratory system, irritate your skin, and can cause systemic inflammation. For people with asthma, allergies, or eczema, they're particularly problematic. Some VOCs continue off-gassing for months or even years.
                </p>
              </div>
            </div>
          </div>

          <PersonalExperience
            color="red"
            text="Bought a new couch and within days was having asthma attacks. The off-gassing from the flame retardants and formaldehyde was intense. Had to return it and bought a certified organic cotton couch instead. Cost more, but my lungs are worth it. Now I research everything before bringing it into my home."
          />

          <ActionableSteps
            title="Reducing VOC Exposure"
            steps={[
              'Choose low-VOC or zero-VOC paints and finishes',
              'Let new furniture off-gas in garage/outdoors before bringing inside',
              'Look for Greenguard or GOTS certifications',
              'Avoid synthetic fragrances in all products',
              'Open windows regularly for ventilation (weather permitting)',
              'Choose solid wood over particle board when possible',
              'Use a HEPA air purifier with activated carbon filter',
              'Remove dry-cleaned clothes from plastic and air them out',
            ]}
          />
        </div>
      </EnvironmentalSection>

      {/* Key Takeaways */}
      <div className="mt-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 border-2 border-emerald-300">
        <h2 className="text-2xl text-gray-900 mb-6">Key Takeaways</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5">
            <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Quick Wins
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Get a HEPA air purifier for your bedroom</li>
              <li>• Switch to fragrance-free everything</li>
              <li>• Use allergen-proof bedding covers</li>
              <li>• Monitor and control humidity (40-50%)</li>
              <li>• Take lukewarm showers, not hot</li>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5">
            <h3 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              Biggest Offenders to Avoid
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Synthetic fragrances and air fresheners</li>
              <li>• High humidity (mold and dust mites)</li>
              <li>• Hot showers and extreme temperatures</li>
              <li>• VOCs from new furniture and products</li>
              <li>• High pollen days without protection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EnvironmentalSectionProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  intro: string;
  children: React.ReactNode;
}

function EnvironmentalSection({ icon, title, color, intro, children }: EnvironmentalSectionProps) {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-cyan-500',
    teal: 'from-teal-500 to-emerald-500',
    orange: 'from-orange-500 to-red-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-teal-500',
    red: 'from-red-500 to-orange-500',
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

interface InfoCardProps {
  title: string;
  type: 'success' | 'warning' | 'danger';
  items: string[];
}

function InfoCard({ title, type, items }: InfoCardProps) {
  const typeStyles = {
    success: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      itemBg: 'bg-white',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      itemBg: 'bg-white',
    },
    danger: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      itemBg: 'bg-white',
    },
  };

  const styles = typeStyles[type];

  return (
    <div className={`${styles.bg} border-2 ${styles.border} rounded-xl p-6`}>
      <h3 className="text-xl text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className={`${styles.itemBg} p-3 rounded-lg text-gray-700`}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PersonalExperienceProps {
  color: string;
  text: string;
}

function PersonalExperience({ color, text }: PersonalExperienceProps) {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-50 to-cyan-50 border-blue-200',
    teal: 'from-teal-50 to-emerald-50 border-teal-200',
    orange: 'from-orange-50 to-red-50 border-orange-200',
    purple: 'from-purple-50 to-pink-50 border-purple-200',
    green: 'from-green-50 to-teal-50 border-green-200',
    red: 'from-red-50 to-orange-50 border-red-200',
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

interface ActionableStepsProps {
  title: string;
  steps: string[];
}

function ActionableSteps({ title, steps }: ActionableStepsProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        {title}
      </h3>
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm">
              {index + 1}
            </span>
            <span className="text-gray-700 flex-1">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

interface SeasonalCardProps {
  season: string;
  triggers: string[];
}

function SeasonalCard({ season, triggers }: SeasonalCardProps) {
  return (
    <div className="bg-white border-2 border-green-200 rounded-xl p-5">
      <h4 className="text-lg text-gray-900 mb-3">{season}</h4>
      <ul className="space-y-2">
        {triggers.map((trigger, index) => (
          <li key={index} className="text-sm text-gray-700">
            • {trigger}
          </li>
        ))}
      </ul>
    </div>
  );
}