import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Domain Expert Interviewing Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            {/* Domain Expert Icon */}
            <img 
              src="https://vettio.com/assets/Images/landingAssets/domain.svg" 
              alt="Domain Expert" 
              className="w-5 h-5 mr-3"
            />
            <span className="text-lg text-gray-800 font-medium">Domain Expert Interviewing</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Take One Interview With Us And We'll Handle The Rest Of Your Job Search
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With one interview, we'll deeply understand your experience, match you to the right jobs, customize your CV for each job, and connect you with hiring managers.
          </p>
        </div>

        {/* VETTIO FirstFold Image */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="text-center">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/firstFold.svg" 
              alt="VETTIO Platform Interface" 
              className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-4 bg-orange-500 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4">
            Join Waitlist
          </button>
          
          {/* Checkmarks */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>Always Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>No credit card needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
