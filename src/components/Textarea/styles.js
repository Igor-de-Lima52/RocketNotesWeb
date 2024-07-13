import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 26rem;
  resize: none;
  border: none;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1rem;
  padding: 1.6rem;
  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;