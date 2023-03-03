import React from "react";

import ProviderMark from "../provider-mark/provider-mark";
import Title, { TitleSize } from "../title/title";
import { P } from "../../styled/index.js";
import { Feature, Header } from "./styles.js";

function FeatureStoreCard({ provider, title, description, image }) {
  return (
    <Feature provider={provider}>
      <Header image={image}>
        <Title as="h3" size={TitleSize.EXTRA_SMALL}>
          {title}
        </Title>
        <ProviderMark provider={provider} />
      </Header>
      <P>{description}</P>
    </Feature>
  );
}

export default FeatureStoreCard;
