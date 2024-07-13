import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
  border: none;
  font-size: 1.6rem;
  font-family: "Roboto Slab", serif;
  margin: 4rem auto 0;

  a{
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: .8rem;
  }
  svg{
    font-size: 2rem;
  }
`;