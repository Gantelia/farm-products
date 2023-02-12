import styled from "styled-components";

import { P } from "../../styled/index.js";

export const StyledProviderMark = styled(P).attrs((props) => ({
  children: props.options.text,
}))`
  padding: 2px 10px;
  display: inline-block;
  margin-bottom: 4px;
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  vertical-align: top;
  background-color: ${(props) => props.options.bgColor};
`;
