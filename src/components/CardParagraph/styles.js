import styled from "styled-components";

export const Container = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 5.2rem;
  
  p{
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;