import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  button{
    border: none;
    background: none;
  }
  .add{
    border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 1rem;
    display: flex;
    padding-right: 1.6rem;
  }
  .delete{
    background: ${({ theme }) => theme.BACKGROUND_900};
    border-radius: 1rem;
    display: flex;
    padding-right: 1.6rem;
  }
  .button-delete{
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  .button-add{
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  input{
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;