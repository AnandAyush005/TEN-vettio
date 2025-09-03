import React from 'react';

const ToolboxSection = () => {
  const tools = [
    {
      icon: '💻',
      title: 'Interview Prep Tool',
      description: 'Prepare with a curated question list, powered by our expert AI interview bot tailored to your target role.',
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Your <span className="text-orange-500">All-In-One</span> Career <span className="text-orange-500">Success Toolbox</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Use our powerful suite of tools to optimize your resume, ace your interviews, and connect with the right employers, all from one platform.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Icon */}
              <div className="text-4xl mb-4">{tool.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tool.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              {/* Call to Action */}
              <button className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4">
                {tool.cta}
              </button>
              
              {/* Checkmark */}
              <div className="flex items-start space-x-2 text-sm text-gray-600">
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
