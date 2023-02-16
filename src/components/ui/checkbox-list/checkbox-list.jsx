import React from "react";

import Checkbox from "../checkbox/checkbox.jsx";
import { Ul, Li } from "../../styled/index.js";

function CheckboxList({
  selectedValues,
  labelComponent,
  options,
  onChange,
  onLabelClick = () => {},
}) {
  const handleChange = (value) => {
    const newSelectedValues = [...selectedValues];
    const valueIndex = newSelectedValues.indexOf(value);
    if (valueIndex === -1) {
      newSelectedValues.push(value);
    } else {
      newSelectedValues.splice(valueIndex, 1);
    }
    onChange && onChange(newSelectedValues);
  };

  return (
    <Ul>
      {options.map((option, index) => (
        <Li key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectedValues={selectedValues}
            isChecked={selectedValues.includes(option.value)}
            value={option.value}
            text={option.title}
            onChange={handleChange}
            onClick={(value) => onLabelClick(value, index)}
          />
        </Li>
      ))}
    </Ul>
  );
}

export default CheckboxList;
