import React from "react";
import { Ul } from "../../styled/index.js";
import { Option, Property } from "./styles.js";

function OptionsList({ options = [], delimeter = ": " }) {
  return (
    <Ul>
      {options.map((option, index) => (
        <Option key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {delimeter}
          </Property>
          {option.content}
        </Option>
      ))}
    </Ul>
  );
}

export default OptionsList;
