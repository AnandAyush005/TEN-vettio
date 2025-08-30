import React from 'react';

const StatisticsSection = () => {
  const stats = [
    {
      value: '40H',
      description: '40 Hour Average Spent on Job Hunting Monthly'
    },
    {
      value: '75%',
      description: '75% Of Job Applications Are Rejected Before Review'
    },
    {
      value: '91%',
      description: '91% Of Candidates Don\'t Personalize Their CVs'
    },
    {
      value: '60%',
      description: '60% Of Jobs Are Filled Through Networking'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-8xl mx-auto">
          <div className="bg-gray-100 rounded-lg p-6 sm:p-8 md:p-12 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
                    <span className="text-black">{stat.value.replace(/[H%]/g, '')}</span>
                    {stat.value.includes('H') && <span className="text-violet-600">H</span>}
                    {stat.value.includes('%') && <span className="text-violet-600">%</span>}
                  </div>
                  <p className="text-gray-900 text-xs sm:text-sm leading-relaxed font-medium px-2">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
