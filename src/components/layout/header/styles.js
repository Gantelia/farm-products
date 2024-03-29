import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 10px ${({ theme }) => theme.pagePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${({ theme }) => theme.headerHeight};
  background-color: #ffffff;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 1;
`;
