import styled from "styled-components";

import { TitleSize } from "../../../style-const";

const StyledTitle = styled.h1.attrs((props) => ({
  children: props.children
}))`
  margin: 0;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : 0};
  font-weight: 700;
  font-size: ${(props) =>
    `${props.size.fontSize}px` || TitleSize.DEFAULT.fontSize};
  line-height: ${(props) =>
    `${props.size.lineHeight}px` || TitleSize.DEFAULT.lineHeight};
`;

export default StyledTitle;
