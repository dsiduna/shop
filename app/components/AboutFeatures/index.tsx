import React from "react";
import { AboutFeaturesRow } from "../AboutFeaturesRow";
import selfie from "../../assets/selfie.svg";
import ecommerce from "../../assets/ecommerce.svg";

const AboutFeatures = () => (
  <React.Fragment>
    <AboutFeaturesRow
      title="Tech Solutions"
      description="We offer the latest tech devices at unbeatable prices, bringing you cutting-edge technology without breaking the bank. Upgrade your tech game today!"
      image={selfie}
      imageAlt="Tech Solutions"
      reverse={false}
    />
    <AboutFeaturesRow
      title="Convenience"
      description="Experience the ultimate convenience of shopping from anywhere. Our services you to get tech solutions, anytime, anywhere, making life easier for you."
      image={ecommerce}
      imageAlt="Convenience"
      reverse={true}
    />
  </React.Fragment>
);

export { AboutFeatures };
