import React from 'react';

const ComparisonSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Large Human Figures - Framing the Content (Hidden on mobile) */}
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          {/* Left Male Figure - Pointing Right */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/malePicture.svg" 
              alt="Traditional Way Person" 
              className="w-96 h-96 object-contain opacity-80"
            />
          </div>
          
          {/* Right Female Figure - Pointing Left */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/femalePicture.svg" 
              alt="Vettio Way Person" 
              className="w-96 h-96 object-contain opacity-80"
            />
          </div>
        </div>

        {/* Main Content - Centered with proper spacing to avoid overlap */}
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Title Row - Responsive Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-8 sm:mb-12 lg:mb-16 space-y-4 lg:space-y-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">Traditional Way</h3>
            
            {/* Center Icon - Between Both Titles */}
            <div className="lg:mx-12">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl sm:text-2xl">⚔️</span>
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center lg:text-left">Vettio Way</h3>
          </div>

          {/* Content Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mx-auto">
            {/* Traditional Way - Left Column */}
            <div className="text-center lg:text-left lg:ml-0 xl:ml-48">
              {/* Bullet Points */}
              <div className="space-y-3 sm:space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-lg sm:text-xl mt-1">🔍</span>
                  <span className="text-gray-700 text-sm sm:text-base">Search across multiple platforms for job openings.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-lg sm:text-xl mt-1">⏳</span>
                  <span className="text-gray-700 text-sm sm:text-base">Spend hours finding jobs that are your perfect fit.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-lg sm:text-xl mt-1">📄</span>
                  <span className="text-gray-700 text-sm sm:text-base">Spending too much time adjusting your CV and profile for every job.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-lg sm:text-xl mt-1">👤</span>
                  <span className="text-gray-700 text-sm sm:text-base">Struggle to connect with hiring managers.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-lg sm:text-xl mt-1">💬</span>
                  <span className="text-gray-700 text-sm sm:text-base">Caught in an endless loop of waiting for a response.</span>
                </div>
              </div>
            </div>

            {/* Vettio Way - Right Column */}
            <div className="text-center lg:text-left lg:mr-0 xl:mr-48">
              {/* Main Point */}
              <div className="mb-6 sm:mb-8">
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 inline-block">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-600 text-xl sm:text-2xl">📋</span>
                    <span className="text-orange-800 font-semibold text-sm sm:text-lg">
                      Complete <span className="font-bold underline">One interview</span> with our domain expert — that's it, that's all you have to do.
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-lg sm:text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4 sm:mb-6">
                Join Waitlist
              </button>
              
              {/* Checkmarks */}
              <div className="flex flex-col space-y-2 text-sm text-gray-700">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Always Free</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>No credit card needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
