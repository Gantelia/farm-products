import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${({ theme }) => theme.pagePadding};
  padding-right: ${({ theme }) => theme.pagePadding};
`;

export default Section;
