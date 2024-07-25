import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.PINK};
  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
  border-radius: 1rem;
  padding-right: 1.6rem;
  
  button{
    border: none;
    background: none;
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