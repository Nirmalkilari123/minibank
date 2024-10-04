import React from 'react';

type AboutUsDescriptionProps = {
  heading: string;
  description: string;
};

const AboutUsInformation: React.FC<AboutUsDescriptionProps> = ({ heading, description }) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{heading}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutUsInformation;
