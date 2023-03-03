import React from "react";

import FeatureStoreCard from "../feature-store-card/feature-store-card.jsx";
import FeatureCard from "../feature-card/feature-card.jsx";
import { ProductProvider } from "../provider-mark/provider-mark.jsx";

function FactoryFeatureCard(props) {
  switch (props.provider) {
    case ProductProvider.STORE:
      return <FeatureStoreCard {...props} />;
    case ProductProvider.FARM:
      return <FeatureCard {...props} />;
    default:
      return null;
  }
}

export default FactoryFeatureCard;
