import styled from "styled-components";
import { P } from "../../styled/index.js";

export const StyledFooter = styled.footer`
  width: ${({ theme }) => theme.pageWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px ${({ theme }) => theme.pagePadding};
  height: 79px;
  background-color: ${({ theme }) => theme.colorWhite};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

export const Copyright = styled(P)`
  max-width: 148px;
  font-size: ${({ theme }) => theme.fontSize};
  vertical-align: middle;
  text-align: right;
`;
