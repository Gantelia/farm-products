import StyledTitle from "./styles";
import React from "react";

function Title({ titleLevel, size, marginBottom, children }) {
  return (
    <StyledTitle as={`h${titleLevel}`} size={size} marginBottom={marginBottom}>
      {children}
    </StyledTitle>
  );
}

export default Title;

export const TitleSize = {
  BIG: {
    fontSize: "44",
    lineHeight: "1.16",
  },
  MEDIUM: {
    fontSize: "36",
    lineHeight: "1.14",
  },
  DEFAULT: {
    fontSize: "24",
    lineHeight: "1.3",
  },
  SMALL: {
    fontSize: "18",
    lineHeight: "1.5",
  },
};

export const TitleLevel = {
  H1: 1,
  H2: 2,
  DEFAULT: 3,
  H4: 4,
};
