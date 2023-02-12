import styled from "styled-components";
import { Section } from "../../styled/index.js";

const Panel = styled(Section)`
  padding: ${({ theme }) => theme.indent};
  padding-top: ${(props) => `${props.paddingTop}px` || props.theme.indent};
  padding-bottom: ${(props) =>
    `${props.paddingBottom}px` || props.theme.indent};
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 10px 20px rgba(0, 0, 0, 0.04);
  width: ${(props) => props.$width || "auto"};
  background-color: ${({ theme }) => theme.colorWhite};
  display: block;
`;

export default Panel;
