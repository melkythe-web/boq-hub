const plans = [
  {
    name: 'Free',
    price: 'Rp 0',
    description: 'Perfect for exploring BOQ Hub features.',
    features: [
      'Basic material database',
      'Limited estimator access',
      'Community supplier access',
    ],
  },
  {
    name: 'Professional',
    price: 'Rp 150.000/year',
    description: 'Best for contractors and developers.',
    features: [
      'Full material database',
      'Advanced estimator engine',
      'Project saving',
      'Supplier management',
      'Priority updates',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large construction companies.',
    features: [
      'Team collaboration',
      'Multi-project dashboard',
      'Enterprise support',
      'Custom integration',
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black tracking-tight">
            Pricing Plans
          </h1>

          <p className="text-xl text-gray-500 mt-5 max-w-3xl mx-auto">
            Flexible plans for contractors, developers, and construction teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[36px] p-8 border transition hover:shadow-2xl ${
                plan.name === 'Professional'
                  ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white shadow-2xl scale-[1.02]'
                  : 'bg-white border-gray-100'
              }`}
            >
              <h2 className="text-3xl font-black">
                {plan.name}
              </h2>

              <h3 className="text-5xl font-black mt-6">
                {plan.price}
              </h3>

              <p className={`mt-5 leading-relaxed ${
                plan.name === 'Professional'
                  ? 'text-white/80'
                  : 'text-gray-500'
              }`}>
                {plan.description}
              </p>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl px-4 py-3 ${
                      plan.name === 'Professional'
                        ? 'bg-white/10'
                        : 'bg-gray-50'
                    }`}
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full mt-10 py-4 rounded-2xl font-black text-lg transition ${
                  plan.name === 'Professional'
                    ? 'bg-white text-black hover:scale-[1.02]'
                    : 'bg-black text-white hover:opacity-90'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}