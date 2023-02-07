import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.bgColorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 14px 12px 13px 12px;
  font-size: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.basicTextColor};
  }
`;
