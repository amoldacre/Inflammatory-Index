import { Heart, Moon, Dumbbell, Brain, Clock, Coffee, Smile, Battery, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Lifestyle() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Lifestyle & Daily Habits
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Managing inflammation isn't just about what you eat or avoid—it's about how you live. Small daily choices compound into massive results over time.
        </p>
      </div>

      {/* Sleep Section */}
      <LifestyleSection
        icon={<Moon className="w-6 h-6" />}
        title="Sleep: Your Body's Reset Button"
        color="indigo"
        intro="Poor sleep is one of the fastest ways to trigger inflammation. During deep sleep, your body repairs damage and regulates immune function."
        image="https://images.unsplash.com/photo-1633893737773-af3bcb339e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMGJlZHJvb218ZW58MXx8fHwxNzY3MTMyOTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FactCard
              title="Why Sleep Matters"
              type="info"
              facts={[
                'Less than 7 hours increases inflammatory markers (CRP, IL-6)',
                'Poor sleep disrupts cortisol rhythms',
                'Sleep deprivation weakens skin barrier',
                'Triggers histamine release and allergy symptoms',
                'Impairs immune system regulation',
              ]}
            />

            <FactCard
              title="What Happens When You Sleep Well"
              type="success"
              facts={[
                'Inflammation markers drop significantly',
                'Skin barrier repairs itself',
                'Stress hormones normalize',
                'Immune system recalibrates',
                'Gut microbiome improves',
              ]}
            />
          </div>

          <PersonalStory
            color="indigo"
            text="I used to sleep 5-6 hours a night, thinking I was 'maximizing productivity.' My eczema was out of control and I was exhausted. Committed to 8 hours minimum—within two weeks, my skin started healing and energy returned. Sleep isn't lazy, it's essential medicine."
          />

          <OptimizationTips
            title="Sleep Optimization Protocol"
            tips={[
              {
                action: 'Set a consistent sleep schedule',
                detail: 'Same bedtime and wake time, even weekends. Your body craves rhythm.',
              },
              {
                action: 'Cool bedroom (60-67°F)',
                detail: 'Core body temperature needs to drop for deep sleep.',
              },
              {
                action: 'Complete darkness',
                detail: 'Even small amounts of light disrupt melatonin. Use blackout curtains or an eye mask.',
              },
              {
                action: 'No screens 1-2 hours before bed',
                detail: 'Blue light suppresses melatonin. Read a physical book instead.',
              },
              {
                action: 'Magnesium before bed',
                detail: 'Magnesium glycinate (300-400mg) helps relaxation and sleep quality.',
              },
              {
                action: 'Morning sunlight exposure',
                detail: 'Get outside within 30 minutes of waking to set your circadian rhythm.',
              },
            ]}
          />
        </div>
      </LifestyleSection>

      {/* Stress Management Section */}
      <LifestyleSection
        icon={<Brain className="w-6 h-6" />}
        title="Stress & The Inflammation Connection"
        color="purple"
        intro="Chronic stress is gasoline on the inflammation fire. When you're stressed, your body stays in fight-or-flight mode, pumping out cortisol and inflammatory cytokines."
        image="https://images.unsplash.com/photo-1603166868295-4ae2cba14063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3N8ZW58MXx8fHwxNzY3MDcxMTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 className="text-xl text-gray-900 mb-4">The Stress-Inflammation Cycle</h3>
            <div className="space-y-3">
              <StressStep number={1} text="You experience stress (work deadline, relationship conflict, financial worry)" />
              <StressStep number={2} text="Body releases cortisol and adrenaline" />
              <StressStep number={3} text="Immune system shifts into inflammatory mode" />
              <StressStep number={4} text="Skin flares, asthma worsens, gut issues appear" />
              <StressStep number={5} text="Symptoms cause more stress, cycle repeats" />
            </div>
          </div>

          <FactCard
            title="Stress Reduction Techniques That Actually Work"
            type="success"
            facts={[
              'Deep breathing (4-7-8 technique): Instantly calms nervous system',
              'Meditation (even 5 minutes): Reduces inflammatory markers measurably',
              'Nature exposure: 20 minutes outside lowers cortisol by 21%',
              'Journaling: Processing emotions reduces inflammation',
              'Exercise: Burns off stress hormones (but don\'t overdo it)',
              'Social connection: Strong relationships = lower inflammation',
            ]}
          />

          <PersonalStory
            color="purple"
            text="Had a brutal work period—90-hour weeks, constant deadlines. My eczema exploded across my face and hands. Started doing 10-minute morning meditations using Headspace. Didn't believe it would work, but within 3 weeks my skin calmed down noticeably. Now it's non-negotiable in my routine."
          />

          <OptimizationTips
            title="Daily Stress Management Toolkit"
            tips={[
              {
                action: 'Morning meditation (5-20 minutes)',
                detail: 'Sets a calm baseline for the day. Apps like Headspace, Calm, or Insight Timer.',
              },
              {
                action: 'Box breathing during stress spikes',
                detail: 'Inhale 4 counts, hold 4, exhale 4, hold 4. Repeat 4 times.',
              },
              {
                action: 'Daily nature walk',
                detail: 'Even 15 minutes outside without your phone. Game changer.',
              },
              {
                action: 'Set boundaries',
                detail: 'Say no to things that drain you. Your health is more important.',
              },
              {
                action: 'Gratitude practice',
                detail: 'Write 3 things you\'re grateful for each night. Rewires your brain.',
              },
            ]}
          />
        </div>
      </LifestyleSection>

      {/* Exercise Section */}
      <LifestyleSection
        icon={<Dumbbell className="w-6 h-6" />}
        title="Movement: The Right Kind Matters"
        color="orange"
        intro="Exercise can be anti-inflammatory or pro-inflammatory depending on intensity, duration, and recovery. The goal is movement that helps, not hurts."
        image="https://images.unsplash.com/photo-1641971215228-c677f3a28cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY3MDQ1ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FactCard
              title="Anti-Inflammatory Exercise ✓"
              type="success"
              facts={[
                'Walking (30-60 minutes, moderate pace)',
                'Yoga and stretching',
                'Swimming (if chlorine doesn\'t irritate you)',
                'Pilates',
                'Cycling at conversational pace',
                'Strength training (moderate intensity, 2-3x/week)',
              ]}
            />

            <FactCard
              title="Pro-Inflammatory Exercise ✗"
              type="danger"
              facts={[
                'Overtraining / excessive cardio',
                'HIIT workouts daily (too much cortisol)',
                'Running on pavement without recovery',
                'Working out when you\'re already stressed',
                'Exercise in high pollution or high pollen',
                'Not resting between hard sessions',
              ]}
            />
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
            <h3 className="text-xl text-gray-900 mb-3">The Sweet Spot</h3>
            <p className="text-gray-700 mb-4">
              Aim for 150-200 minutes of moderate activity per week. This means you can hold a conversation while moving. You should feel energized after, not completely destroyed. If you\'re exhausted or sore for days, you\'re overdoing it.
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-800">
                <strong>Sample Week:</strong> Walk 30 min (5x), yoga (2x), strength training (2x), rest days (2x)
              </p>
            </div>
          </div>

          <PersonalStory
            color="orange"
            text="Used to do intense CrossFit 6 days a week. Thought I was 'crushing it.' My body was constantly inflamed—joints ached, skin was angry, always getting sick. Switched to walking, yoga, and lighter lifting. Lost the ego, gained my health back. Now I feel better at 35 than I did at 25."
          />

          <OptimizationTips
            title="Exercise Guidelines for Sensitive Bodies"
            tips={[
              {
                action: 'Start slow and build gradually',
                detail: 'Don\'t go from zero to hero. Your immune system needs time to adapt.',
              },
              {
                action: 'Prioritize recovery',
                detail: 'Rest days are when adaptation happens. Sleep, hydrate, eat well.',
              },
              {
                action: 'Listen to your body',
                detail: 'Tired? Rest. Energized? Move. Joint pain? Back off.',
              },
              {
                action: 'Exercise outdoors (when safe)',
                detail: 'Nature + movement = double anti-inflammatory benefit. Check AQI first.',
              },
              {
                action: 'Shower immediately after',
                detail: 'Removes sweat that can irritate eczema. Use lukewarm water.',
              },
            ]}
          />
        </div>
      </LifestyleSection>

      {/* Daily Routine Section */}
      <LifestyleSection
        icon={<Clock className="w-6 h-6" />}
        title="Building an Anti-Inflammatory Routine"
        color="teal"
        intro="Consistency beats intensity. A solid daily routine reduces decision fatigue and creates habits that support healing."
      >
        <div className="space-y-6">
          <div className="grid gap-4">
            <RoutineBlock
              time="Morning (6-9am)"
              color="yellow"
              activities={[
                '☀️ Get sunlight within 30 min of waking (circadian rhythm)',
                '💧 Drink 16oz water with pinch of sea salt (rehydrate)',
                '🧘 5-10 min meditation or breathwork',
                '🥣 Anti-inflammatory breakfast (oatmeal, berries, etc.)',
                '💊 Supplements (if you take any)',
              ]}
            />

            <RoutineBlock
              time="Midday (12-2pm)"
              color="orange"
              activities={[
                '🥗 Nutrient-dense lunch (protein, veggies, healthy fats)',
                '🚶 10-15 min walk after eating (aids digestion, lowers blood sugar)',
                '💻 Take screen breaks (eye strain = stress)',
              ]}
            />

            <RoutineBlock
              time="Evening (5-9pm)"
              color="purple"
              activities={[
                '🏃 Movement session (walk, yoga, workout)',
                '🥘 Early dinner (finish 3 hours before bed)',
                '📱 Screen curfew (2 hours before bed)',
                '🛁 Wind-down routine (warm shower, reading, stretching)',
                '😴 In bed by 10pm (consistent schedule)',
              ]}
            />
          </div>

          <PersonalStory
            color="teal"
            text="I used to wing every day—sleep at random times, eat whenever, no structure. My body was confused and inflamed. Created a simple routine and stuck to it for 30 days. The consistency alone dropped my inflammation noticeably. Now my body knows what to expect and responds beautifully."
          />
        </div>
      </LifestyleSection>

      {/* Habits Section */}
      <LifestyleSection
        icon={<Sparkles className="w-6 h-6" />}
        title="Small Habits, Big Impact"
        color="green"
        intro="You don't need to overhaul your entire life overnight. Small, consistent changes compound into transformative results."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <HabitCard
              icon={<Coffee className="w-5 h-5" />}
              title="Hydration"
              good="Drink half your body weight in ounces of water daily. Add electrolytes if you sweat."
              bad="Relying on coffee, energy drinks, or sugary beverages. Dehydration = inflammation."
              color="blue"
            />

            <HabitCard
              icon={<Smile className="w-5 h-5" />}
              title="Social Connection"
              good="Regular quality time with people you love. Loneliness is inflammatory."
              bad="Isolating yourself or spending time with people who stress you out."
              color="pink"
            />

            <HabitCard
              icon={<Battery className="w-5 h-5" />}
              title="Energy Management"
              good="Protect your energy. Say no to draining commitments. Rest when tired."
              bad="Saying yes to everything. Running on empty. Chronic exhaustion."
              color="green"
            />

            <HabitCard
              icon={<Heart className="w-5 h-5" />}
              title="Self-Compassion"
              good="Be kind to yourself when you slip up. Progress isn\'t linear."
              bad="All-or-nothing thinking. Beating yourself up. Perfectionism."
              color="red"
            />
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200">
            <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              Start With Just One Thing
            </h3>
            <p className="text-gray-700 mb-4">
              Don\'t try to implement everything at once—you\'ll burn out. Pick ONE habit from this page and do it consistently for 30 days. Once it\'s automatic, add another.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🌅</div>
                <p className="text-sm text-gray-700">Morning sunlight</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">😴</div>
                <p className="text-sm text-gray-700">8 hours sleep</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧘</div>
                <p className="text-sm text-gray-700">5 min meditation</p>
              </div>
            </div>
          </div>
        </div>
      </LifestyleSection>

      {/* Key Takeaways */}
      <div className="mt-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border-2 border-indigo-300">
        <h2 className="text-2xl text-gray-900 mb-6">The Foundation: Sleep, Stress, Movement</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <TakeawayCard
            icon={<Moon className="w-6 h-6" />}
            title="Sleep"
            points={['7-9 hours nightly', 'Consistent schedule', 'Cool, dark room']}
            color="indigo"
          />
          <TakeawayCard
            icon={<Brain className="w-6 h-6" />}
            title="Stress"
            points={['Daily meditation', 'Nature exposure', 'Set boundaries']}
            color="purple"
          />
          <TakeawayCard
            icon={<Dumbbell className="w-6 h-6" />}
            title="Movement"
            points={['Moderate exercise', 'Prioritize recovery', 'Listen to body']}
            color="orange"
          />
        </div>
      </div>
    </div>
  );
}

interface LifestyleSectionProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  intro: string;
  image?: string;
  children: React.ReactNode;
}

function LifestyleSection({ icon, title, color, intro, image, children }: LifestyleSectionProps) {
  const colorMap: Record<string, string> = {
    indigo: 'from-indigo-500 to-purple-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500',
    teal: 'from-teal-500 to-emerald-500',
    green: 'from-green-500 to-emerald-500',
  };

  return (
    <section className="mb-16">
      {image && (
        <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-48 sm:h-64 object-cover"
          />
        </div>
      )}
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

interface FactCardProps {
  title: string;
  type: 'success' | 'danger' | 'info';
  facts: string[];
}

function FactCard({ title, type, facts }: FactCardProps) {
  const typeStyles = {
    success: 'bg-emerald-50 border-emerald-200',
    danger: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
  };

  return (
    <div className={`${typeStyles[type]} border-2 rounded-xl p-6`}>
      <h3 className="text-xl text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {facts.map((fact, index) => (
          <li key={index} className="bg-white p-3 rounded-lg text-gray-700">
            • {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PersonalStoryProps {
  color: string;
  text: string;
}

function PersonalStory({ color, text }: PersonalStoryProps) {
  const colorMap: Record<string, string> = {
    indigo: 'from-indigo-50 to-purple-50 border-indigo-200',
    purple: 'from-purple-50 to-pink-50 border-purple-200',
    orange: 'from-orange-50 to-red-50 border-orange-200',
    teal: 'from-teal-50 to-emerald-50 border-teal-200',
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} border-2 rounded-xl p-6 italic`}>
      <p className="text-gray-700">
        <span className="text-2xl text-gray-400 mr-1">"</span>
        {text}
        <span className="text-2xl text-gray-400 ml-1">"</span>
      </p>
      <p className="text-sm text-gray-600 mt-2">— My Journey</p>
    </div>
  );
}

interface OptimizationTipsProps {
  title: string;
  tips: { action: string; detail: string }[];
}

function OptimizationTips({ title, tips }: OptimizationTipsProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        {title}
      </h3>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm">
              {index + 1}
            </span>
            <div className="flex-1">
              <p className="text-gray-900">{tip.action}</p>
              <p className="text-sm text-gray-600 mt-1">{tip.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface StressStepProps {
  number: number;
  text: string;
}

function StressStep({ number, text }: StressStepProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
        {number}
      </div>
      <p className="text-gray-700 flex-1">{text}</p>
    </div>
  );
}

interface RoutineBlockProps {
  time: string;
  color: string;
  activities: string[];
}

function RoutineBlock({ time, color, activities }: RoutineBlockProps) {
  const colorMap: Record<string, string> = {
    yellow: 'from-yellow-400 to-orange-400',
    orange: 'from-orange-400 to-red-400',
    purple: 'from-purple-400 to-indigo-400',
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${colorMap[color]} text-white rounded-lg mb-4`}>
        {time}
      </div>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-700 bg-gray-50 p-3 rounded-lg">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface HabitCardProps {
  icon: React.ReactNode;
  title: string;
  good: string;
  bad: string;
  color: string;
}

function HabitCard({ icon, title, good, bad, color }: HabitCardProps) {
  const colorMap: Record<string, string> = {
    blue: 'text-blue-600 bg-blue-100',
    pink: 'text-pink-600 bg-pink-100',
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className={`p-2 rounded-lg ${colorMap[color]}`}>
          {icon}
        </div>
        <h3 className="text-lg text-gray-900">{title}</h3>
      </div>
      <div className="space-y-3">
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">{good}</p>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <div className="flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">{bad}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TakeawayCardProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
  color: string;
}

function TakeawayCard({ icon, title, points, color }: TakeawayCardProps) {
  const colorMap: Record<string, string> = {
    indigo: 'bg-indigo-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className={`${colorMap[color]} p-2 rounded-lg text-white`}>
          {icon}
        </div>
        <h3 className="text-lg text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-sm text-gray-700">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
