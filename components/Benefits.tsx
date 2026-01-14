
import React from 'react';

const benefits = [
  {
    title: "Editorial Strategy",
    description: "We don't just 'post content'. We craft a visual narrative that makes your local business feel like a global brand.",
    icon: (
      <svg className="w-10 h-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    bg: "bg-blue-50/30"
  },
  {
    title: "Cinematic Editing",
    description: "High-end motion graphics, trend-focused audio, and seamless transitions. Your reels, perfected.",
    icon: (
      <svg className="w-10 h-10 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    bg: "bg-pink-50/30"
  },
  {
    title: "Targeted Reach",
    description: "Direct-to-customer advertising. We put your business in front of the exact people who live nearby.",
    icon: (
      <svg className="w-10 h-10 transition-all duration-500 group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bg: "bg-yellow-50/30"
  }
];

const Benefits: React.FC = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {benefits.map((benefit, i) => (
          <div 
            key={i}
            className={`group relative overflow-hidden glass-card p-12 rounded-[3rem] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-3 cursor-default`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${benefit.bg} rounded-bl-[4rem] -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-100 opacity-50`}></div>
            
            <div className="relative z-10">
              <div className="mb-10 text-gray-900">
                {benefit.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight font-apple-display">{benefit.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
            
            {/* Subtle border beam on hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
