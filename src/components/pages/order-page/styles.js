import styled from "styled-components";
import { Section, Label } from "../../styled";
import { TextInput } from "../../ui/text-input/text-input";

const leftWidth = "353px";

export const StyledOrder = styled(Section)`
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.bgColorGray};
  max-width: ${({ theme }) => theme.pageWidth};
  width: auto;
  height: 100%;
`;

export const LeftColumn = styled.div`
  width: ${leftWidth};
  padding-right: ${({ theme }) => theme.indent};
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
  margin-bottom: 32px;
`;
