

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
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Trusted By Leading Employers
        </h2>
        
        {/* Continuous Scrolling Container */}
        <div className="relative">
          <div className="flex marquee-track">
            {/* First set of company logos */}
            {companies.map((company, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <img 
                    src={company.logo} 
                    alt={company.alt}
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-gray-800 font-bold text-lg">
                    {company.name}
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <img 
                    src={company.logo} 
                    alt={company.alt}
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="text-gray-800 font-bold text-lg">
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
