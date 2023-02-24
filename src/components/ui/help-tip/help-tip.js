import styled from "styled-components";

import { P } from "../../styled/index.js";

export const TipWrapper = styled.div`
  position: relative;
  z-index: 3;
  font-family: ${({ theme }) => theme.fontFamily};
  background-color: ${({ theme }) => theme.colorBlack};
  padding: 10px 20px;
`;

export const HelpMessage = styled(P)`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colorWhite};
`;
