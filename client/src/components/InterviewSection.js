import React from 'react';

const InterviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image */}
          <div className="text-center md:text-left">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/screenRecord.svg" 
              alt="Interview Screen Recording" 
              className="w-full h-auto max-w-md mx-auto md:mx-0"
            />
          </div>
          
          {/* Right Side - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              An Interview That <span className="text-orange-500">Understands</span> You
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              No more generic recruiters. Your interview is handled by a domain expert who comprehends the complexities of your field, ensuring your expertise is captured and presented accurately.
            </p>
            
            <button className="px-8 py-4 bg-orange-500 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-6">
              Join Waitlist
            </button>
            
            {/* Checkmarks */}
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Always Free</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
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
