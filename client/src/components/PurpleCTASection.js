import React from 'react';

const PurpleCTASection = () => {
  return (
    <section className="bg-purple-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Stop Searching, Start <span className="text-orange-500">Getting Hired!</span>
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join us today and see how Vettio can revolutionize your job hunt.
        </p>
        
        <button className="px-8 py-4 bg-orange-500 text-white text-xl font-semibold rounded-lg hover:bg-orange-600 transition-colors mb-6">
          Join Waitlist!
        </button>
        
        {/* Checkmarks */}
        <div className="flex justify-center space-x-8 text-sm text-purple-100">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>Always Free</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">✓</span>
            <span>No credit card needed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurpleCTASection;
