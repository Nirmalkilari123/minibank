import React from "react";
import Heading from "@/layouts/AboutUsPage/AboutUsHeadingPage";
import AboutPageDescription from "@/layouts/AboutPageDescription";
import AboutUsDescription from "@/components/AboutUs/AboutUsDescription";
import XplosFooter from "@/components/Footer/XplosFooter";
const page = () => {
  return (
    <div>
      <div className="margin">
        <Heading heading={"AboutUs"} />
        <div className="text-center">
          <AboutUsDescription description1="We offer a variety of financial services to help you manage your finances, from personal loans to savings accounts. Our dedicated team is here to assist you with all your banking needs." />
        </div>
      </div>
      <AboutPageDescription />
      <XplosFooter />
    </div>
  );
};

export default page;
