import React from "react";

import StyledButton from "./styles.js";

function Button({ label, isMaxWidth, link, onClick, className, ...props }) {
  return (
    <StyledButton
      {...props}
      $isMaxWidth={isMaxWidth}
      className={className}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
