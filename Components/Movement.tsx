import { Dumbbell, Heart, TrendingUp, AlertTriangle, CheckCircle2, XCircle, Waves, Footprints, Timer, Battery } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Movement() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl text-gray-900 mb-4">
          Movement & Exercise
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Exercise can be your best medicine or your worst enemy—it all depends on the type, intensity, and recovery. Let's find the sweet spot that heals instead of hurts.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760879946121-893199733851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwb3V0ZG9vciUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzEzMzU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Outdoor walking exercise"
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>

      {/* The Problem Section */}
      <MovementSection
        icon={<AlertTriangle className="w-6 h-6" />}
        title="The Exercise Paradox"
        color="orange"
        intro="Too much exercise or the wrong kind can spike inflammation. Too little leads to stiffness, weight gain, and more inflammation. Balance is everything."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ProblemCard
              type="overtraining"
              title="Overtraining = Inflammation"
              effects={[
                'Constant muscle soreness and joint pain',
                'Elevated cortisol levels',
                'Weakened immune system (getting sick often)',
                'Skin flares and digestive issues',
                'Poor sleep quality',
                'Chronic fatigue and burnout',
              ]}
            />

            <ProblemCard
              type="sedentary"
              title="Too Little Movement = Inflammation"
              effects={[
                'Muscle loss and joint stiffness',
                'Weight gain and insulin resistance',
                'Poor circulation and lymphatic drainage',
                'Increased inflammatory markers',
                'Mental health decline',
                'Loss of functional capacity',
              ]}
            />
          </div>

          <PersonalStory
            color="orange"
            text="I was doing CrossFit 6 days a week, thinking more was better. My body was constantly inflamed—joints hurt, skin flared up, always tired. Blood tests showed high CRP and cortisol. Doctor said I was 'training myself into the ground.' Cut back to 3-4 moderate sessions per week and added walking. Inflammation dropped dramatically within a month."
          />

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
            <h3 className="text-xl text-gray-900 mb-3">The Sweet Spot</h3>
            <p className="text-gray-700 mb-3">
              <strong>150-200 minutes of moderate activity per week.</strong> Moderate means you can hold a conversation while moving. You should feel energized after exercise, not destroyed. If you're exhausted for days, you're overdoing it.
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-800">
                Example: 30-minute walk (5x/week) + yoga (2x/week) + light strength training (2x/week) = Perfect
              </p>
            </div>
          </div>
        </div>
      </MovementSection>

      {/* Anti-Inflammatory Exercise Section */}
      <MovementSection
        icon={<CheckCircle2 className="w-6 h-6" />}
        title="Anti-Inflammatory Exercise (Do These)"
        color="green"
        intro="These activities reduce inflammation, improve circulation, support immune function, and help your body heal."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ExerciseCard
              title="Walking"
              emoji="🚶"
              image="https://images.unsplash.com/photo-1760879946121-893199733851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwb3V0ZG9vciUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NzEzMzU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              benefits={[
                'Lowers inflammatory markers (CRP, IL-6)',
                'Improves circulation and lymphatic drainage',
                'Reduces stress hormones',
                'Supports joint health without impact',
                'Can be done daily without overtraining',
              ]}
              howTo="30-60 minutes daily at a comfortable pace. Walk outside for bonus vitamin D and nature benefits. After meals to lower blood sugar spikes."
              intensity="Low to Moderate"
            />

            <ExerciseCard
              title="Yoga"
              emoji="🧘"
              image="https://images.unsplash.com/photo-1641971215228-c677f3a28cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzY3MDQ1ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              benefits={[
                'Reduces cortisol and inflammation',
                'Improves flexibility and mobility',
                'Activates parasympathetic nervous system',
                'Mindfulness reduces stress-induced inflammation',
                'Gentle on joints and connective tissue',
              ]}
              howTo="2-5 times per week, 20-60 minutes. Start with gentle/restorative styles (Hatha, Yin). Avoid hot yoga if you have skin sensitivity."
              intensity="Low to Moderate"
            />

            <ExerciseCard
              title="Swimming"
              emoji="🏊"
              image="https://images.unsplash.com/photo-1558617320-e695f0d420de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNjcxMzM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              benefits={[
                'Zero impact on joints',
                'Full-body workout without stress',
                'Improves cardiovascular health',
                'Water pressure aids lymphatic drainage',
                'Cooling effect prevents overheating',
              ]}
              howTo="2-3 times per week, 20-45 minutes. If chlorine irritates your skin/lungs, try saltwater pools or open water. Shower immediately after."
              intensity="Low to Moderate"
            />

            <ExerciseCard
              title="Strength Training (Moderate)"
              emoji="💪"
              image="https://images.unsplash.com/photo-1591291621164-2c6367723315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMHRyYWluaW5nJTIwd2VpZ2h0c3xlbnwxfHx8fDE3NjcwODM1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              benefits={[
                'Builds muscle, which improves insulin sensitivity',
                'Increases metabolic rate',
                'Strengthens bones and connective tissue',
                'Releases anti-inflammatory myokines',
                'Prevents muscle loss with age',
              ]}
              howTo="2-3 times per week, 30-45 minutes. Focus on compound movements. Use moderate weights you can control. Rest 48 hours between sessions."
              intensity="Moderate"
            />

            <ExerciseCard
              title="Cycling"
              emoji="🚴"
              benefits={[
                'Low-impact cardiovascular exercise',
                'Builds leg strength without joint stress',
                'Can be done outdoors or indoors',
                'Improves circulation and heart health',
                'Easy to control intensity',
              ]}
              howTo="2-4 times per week, 30-60 minutes. Keep pace conversational. Avoid high-intensity intervals if highly inflamed."
              intensity="Low to Moderate"
            />

            <ExerciseCard
              title="Pilates"
              emoji="🤸"
              benefits={[
                'Core strength and stability',
                'Improves posture and alignment',
                'Low-impact, controlled movements',
                'Mind-body connection reduces stress',
                'Enhances flexibility and balance',
              ]}
              howTo="2-3 times per week, 30-60 minutes. Mat or reformer classes both work. Focus on breath and form."
              intensity="Low to Moderate"
            />

            <ExerciseCard
              title="Tai Chi / Qigong"
              emoji="☯️"
              benefits={[
                'Gentle flowing movements',
                'Reduces stress and cortisol',
                'Improves balance and coordination',
                'Mindfulness component',
                'Suitable for all fitness levels',
              ]}
              howTo="3-5 times per week, 20-40 minutes. Perfect for mornings or evenings. Find local classes or follow videos."
              intensity="Low"
            />

            <ExerciseCard
              title="Stretching / Mobility Work"
              emoji="🤸‍♀️"
              image="https://images.unsplash.com/photo-1607909599990-e2c4778e546b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJldGNoaW5nJTIwZmxleGliaWxpdHl8ZW58MXx8fHwxNzY3MDcxNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              benefits={[
                'Reduces muscle tension and pain',
                'Improves range of motion',
                'Enhances recovery between workouts',
                'Activates parasympathetic system',
                'Can be done daily',
              ]}
              howTo="Daily, 10-20 minutes. Focus on tight areas. Hold stretches 30-60 seconds. Do after workouts or before bed."
              intensity="Very Low"
            />
          </div>

          <PersonalStory
            color="green"
            text="Switched from intense workouts to daily walks and yoga. Thought I'd lose all my fitness. Instead, my body composition improved, energy skyrocketed, and inflammation markers dropped 60%. Sometimes less really is more. Now I walk 10,000 steps daily and do yoga 4x/week—best shape of my life."
          />
        </div>
      </MovementSection>

      {/* Pro-Inflammatory Exercise Section */}
      <MovementSection
        icon={<XCircle className="w-6 h-6" />}
        title="Pro-Inflammatory Exercise (Minimize These)"
        color="red"
        intro="These activities can spike inflammation when overdone or done during flare-ups. Not saying never—just be strategic."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <AvoidExerciseCard
              title="Excessive HIIT"
              emoji="⚡"
              why="Short bursts at max effort spike cortisol dramatically. Great occasionally, but daily HIIT = chronic inflammation."
              redFlags={[
                'Doing HIIT 5+ days per week',
                'Always pushing to complete failure',
                'No recovery between sessions',
                'Doing HIIT while already stressed',
              ]}
              betterApproach="1-2 HIIT sessions max per week. Only when well-rested. Keep sessions under 20 minutes."
            />

            <AvoidExerciseCard
              title="Long-Distance Running"
              emoji="🏃"
              why="Repetitive impact, elevated cortisol for hours, often leads to overtraining injuries and immune suppression."
              redFlags={[
                'Running marathons or half-marathons regularly',
                'Running daily without rest days',
                'Ignoring joint pain to hit mileage goals',
                'Running in high pollution or allergens',
              ]}
              betterApproach="Limit to 2-3 runs per week, 20-40 minutes. Mix in walking intervals. Run on soft surfaces."
            />

            <AvoidExerciseCard
              title="Heavy CrossFit / Bootcamps"
              emoji="🏋️"
              why="High volume + high intensity + competitive environment = inflammation overload. Great if you're healthy, risky if you're healing."
              redFlags={[
                'Daily WODs (workouts of the day)',
                'Sacrificing form to beat the clock',
                'Constantly sore and fatigued',
                'Skin flares or immune issues after workouts',
              ]}
              betterApproach="2-3 sessions per week with scaled intensity. Focus on strength, not speed. Take full rest days."
            />

            <AvoidExerciseCard
              title="Hot Yoga / Hot Pilates"
              emoji="🔥"
              why="Extreme heat can trigger histamine release, dehydration, and stress response. Great for some, terrible for eczema/sensitive skin."
              redFlags={[
                'Skin flares after hot yoga',
                'Excessive sweating irritates eczema',
                'Feeling dizzy or nauseous',
                'Dehydration issues',
              ]}
              betterApproach="Stick to regular temperature yoga. If you love heat, limit to 1x/week and hydrate heavily."
            />

            <AvoidExerciseCard
              title="Overtraining in General"
              emoji="🚫"
              why="Your body doesn't distinguish types—too much volume of ANY exercise = chronic inflammation."
              redFlags={[
                'Never taking rest days',
                'Multiple workouts per day',
                'Always sore or exhausted',
                'Performance declining despite training hard',
              ]}
              betterApproach="Rest days are when you get stronger. Take 2-3 complete rest days per week minimum."
            />

            <AvoidExerciseCard
              title="Exercise During Flare-Ups"
              emoji="🤕"
              why="When your body is already inflamed, intense exercise makes it worse. Time to rest and recover."
              redFlags={[
                'Pushing through severe eczema flares',
                'Working out during asthma exacerbations',
                'Exercising when sick or injured',
                'Ignoring your body\'s signals',
              ]}
              betterApproach="Gentle walking and stretching only. Prioritize sleep and stress reduction. Resume when symptoms calm."
            />
          </div>

          <PersonalStory
            color="red"
            text="Used to think 'no pain, no gain.' Pushed through eczema flares, asthma wheezing, joint pain. My inflammation just got worse. Finally learned to listen to my body—when it says rest, I rest. When it says move gently, I walk or stretch. Stopped trying to be a warrior and started being smart. Game changer."
          />
        </div>
      </MovementSection>

      {/* Weekly Plan Section */}
      <MovementSection
        icon={<Timer className="w-6 h-6" />}
        title="Sample Weekly Movement Plans"
        color="blue"
        intro="Choose a plan based on your current inflammation level and fitness. You can always progress to the next level as you heal."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <WeeklyPlanCard
              level="Beginner / High Inflammation"
              color="blue"
              schedule={[
                { day: 'Monday', activity: '20-min gentle walk' },
                { day: 'Tuesday', activity: '15-min stretching' },
                { day: 'Wednesday', activity: '20-min walk' },
                { day: 'Thursday', activity: 'Rest or gentle yoga (20 min)' },
                { day: 'Friday', activity: '20-min walk' },
                { day: 'Saturday', activity: '30-min walk or swim' },
                { day: 'Sunday', activity: 'Complete rest' },
              ]}
              notes="Focus on gentle movement. Build consistency before intensity."
            />

            <WeeklyPlanCard
              level="Intermediate / Moderate Inflammation"
              color="teal"
              schedule={[
                { day: 'Monday', activity: '40-min walk + stretching' },
                { day: 'Tuesday', activity: '30-min yoga or Pilates' },
                { day: 'Wednesday', activity: '30-min strength training' },
                { day: 'Thursday', activity: '30-min swim or cycle' },
                { day: 'Friday', activity: 'Rest or gentle walk' },
                { day: 'Saturday', activity: '45-min yoga + walk' },
                { day: 'Sunday', activity: 'Complete rest' },
              ]}
              notes="Mix of cardio, strength, and flexibility. Listen to body signals."
            />

            <WeeklyPlanCard
              level="Advanced / Low Inflammation"
              color="green"
              schedule={[
                { day: 'Monday', activity: '45-min strength training' },
                { day: 'Tuesday', activity: '30-min run or cycle' },
                { day: 'Wednesday', activity: '60-min yoga or Pilates' },
                { day: 'Thursday', activity: '40-min strength training' },
                { day: 'Friday', activity: '30-min swim or HIIT' },
                { day: 'Saturday', activity: '60-min hike or long walk' },
                { day: 'Sunday', activity: 'Rest or gentle stretching' },
              ]}
              notes="Can handle more intensity. Still prioritize recovery and sleep."
            />
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <Battery className="w-6 h-6 text-blue-600" />
              The Energy Check
            </h3>
            <p className="text-gray-700 mb-4">
              Before every workout, ask yourself: <strong>"Do I have the energy for this?"</strong>
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-emerald-100 p-4 rounded-lg border border-emerald-300">
                <p className="text-emerald-900 mb-2">✓ If you feel energized:</p>
                <p className="text-sm text-gray-700">Go ahead with your planned workout. Your body is ready.</p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <p className="text-red-900 mb-2">✗ If you feel tired/depleted:</p>
                <p className="text-sm text-gray-700">Switch to gentle walking or stretching. Rest is productive.</p>
              </div>
            </div>
          </div>
        </div>
      </MovementSection>

      {/* Recovery Section */}
      <MovementSection
        icon={<Heart className="w-6 h-6" />}
        title="Recovery: The Secret Weapon"
        color="purple"
        intro="You don't get stronger during workouts—you get stronger during recovery. This is where the magic happens."
      >
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <RecoveryCard
              title="Sleep"
              emoji="😴"
              importance="Critical - 7-9 hours nightly"
              tips={[
                'This is when muscle repair and growth happen',
                'Growth hormone peaks during deep sleep',
                'Inflammation markers drop overnight',
                'Poor sleep = poor recovery = injury risk',
              ]}
            />

            <RecoveryCard
              title="Nutrition"
              emoji="🥗"
              importance="Critical - Fuel recovery properly"
              tips={[
                'Protein for muscle repair (0.8-1g per lb bodyweight)',
                'Omega-3s reduce post-exercise inflammation',
                'Antioxidant-rich foods speed recovery',
                'Hydrate well with electrolytes',
              ]}
            />

            <RecoveryCard
              title="Rest Days"
              emoji="🛋️"
              importance="Essential - 2-3 per week minimum"
              tips={[
                'Complete rest = no structured exercise',
                'Light walking and stretching are OK',
                'Your muscles rebuild on rest days',
                'Active recovery ≠ rest day',
              ]}
            />

            <RecoveryCard
              title="Stress Management"
              emoji="🧘"
              importance="Critical - High stress blocks recovery"
              tips={[
                'Meditation, breathwork, time in nature',
                'If you're mentally stressed, go easier on workouts',
                'Your body can't distinguish workout stress from life stress',
                'Total stress load matters for inflammation',
              ]}
            />

            <RecoveryCard
              title="Foam Rolling / Massage"
              emoji="💆"
              importance="Helpful - Aids muscle recovery"
              tips={[
                'Improves circulation and lymphatic flow',
                'Reduces muscle tension and soreness',
                'Do 10-15 min after workouts',
                'Focus on tight, sore areas',
              ]}
            />

            <RecoveryCard
              title="Ice Baths / Contrast Therapy"
              emoji="🧊"
              importance="Optional - Can reduce inflammation"
              tips={[
                'Cold exposure after intense exercise',
                'Reduces swelling and soreness',
                'Contrast (hot/cold) improves circulation',
                'Not necessary but can help recovery',
              ]}
            />
          </div>

          <PersonalStory
            color="purple"
            text="Used to train 6 days a week with one 'active recovery' day (which was basically another workout). Never truly rested. Started taking 2 complete rest days per week—just walking, reading, sleeping. My strength went UP, body composition improved, and inflammation dropped. Rest isn't weakness, it's when you actually get the results."
          />
        </div>
      </MovementSection>

      {/* Key Principles Section */}
      <div className="mt-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border-2 border-indigo-300">
        <h2 className="text-2xl text-gray-900 mb-6 flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-indigo-600" />
          The 5 Golden Rules of Anti-Inflammatory Exercise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <GoldenRuleCard
            number={1}
            title="Consistency > Intensity"
            description="Daily gentle movement beats occasional intense workouts. Build a sustainable routine you can maintain for years."
          />
          <GoldenRuleCard
            number={2}
            title="Listen to Your Body"
            description="Pain, fatigue, and flare-ups are signals to back off. Pushing through makes inflammation worse."
          />
          <GoldenRuleCard
            number={3}
            title="Prioritize Recovery"
            description="Sleep, rest days, and stress management are non-negotiable. This is where healing happens."
          />
          <GoldenRuleCard
            number={4}
            title="Movement Should Energize, Not Exhaust"
            description="If you're destroyed after every workout, you're overdoing it. Aim to feel better after exercise, not worse."
          />
          <GoldenRuleCard
            number={5}
            title="Progress Slowly"
            description="Add 10% volume per week maximum. Going too fast = injury and inflammation. Patience wins."
          />
        </div>
      </div>
    </div>
  );
}

interface MovementSectionProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  intro: string;
  children: React.ReactNode;
}

function MovementSection({ icon, title, color, intro, children }: MovementSectionProps) {
  const colorMap: Record<string, string> = {
    orange: 'from-orange-500 to-red-500',
    green: 'from-green-500 to-emerald-500',
    red: 'from-red-500 to-pink-500',
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

interface ProblemCardProps {
  type: 'overtraining' | 'sedentary';
  title: string;
  effects: string[];
}

function ProblemCard({ type, title, effects }: ProblemCardProps) {
  const bgColor = type === 'overtraining' ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200';

  return (
    <div className={`${bgColor} border-2 rounded-xl p-6`}>
      <h3 className="text-xl text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {effects.map((effect, index) => (
          <li key={index} className="bg-white p-3 rounded-lg text-gray-700 flex items-start gap-2">
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <span>{effect}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ExerciseCardProps {
  title: string;
  emoji: string;
  image?: string;
  benefits: string[];
  howTo: string;
  intensity: string;
}

function ExerciseCard({ title, emoji, image, benefits, howTo, intensity }: ExerciseCardProps) {
  return (
    <div className="bg-white border-2 border-emerald-200 rounded-xl overflow-hidden">
      {image && (
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-32 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          {title}
        </h3>
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
            {intensity}
          </span>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Benefits:</p>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-gray-700 bg-emerald-50 p-2 rounded flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>How to:</strong> {howTo}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AvoidExerciseCardProps {
  title: string;
  emoji: string;
  why: string;
  redFlags: string[];
  betterApproach: string;
}

function AvoidExerciseCard({ title, emoji, why, redFlags, betterApproach }: AvoidExerciseCardProps) {
  return (
    <div className="bg-white border-2 border-red-200 rounded-xl p-6">
      <h3 className="text-xl text-gray-900 mb-3 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      <div className="bg-red-50 p-3 rounded-lg mb-3">
        <p className="text-sm text-gray-700">
          <strong>Why it can be problematic:</strong> {why}
        </p>
      </div>
      <div className="mb-3">
        <p className="text-sm text-gray-600 mb-2">Red flags:</p>
        <ul className="space-y-1">
          {redFlags.map((flag, index) => (
            <li key={index} className="text-sm text-gray-700 bg-red-50 p-2 rounded flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <span>{flag}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong className="text-emerald-700">✓ Better approach:</strong> {betterApproach}
        </p>
      </div>
    </div>
  );
}

interface PersonalStoryProps {
  color: string;
  text: string;
}

function PersonalStory({ color, text }: PersonalStoryProps) {
  const colorMap: Record<string, string> = {
    orange: 'from-orange-50 to-red-50 border-orange-200',
    green: 'from-green-50 to-emerald-50 border-green-200',
    red: 'from-red-50 to-pink-50 border-red-200',
    purple: 'from-purple-50 to-pink-50 border-purple-200',
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

interface WeeklyPlanCardProps {
  level: string;
  color: string;
  schedule: { day: string; activity: string }[];
  notes: string;
}

function WeeklyPlanCard({ level, color, schedule, notes }: WeeklyPlanCardProps) {
  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-cyan-500',
    teal: 'from-teal-500 to-emerald-500',
    green: 'from-green-500 to-lime-500',
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden">
      <div className={`bg-gradient-to-r ${colorMap[color]} p-4 text-white`}>
        <h3 className="text-lg">{level}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2 mb-4">
          {schedule.map((item, index) => (
            <li key={index} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-900">{item.day}</p>
              <p className="text-sm text-gray-600">{item.activity}</p>
            </li>
          ))}
        </ul>
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
          <p className="text-sm text-gray-700">{notes}</p>
        </div>
      </div>
    </div>
  );
}

interface RecoveryCardProps {
  title: string;
  emoji: string;
  importance: string;
  tips: string[];
}

function RecoveryCard({ title, emoji, importance, tips }: RecoveryCardProps) {
  return (
    <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
      <h3 className="text-xl text-gray-900 mb-2 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      <div className="mb-3">
        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
          {importance}
        </span>
      </div>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-sm text-gray-700 bg-purple-50 p-2 rounded">
            • {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface GoldenRuleCardProps {
  number: number;
  title: string;
  description: string;
}

function GoldenRuleCard({ number, title, description }: GoldenRuleCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
          {number}
        </div>
        <div>
          <h3 className="text-lg text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}