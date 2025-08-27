import React from 'react';

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Large Human Figures - Framing the Content */}
        <div className="absolute inset-0 pointer-events-none">
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
          {/* Title Row - Single Line with Centered Icon */}
          <div className="flex items-center justify-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800">Traditional Way</h3>
            
            {/* Center Icon - Between Both Titles */}
            <div className="mx-12">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">⚔️</span>
              </div>
            </div>
            
            <h3 className="text-4xl font-bold text-gray-800">Vettio Way</h3>
          </div>

          {/* Content Columns */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Traditional Way - Left Column */}
            <div className="text-center md:text-left md:ml-48">
              {/* Bullet Points */}
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">🔍</span>
                  <span className="text-gray-700">Search across multiple platforms for job openings.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">⏳</span>
                  <span className="text-gray-700">Spend hours finding jobs that are your perfect fit.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">📄</span>
                  <span className="text-gray-700">Spending too much time adjusting your CV and profile for every job.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">👤</span>
                  <span className="text-gray-700">Struggle to connect with hiring managers.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl">💬</span>
                  <span className="text-gray-700">Caught in an endless loop of waiting for a response.</span>
                </div>
              </div>
            </div>

            {/* Vettio Way - Right Column */}
            <div className="text-center md:text-left md:mr-48">
              {/* Main Point */}
              <div className="mb-8">
                <div className="bg-orange-100 border border-orange-200 rounded-lg p-6 inline-block">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-600 text-2xl">📋</span>
                    <span className="text-orange-800 font-semibold text-lg">
                      Complete <span className="font-bold underline">One interview</span> with our domain expert — that's it, that's all you have to do.
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <button className="px-8 py-4 bg-orange-500 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-6">
                Join Waitlist
              </button>
              
              {/* Checkmarks */}
              <div className="flex flex-col space-y-2 text-sm text-gray-700">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Always Free</span>
                </div>
                <div className="flex items-center space-x-2">
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
