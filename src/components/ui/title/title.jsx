import StyledTitle from './styles';
import React from 'react';

function Title({titleLevel, size, marginBottom, children}) {
  return (
    <StyledTitle as={`h${titleLevel}`} size={size} marginBottom={marginBottom}>
      {children}
    </StyledTitle>
  );
}

export default Title;


export const TitleSize = {
  BIG: {
    fontSize: '44',
    lineHeight: '51'
  },
  MEDIUM: {
    fontSize: '36',
    lineHeight: '41'
  },
  DEFAULT: {
    fontSize: '24',
    lineHeight: '31'
  },
  SMALL: {
    fontSize: '18',
    lineHeight: '27'
  }
};

export const TitleLevel = {
  H1: 1,
  H2: 2,
  DEFAULT: 3,
  H4: 4
};

