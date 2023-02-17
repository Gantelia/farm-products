import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";

import { Section, Label } from "../../styled/index.js";
import { TextInput } from "../../ui/text-input/text-input.js";
import selectedCheckbox from "../../../assets/svg/checkbox-checked.svg";
import Price from "../../ui/price/price.jsx";

const leftWidth = "373px";

export const StyledOrder = styled(Section)`
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
  max-height: 100%;
  overflow-y: auto;
  scrollbar-gutter: stable;
  margin-right: auto;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${({ theme }) => theme.indent};
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
  margin-bottom: 32px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;
  margin-left: 0;
  margin-right: 0;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: block;
  padding-top: 15px;
  padding-right: 16px;
  padding-bottom: 14px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    top: 17px;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${selectedCheckbox});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            background-color: ${props.theme.bgLightColor};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const AllProductsSold = styled.p`
  margin-top: 40px;
  width: ${({ theme }) => theme.pageWidth};
  margin-left: ${({ theme }) => theme.pagePadding};
  margin-right: ${({ theme }) => theme.pagePadding};
`;
