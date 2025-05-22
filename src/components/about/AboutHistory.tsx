
import React from 'react';

export const AboutHistory = () => {
  const milestones = [
    {
      year: '2012',
      title: 'Founded',
      description: 'ProClean was established with a vision to revolutionize the cleaning industry.'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Expanded our services to include commercial and industrial cleaning solutions.'
    },
    {
      year: '2019',
      title: 'Green Initiative',
      description: 'Launched our eco-friendly product line and sustainable cleaning practices.'
    },
    {
      year: '2021',
      title: 'Tech Integration',
      description: 'Incorporated advanced cleaning technology and smart scheduling systems.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Our Journey</h2>
          <p className="text-gray-700">
            From humble beginnings to industry leadership, our path has been driven by innovation and commitment to excellence.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-clean-green-100"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-clean-green-500 z-10"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 md:pr-12 md:pl-0 pl-0 pr-0 flex">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                  } w-full md:w-4/5`}>
                    <div className="inline-block bg-clean-green-100 text-clean-green-800 font-semibold px-3 py-1 rounded-full mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
