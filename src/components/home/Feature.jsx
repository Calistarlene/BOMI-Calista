import React from 'react';

const Features = ({ onNavigate }) => {
  const features = [
    {
      id: 1,
      title: "Smart BMI Calculator",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Click to calculate your BMI!",
      route: "/bmi",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "BMI & Progress Tracker",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Mulai Lacak Sekarang",
      route: "/bmi",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Body Composition Estimation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Estimate your Body Composition",
      route: "/bmi",
      imagePosition: "right"
    },
    {
      id: 4,
      title: "Compare with Health Standard",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Cek Perbandingan Tubuh Anda",
      route: "/bmi",
      imagePosition: "left"
    },
    {
      id: 5,
      title: "Health Risk Assessment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Click to calculate your BMI!",
      route: "/bmi",
      imagePosition: "right"
    }
  ];

  const handleNavigate = (route) => {
    if (onNavigate) {
      onNavigate(route);
    } else {
      console.log(`Navigate to: ${route}`);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fitur - Fitur <span className="text-[#8eb442]">BOMI</span>
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col ${
                feature.imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 lg:gap-12 tex`}
            >
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-justify">
                <h3 className="text-2xl md:text-3xl font-bold text-[#8eb442] mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className='flex justify-center'> 
                <button
                  onClick={() => handleNavigate(feature.route)}
                  className="bg-[#8eb442] hover:bg-[#7da03a] text-white font-semibold py-3 px-6  rounded-full transition-colors duration-300 transform hover:scale-105"
                >
                  {feature.buttonText}
                </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  {/* Placeholder for image - Replace with actual image */}
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;