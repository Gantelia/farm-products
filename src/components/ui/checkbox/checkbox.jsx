import React from "react";

import { Label, VisuallyHiddenInput } from "../../styled/index.js";

function Checkbox({
  labelComponent,
  isChecked,
  value,
  text,
  onChange,
  ...props
}) {
  const LabelComponent = labelComponent;
  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}

export default Checkbox;
