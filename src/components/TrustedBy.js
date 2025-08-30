import React from 'react';

const TrustedBy = () => {
  const companies = [
    { 
      name: 'Squatwolf', 
      logo: 'https://vettio.com/assets/Images/landingAssets/squatwolf-logo.svg',
      alt: 'Squatwolf Logo'
    },
    { 
      name: 'Web Affinity', 
      logo: 'https://vettio.com/assets/Images/landingAssets/webaffinity-logo.svg',
      alt: 'Web Affinity Logo'
    },
    { 
      name: 'Pure2', 
      logo: 'https://vettio.com/assets/Images/landingAssets/pure2-logo.svg',
      alt: 'Pure2 Logo'
    },
    { 
      name: 'Zignaly', 
      logo: 'https://vettio.com/assets/Images/landingAssets/zignaly-logo.svg',
      alt: 'Zignaly Logo'
    },
    { 
      name: 'Wellows', 
      logo: 'https://vettio.com/assets/Images/landingAssets/wellows-logo.svg',
      alt: 'Wellows Logo'
    },
    { 
      name: 'Gaditek', 
      logo: 'https://vettio.com/assets/Images/landingAssets/gaditek-logo.svg',
      alt: 'Gaditek Logo'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 px-4">
          Trusted By Leading Employers
        </h2>
        
        {/* Continuous Scrolling Container */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of company logos */}
            {companies.map((company, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <img 
                    src={company.logo} 
                    alt={company.alt}
                    className="h-8 sm:h-12 md:h-16 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-gray-800 font-bold text-sm sm:text-base md:text-lg text-center sm:text-left">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <img 
                    src={company.logo} 
                    alt={company.alt}
                    className="h-8 sm:h-12 md:h-16 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-gray-800 font-bold text-sm sm:text-base md:text-lg text-center sm:text-left">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
