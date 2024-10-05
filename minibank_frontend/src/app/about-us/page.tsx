import React from "react";
import Heading from "@/layouts/AboutUsPage/AboutUsHeadingPage";
import AboutPageDescription from "@/layouts/AboutPageDescription";
import AboutUsDescription from "@/components/AboutUs/AboutUsDescription";
const page = () => {
  return (
    <div className="bg-lime-500">
      <div className="margin">
        <Heading heading={"AboutUs"} />
        <div className="text-center">
          <AboutUsDescription description1="We offer a variety of financial services to help you manage your finances, from personal loans to savings accounts. Our dedicated team is here to assist you with all your banking needs." />
        </div>
      </div>
      <AboutPageDescription />
    </div>
  );
};

export default page;
