import React from "react";

import { StyledPrice } from "./styles.js";

const formatPrice = (value) => {
  const roundedPrice = Math.ceil(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

function Price({ value, className }) {
  return (
    <StyledPrice className={className}>{formatPrice(value)} руб.</StyledPrice>
  );
}

export default Price;
