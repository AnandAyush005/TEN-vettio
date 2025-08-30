import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 leading-tight px-4 lg:px-0">
                <span className="text-purple-600">Join</span>{" "}
                <span className="text-gray-800">Our Community</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
                Join a community of go-getters, career builders, and like-minded professionals. Connect on Slack and Discord to exchange ideas, share opportunities, and get the support you need to land your next role.
              </p>
              
              <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-orange-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg">
                Join Our Community
              </button>
            </div>
            
            {/* Right Column - Slack Logo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img 
                src="https://vettio.com/assets/Images/landingAssets/slack.svg" 
                alt="Slack Logo" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
