import styled from "styled-components";

import { ProductProvider } from "../../../style-const";

export const Feature = styled.article`
  padding: ${(props) => props.theme.indent};
  height: 100%;
  background-color: ${(props) =>
    props.provider === ProductProvider.FARM
      ? props.theme.farmFeatureColor
      : props.theme.shopFeatureColor};
`;

export const Header = styled.header`
  padding-left: 76px;
  position: relative;
  margin-bottom: ${(props) => props.theme.indent};

  &::before {
    content: "";
    width: 56px;
    height: 56px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
  }
`;
