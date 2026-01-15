import React from 'react';

interface PricingProps {
  onOpenForm: () => void;
}

const plans = [
  {
    duration: "4 Months",
    totalPrice: 8000,
    monthlyPrice: 2000,
    features: [
      "4 Viral Reels / month",
      "Basic Scripting",
      "Standard Editing",
      "Local Ad Setup"
    ],
    highlight: false,
    color: "from-blue-500 to-blue-600"
  },
  {
    duration: "6 Months",
    totalPrice: 10000,
    monthlyPrice: 1666,
    features: [
      "8 Viral Reels / month",
      "Advanced Scripting",
      "Cinematic Editing",
      "Ad Management",
      "Monthly Strategy Call"
    ],
    highlight: true,
    color: "from-pink-500 to-purple-600"
  },
  {
    duration: "12 Months",
    totalPrice: 16000,
    monthlyPrice: 1333,
    features: [
      "12 Viral Reels / month",
      "Full Creative Direction",
      "Premium Motion Graphics",
      "Priority Support",
      "Unlimited Revisions",
      "Dedicated Account Manager"
    ],
    highlight: false,
    color: "from-orange-500 to-yellow-500"
  }
];

const Pricing: React.FC<PricingProps> = ({ onOpenForm }) => {
  return (
    <div className="mt-20 sm:mt-40">
      <div className="text-center mb-16 sm:mb-24 px-4">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-apple-display leading-tight uppercase text-balance">
          Choose Your <br className="hidden sm:block" />
          <span className="text-happening italic font-editorial font-light">Growth Path.</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group rounded-[2.5rem] p-8 sm:p-10 flex flex-col h-full border transition-all duration-500 ${plan.highlight
                  ? 'bg-black text-white border-transparent scale-105 shadow-2xl shadow-pink-500/20 z-10'
                  : 'bg-white text-gray-900 border-gray-100 hover:border-gray-200 hover:shadow-xl hover:-translate-y-2'
                }`}
            >
              {plan.highlight && (
                <div className="absolute inset-x-0 -top-4 text-center">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Most Popular</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-gray-100' : 'text-gray-900'}`}>{plan.duration}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black tracking-tight">${plan.totalPrice.toLocaleString()}</span>
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>total</span>
                </div>
                <div className={`mt-2 text-sm font-medium ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                  ~${Math.round(plan.totalPrice / parseInt(plan.duration)).toLocaleString()}/mo
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center space-x-3">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? 'text-pink-400' : 'text-pink-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-base font-medium ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenForm}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${plan.highlight
                    ? 'bg-white text-black hover:bg-gray-100 uppercase tracking-wide'
                    : 'bg-black text-white hover:bg-gray-800'
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Pricing;
