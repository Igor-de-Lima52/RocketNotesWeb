import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.7rem auto;
  grid-template-areas: "header" "content";
  overflow-y: hidden;
  > main{
    grid-area: content;
    width: 113.7rem;
    margin: 3.2rem auto;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 7.8rem auto;
  grid-template-areas: "Header" "Content";
  > header{
    grid-area: Header;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;

    h2{
      font-size: 3.2rem;
      font-weight: 400;
    }
    button{
      border: 0;
      border-radius: .8rem;
      
      font-size: 1.8rem;
      font-family: "Roboto Slab", serif;

      a{
        border-radius: .8rem;
        padding: 1.4rem 3rem;
        display: flex;
        align-items: center;
        gap: .8rem;
        background: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
    }
  }
  .scrollable{
    grid-area: Content;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    height: 40rem;
    overflow-y: auto;
  
    section{
      margin: 0;
      &:hover{
        cursor: pointer;
      }
    }
    a{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: "Roboto Slab", serif;
      font-size: 1.6rem;
    }
    > a{
      padding-right: 1rem;
    }
  }
  .scrollable::-webkit-scrollbar {
    width: 10px;
  }
  .scrollable::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  .scrollable::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 2rem;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  margin-bottom: 1.4rem;

  > div{
    display: flex;
    gap: .2rem;
    align-items: center;
    
    span, svg{
      font-size: 2rem;
    }
  }
`;
