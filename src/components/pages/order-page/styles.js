import styled from "styled-components";
import { Swiper } from "swiper/react";

import { Section, Label } from "../../styled/index.js";
import { TextInput } from "../../ui/text-input/text-input.js";

const leftWidth = "353px";

export const StyledOrder = styled(Section)`
  display: flex;
  position: absolute;
  top: ${({ theme }) => theme.headerHeight};
  bottom: ${({ theme }) => theme.footerHeight};
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.bgColorGray};
  max-width: ${({ theme }) => theme.pageWidth};
  width: 100%;
`;

export const LeftColumn = styled.div`
  width: ${leftWidth};
  padding-right: 6px;
  max-height: 100%;
  overflow-y: auto;
  scrollbar-gutter: stable;
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
  font-weight: 700;
  margin-bottom: 32px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  margin-left: 0;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
