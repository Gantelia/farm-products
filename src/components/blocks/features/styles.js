import styled from 'styled-components';

import Section from '../../styled/section/section';
import Ul from '../../styled/ul/ul';

export const StyledFeatures = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureList = styled(Ul)`
  display: grid;
  gap: ${(props) => props.theme.indent};
  grid-template-columns: 1fr 1fr;
  margin-bottom: 64px;
  grid-auto-rows: minmax(197px, 1fr);
`;
