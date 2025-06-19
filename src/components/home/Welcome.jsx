import React from 'react';
import Logo from '../../assets/logo.svg';
//import Sdg from '../assets/sdg.svg';  // Uncommented and changed to .svg to match your description

const Welcome = () => {
  return (
    <section className="px-6 py-12 space-y-16">
      {/* Welcome to BOMI Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8" id="welcome-bomi">
          <div className="flex-shrink-0 lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Logo */}
              <img src={Logo} alt="BOMI Logo" className="relative z-10 w-48 lg:w-120 h-auto" />
            </div>
          </div>
          
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Welcome to <span style={{ color: '#626F47' }}>BO</span><span style={{ color: '#8FA65D' }}>MI</span>
            </h2>
            <div className="space-y-4 text-gray-700 text-justify">
              <p>
                <strong>BOMI</strong> is a digital platform that helps users monitor, understand, and manage their body health independently.
                In the modern era, many people pay less attention to their health conditions, especially regarding weight, diet, and body composition,
                without realizing whether their weight is ideal, underweight, or overweight, which can lead to health problems.
              </p>
              <p>
                BOMI is here as a solution to increase awareness of the importance of maintaining body health.
                With technology, BOMI provides services to calculate BMI, monitor BMI development, estimate body composition, and assess health risks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SDG Support Section */}
      <div className="max-w-7xl mx-auto  p-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8" id="welcome-sdg">
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-700 text-justify">
                This platform supports the{' '}
                <a
                href="https://sdgs.un.org/goals/goal3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline transition-all"
                style={{ color: '#4C9F38' }}
                >
                Sustainable Development Goals (SDGs)
                </a>{' '}
                to ensure healthy lives and well-being for all people at all ages.
                Through BOMI, you can measure, monitor, and manage your health with relevant, personalized, and easily accessible information,
                thus encouraging a healthy lifestyle according to each person's body condition.
            </p>
          </div>

          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* If you don't have the SDG image yet, use this placeholder */}
              {/* <img src={Sdg} alt="SDG 3 - Good Health and Well-being" className="w-48 lg:w-64 h-auto" /> */}
              
              {/* Placeholder SDG 3 badge */}
              <div 
                className="w-48 h-48 rounded-3xl flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: '#4C9F38' }}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">3</div>
                  <div className="text-sm font-medium">
                    GOOD HEALTH<br />AND WELL-BEING
                  </div>
                  <div className="mt-2">
                    <svg className="w-12 h-12 mx-auto" fill="white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;