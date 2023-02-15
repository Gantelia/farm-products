import styled from "styled-components";

import farmer from "../../../assets/svg/farmer-bg.svg";
import { Section } from "../../styled/index.js";

export const StyledAbout = styled(Section)`
  padding-top: 183px;
  padding-bottom: 183px;
  background-color: ${({ theme }) => theme.bgBasicColor};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -63px;
    right: 90px;
    width: 446px;
    height: 627px;
    background-repeat: no-repeat;
    overflow: hidden;
    background-image: url(${farmer});
  }
`;

export const AboutWrapper = styled.div`
  width: 538px;
`;
