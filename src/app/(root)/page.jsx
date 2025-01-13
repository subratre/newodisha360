import Faq from "@/components/faq";
import FeaturedCourse from "@/components/featured-course";
import Hero from "@/components/hero-section";
import NewComponent from "@/components/new-component";
import React from "react";

export const metadata = {
  title: "Home",
};
const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCourse />
      <NewComponent />
      <Faq />
    </div>
  );
};

export default HomePage;
