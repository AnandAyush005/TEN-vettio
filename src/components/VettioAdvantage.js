import React from 'react';

const VettioAdvantage = () => {
  const advantages = [
    {
      icon: 'https://vettio.com/assets/Images/landingAssets/feature-icon-1.svg',
      title: 'We Understand You, Not Just Your Resume',
      description: 'Your interview helps us dive deep into your experience, skills, and aspirations, to truly understand what makes you unique.',
      color: 'orange'
    },
    {
      icon: 'https://vettio.com/assets/Images/landingAssets/feature-icon-2.svg',
      title: 'Perfect Matches, Backed by Deep Understanding',
      description: 'Because we know your experience deeply, we can connect you with the right opportunities, no matter if it\'s on the internet, or known to our team.',
      color: 'orange'
    },
    {
      icon: 'https://vettio.com/assets/Images/landingAssets/feature-icon-4.svg',
      title: 'Every Job, a Perfectly Tailored CV',
      description: 'We create customized CVs for every role you\'re a great fit for, showcasing your strengths in the most impactful way.',
      color: 'purple'
    },
    {
      icon: 'https://vettio.com/assets/Images/landingAssets/feature-icon-3.svg',
      title: 'Opening Doors to Hiring Managers',
      description: 'We go the extra mile by presenting your customized profile directly to hiring managers, increasing your chances of success.',
      color: 'purple'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 px-4">
            <img 
              src="https://vettio.com/assets/Images/logo.svg" 
              alt="Vettio Logo" 
              className="inline-block h-8 sm:h-10 md:h-12 lg:h-14 align-text-bottom mr-2"
            />
            - Turns these Odds in your favor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Vettio flips the script on traditional job hunting. We match you with the right opportunity, and connect you with hiring managers—eliminating endless applications and missed opportunities—let us handle the heavy lifting.
          </p>
        </div>

        {/* Core Process Grid */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
          {/* Top Row - First Two Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {advantages.slice(0, 2).map((advantage, index) => (
              <div key={index} className="text-left">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg ${
                    advantage.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'
                  }`}>
                    {advantage.icon.startsWith('http') ? (
                      <img 
                        src={advantage.icon} 
                        alt="Feature Icon" 
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      />
                    ) : (
                      <span className="text-xl sm:text-2xl text-white">{advantage.icon}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle - Feature Image */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <img 
              src="https://vettio.com/assets/Images/landingAssets/feature-Image.svg" 
              alt="Vettio Feature" 
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl mx-auto h-auto"
            />
          </div>

          {/* Bottom Row - Last Two Advantages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {advantages.slice(2, 4).map((advantage, index) => (
              <div key={index} className="text-left">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg ${
                    advantage.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'
                  }`}>
                    {advantage.icon.startsWith('http') ? (
                      <img 
                        src={advantage.icon} 
                        alt="Feature Icon" 
                        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      />
                    ) : (
                      <span className="text-xl sm:text-2xl text-white">{advantage.icon}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Puzzle Illustration */}
      
      </div>
    </section>
  );
};

export default VettioAdvantage;
