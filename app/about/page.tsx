import React from "react";
import Image from "next/image";
import Banner from "./Banner";
import { AboutFeatures } from "../components/AboutFeatures";
import ActionBanner from "./ActionBanner";
import Hero from "./Hero";

const About = () => {
  return (
    <div>
      <Hero />
      <AboutFeatures />
      <ActionBanner />
      <Banner />
    </div>
  );
};

export default About;
