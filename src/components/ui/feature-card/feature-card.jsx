import React from 'react';

import ProviderMark from '../provider-mark/provider-mark';
import Title, {TitleLevel, TitleSize} from '../title/title';
import { Feature, Header } from './styles.js';
import P from '../../styled/p/p';

function FeatureCard({ provider, title, description, image }) {
  return (
    <Feature provider={provider}>
      <Header image={image}>
        <ProviderMark provider={provider} />
        <Title titleLevel={TitleLevel.DEFAULT} size={TitleSize.SMALL}>{title}</Title>
      </Header>
      <P>{description}</P>
    </Feature>
  );
}

export default FeatureCard;

