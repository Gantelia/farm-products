import React from "react";

import ProviderMark from "../provider-mark/provider-mark";
import Title, { TitleSize } from "../title/title";
import { P } from "../../styled/index.js";
import { Feature, Header } from "./styles.js";

function FeatureCard({ provider, title, description, image }) {
  return (
    <Feature provider={provider}>
      <Header image={image}>
        <ProviderMark provider={provider} />
        <Title as="h3" size={TitleSize.EXTRA_SMALL}>
          {title}
        </Title>
      </Header>
      <P>{description}</P>
    </Feature>
  );
}

export default FeatureCard;
