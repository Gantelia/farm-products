import React from 'react';

import FeatureCard from "../../ui/feature-card/feature-card";
import Title from "../../styled/title/title";
import Button from "../../ui/button/button.jsx";
import { StyledFeatures, FeatureList } from "./styles";
import { TitleSize, TitleLevel } from "../../../style-const";

function Features({ features }) {
  return (
    <StyledFeatures className="features">
      {features?.length && (
        <>
          <Title
            size={TitleSize.MEDIUM}
            titleLevel={TitleLevel.H2}
            marginBottom={64}
          >
            Почему фермерские продукты лучше?
          </Title>
          <FeatureList className="features__list">
            {features?.map((feature) => (
              <li className="features__item" key={feature.id}>
                <FeatureCard {...feature} />
              </li>
            ))}
          </FeatureList>
          <Button link={"/buy"}>Купить</Button>
        </>
      )}
    </StyledFeatures>
  );
}

export default Features;
