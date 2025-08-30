import React from 'react';

const PurpleCTASection = () => {
  return (
    <section className="bg-purple-800 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
          Stop Searching, Start <span className="text-orange-500">Getting Hired!</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join us today and see how Vettio can revolutionize your job hunt.
        </p>
        
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white text-lg sm:text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-4 sm:mb-6">
          Join Waitlist!
        </button>
        
        {/* Checkmarks */}
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-purple-100">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>Always Free</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>No credit card needed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurpleCTASection;
