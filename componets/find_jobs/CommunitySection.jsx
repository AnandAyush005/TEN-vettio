import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-6xl font-bold mb-10 leading-tight">
                <span className="text-purple-600">Join</span>{" "}
                <span className="text-gray-800">Our Community</span>
              </h2>
              <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-2xl">
                Join a community of go-getters, career builders, and like-minded professionals. Connect on Slack and Discord to exchange ideas, share opportunities, and get the support you need to land your next role.
              </p>
              
              <button className="px-12 py-6 bg-orange-500 text-white text-2xl font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg">
                Join Our Community
              </button>
            </div>
            
            {/* Right Column - Slack Logo */}
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://vettio.com/assets/Images/landingAssets/slack.svg" 
                alt="Slack Logo" 
                className="w-80 h-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
