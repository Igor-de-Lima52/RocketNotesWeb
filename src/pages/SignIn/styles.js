import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  > h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: bold;
  }

  > p{
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    font-size: 1.4rem;
    font-weight: 400;
  }

  > h2{
    margin: 4.8rem 0;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) center center;
  background-size: cover;
`;