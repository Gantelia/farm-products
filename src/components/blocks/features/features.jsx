import React from "react";

import FactoryFeatureCard from "../../ui/factory-feature-card/factory-feature-card.jsx";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button.jsx";
import { Li } from "../../styled/index.js";
import { AppRoute } from "../../../const.js";
import { StyledFeatures, FeatureList } from "./styles";

function Features({ features = [] }) {
  return (
    features?.length && (
      <StyledFeatures>
        <Title as="h2" marginBottom={64}>
          Почему фермерские продукты лучше?
        </Title>
        <FeatureList>
          {features?.map((feature) => (
            <Li key={feature.id}>
              <FactoryFeatureCard {...feature} />
            </Li>
          ))}
        </FeatureList>
        <Button link={AppRoute.ORDER}>Купить</Button>
      </StyledFeatures>
    )
  );
}

export default Features;
