import React from 'react';

const InterviewSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/screenRecord.svg" 
              alt="Interview Screen Recording" 
              className="w-full h-auto max-w-sm sm:max-w-md mx-auto lg:mx-0"
            />
          </div>
          
          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4 lg:px-0">
              An Interview That <span className="text-orange-500">Understands</span> You
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
              No more generic recruiters. Your interview is handled by a domain expert who comprehends the complexities of your field, ensuring your expertise is captured and presented accurately.
            </p>
            
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-lg sm:text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4 sm:mb-6">
              Join Waitlist
            </button>
            
            {/* Checkmarks */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Always Free</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>No credit card needed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewSection;
