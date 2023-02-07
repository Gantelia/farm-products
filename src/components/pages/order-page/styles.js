import styled from "styled-components";
import { Section, Label } from "/src/components/styled";

const leftWidth = "353px";

export const StyledOrder = styled(Section)`
  position: absolute;
  top: ${({ theme }) => theme.headerHeight};
  bottom: ${({ theme }) => theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.bgColorGray};
  max-width: ${({ theme }) => theme.pageWidth};
`;

export const LeftColumn = styled.div`
  width: ${leftWidth};
  padding-right: ${({ theme }) => theme.indent};
  overflow-y: auto;
  scrollbar-gutter: overlay;
  max-height: 100%;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${({ theme }) => theme.indent};
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;
