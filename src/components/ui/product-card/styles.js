import styled from "styled-components";

import { Img } from "../../styled/index.js";
import Title from "../title/title.js";

export const ProductImage = styled(Img)`
  width: 248px;
  height: 248px;
  margin-right: 20px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  float: right;
  width: 417px;
  min-height: 248px;
  padding-bottom: 30px;
`;

export const ProductTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  vertical-align: center;
  background-color: ${({ theme }) => theme.bgBasicColor};
`;
