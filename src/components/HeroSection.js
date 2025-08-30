import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Domain Expert Interviewing Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm">
            {/* Domain Expert Icon */}
            <img 
              src="https://vettio.com/assets/Images/landingAssets/domain.svg" 
              alt="Domain Expert" 
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
            />
            <span className="text-sm sm:text-lg text-gray-800 font-medium">Domain Expert Interviewing</span>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-2">
            Take One Interview With Us And We'll Handle The Rest Of Your Job Search
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            With one interview, we'll deeply understand your experience, match you to the right jobs, customize your CV for each job, and connect you with hiring managers.
          </p>
        </div>

        {/* VETTIO FirstFold Image */}
        <div className="max-w-5xl mx-auto mb-6 sm:mb-8 px-4">
          <div className="text-center">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/firstFold.svg" 
              alt="VETTIO Platform Interface" 
              className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-lg sm:text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4">
            Join Waitlist
          </button>
          
          {/* Checkmarks */}
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <span className="text-green-500">✓</span>
              <span>Always Free</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2">
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
