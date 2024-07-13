import styled from "styled-components";

export const Container = styled.section`
  margin: 4rem 0 0;
  
  > h2{
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  p{
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    line-height: 2.1rem;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
  }
  p + p{
    margin-top: 2.1rem;
  }
  .card{
    width: 100%;
    height: 22.2rem;
    padding: 3.2rem;
    background: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 1.6rem;

    > .tags{
      margin-top: 2rem;
    }

    > .tags span{
      background: ${({ theme }) => theme.COLORS.GRAY_400};
      color: ${({ theme }) => theme.COLORS.WHITE_400};
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
    }
  }
`;
