import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Section, Label } from "../../styled/index.js";
import { TextInput } from "../../ui/text-input/text-input.js";

const leftWidth = "353px";

export const StyledOrder = styled(Section)`
  display: flex;
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.bgColorGray};
  max-width: ${({ theme }) => theme.pageWidth};
  width: 100%;
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

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
