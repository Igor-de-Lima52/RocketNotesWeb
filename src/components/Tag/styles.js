import styled from "styled-components";

export const Container = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.WHITE_400};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: .8rem 1.6rem;
  margin-right: .8rem;
  border-radius: .8rem;
`;