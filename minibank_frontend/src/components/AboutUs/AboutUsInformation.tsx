import React from 'react';

type AboutUsDescriptionProps = {
  heading: string;
  description: string;
};

const AboutUsInformation: React.FC<AboutUsDescriptionProps> = ({ heading, description }) => {
  return (
    <div>
      <h1 className="medium-text-bold mb-4">{heading}</h1>
      <p className="small-text-bold ">{description}</p>
    </div>
  );
};

export default AboutUsInformation;
