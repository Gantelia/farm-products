import styled, { css } from "styled-components";

import { Ul, Li } from "../../styled/index.js";
import Button from "../button/button.jsx";

export const TabListItem = styled(Li)`
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  min-width: ${(props) => `${props.$minWidth}px` || "260px"};
  ${(props) =>
    props.$isActive
      ? css`
          background-color: ${props.theme.activeTabColor};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.colorWhite};
          display: block;
          cursor: pointer;
        `
      : css`
          background-color: ${props.theme.bgColorGray};
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: ${props.theme.basicTextColor};
          &:hover,
          &:active {
            background-color: ${props.theme.bgColorGray};
            box-shadow: none;
          }
        `}
`;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
  width: 419px;
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: auto;
`;
