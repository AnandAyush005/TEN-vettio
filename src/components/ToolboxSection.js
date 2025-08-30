import React from 'react';

const ToolboxSection = () => {
  const tools = [
    {
      icon: '💻',
      title: 'Interview Prep Tool',
      description: 'Get prepared with a curated list of questions. Supported by our domain-expert AI interview bot, tailored to the role you\'re targeting.',
      cta: 'Join Waitlist',
      checkmark: 'Unlock the best AI-powered domain expert interview bot.',
      illustration: 'Person at desk with laptop'
    },
    {
      icon: '🎧',
      title: 'Mock Interview Tool',
      description: 'Experience a simulated interview with an AI specific to your job description, helping you practice and build confidence.',
      cta: 'Join Waitlist',
      checkmark: 'Free career assistant to efficiently help you find your perfect fit.',
      illustration: 'Person with headset and microphone'
    },
    {
      icon: '📊',
      title: 'CV Personalization Tool',
      description: 'Easily customize your resume for each job application, ensuring your right skills and experience for the role.',
      cta: 'Join Waitlist',
      checkmark: 'Make confident career decisions with the help of our deep insights.',
      illustration: 'Person with document and graph'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            Your <span className="text-orange-500">All-In-One</span> Career <span className="text-orange-500">Success Toolbox</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Use our powerful suite of tools to optimize your resume, ace your interviews, and connect with the right employers, all from one platform.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{tool.icon}</div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                {tool.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              {/* Call to Action */}
              <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-3 sm:mb-4 text-sm sm:text-base">
                {tool.cta}
              </button>
              
              {/* Checkmark */}
              <div className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                <span className="text-green-500 mt-1">✓</span>
                <span>{tool.checkmark}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;
