import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.8rem auto;
  grid-template-areas: "header" "content";

  > main{
    grid-area: content;
    margin: 0 auto;
    width: 113.7rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 7.7rem auto;
  grid-template-areas: "Header" "Content";

  header{
    grid-area: Header;
    display: flex;
    align-items: center;

    a{
      align-self: center;
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: .8rem;
      font-size: 1.6rem;
    }
  }

  h2{
    font-size: 3.6rem;
    font-weight: 500;
    margin-right: 2rem;
  }
  .rate{
    font-size: 3rem;
    font-family: "Roboto", sans-serif;
  }
  .star{
    margin-left: .4rem;
    width: 3rem;
  }
  span{
    font-size: 1.2rem;
  }
  .title{
    display: flex;
    align-items: center;
  }
  .scrollable{
    grid-area: Content;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    height: 42rem;
    overflow-y: auto;
    text-align: justify;
    padding-right: 1rem;
  }
  .scrollable::-webkit-scrollbar{
    width: 10px;
  }
  .scrollable::-webkit-scrollbar-track{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  .scrollable::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 2rem;
  }
`;

export const Data = styled.ul`
  margin-top: 2.4rem;
  display: flex;
  gap: 1.2rem;
  
  img{
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
  }
  p{
    font-size: 1.6rem;
    font-family: "Roboto", sans-serif;
  }
  div{
    display: flex;
    align-items: center;
    gap: .8rem;
  }
`;