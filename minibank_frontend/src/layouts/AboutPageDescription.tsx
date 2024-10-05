import React from 'react';
import AboutUsInformation from '@/components/AboutUs/AboutUsInformation';
import { descriptions } from '@/services/Utilities/functionalities/AboutUsDescription';

const AboutPageDescription = () => {
  return (
    <div>
      <div>
        <div>
          {descriptions.map((item, index) => (
            <div className="px-5 py-5" key={index}>
              <AboutUsInformation 
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPageDescription;
