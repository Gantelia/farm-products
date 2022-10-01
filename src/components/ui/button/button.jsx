import React from 'react';

import StyledButton from "./styles.js";

function Button({ children, maxWidth, link, onClick, className, ...props }) {
  return (
    <StyledButton
      {...props}
      $maxWidth={maxWidth}
      className={className}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
