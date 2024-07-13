import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.7rem auto;
  grid-template-areas: "header" "content";

  > main{
    width: 113.7rem;
    margin: 0 auto;
    grid-area: content;
  }
  .tags{
    width: 100%;
    height: 8.8rem;
    border-radius: .8rem;
    display: flex;
    justify-content: flex-start;
    gap: 2.4rem;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`;

export const Form = styled.form`
  max-width: 110rem;
  margin: 4rem auto 0;
  display: grid;
  grid-template-rows: 4.5rem auto;
  grid-template-areas: "Header" "Content";

  > header{
    grid-area: Header;
    display: flex;
    margin-bottom: 4rem;
    
    a{
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
      gap: .8rem;
    }
  }
  > .scrollable{
    grid-area: Content;
    height: 40rem;
    overflow-y: auto;
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
  .content{
    padding-right: 1rem;
    
    textarea{
      margin-top: 2.4rem;
    }

    > h2{
      font-size: 3.6rem;
      font-weight: 500;
    }
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2.4rem;

  
  
  > button:nth-child(1){
    height: 6rem;
    width: 100%;
    border: 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
    font-weight: 500;
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    border-radius: 1rem;

    &:disabled{
      opacity: 0.5;
    }
  }
  > button:nth-child(2){
    height: 6rem;
  }
`;