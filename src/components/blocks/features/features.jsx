import React from "react";

import FeatureCard from "../../ui/feature-card/feature-card";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button.jsx";
import { StyledFeatures, FeatureList } from "./styles";

function Features({ features }) {
  return (
    features?.length && (
      <StyledFeatures>
        <Title as="h2" marginBottom={64}>
          Почему фермерские продукты лучше?
        </Title>
        <FeatureList>
          {features?.map((feature) => (
            <li key={feature.id}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </FeatureList>
        <Button link={"/buy"}>Купить</Button>
      </StyledFeatures>
    )
  );
}

export default Features;
