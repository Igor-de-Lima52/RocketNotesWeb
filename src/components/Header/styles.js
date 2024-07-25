import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  height: 11.6rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.3rem;

  > h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    font-weight: bold;
  }

  > input{
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border: none;
    border-radius: 1rem;
    height: 5.6rem;
    width: 50%;
    padding: 1.9rem 2.4rem;
    margin-left: 6rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: .9rem;

  img{
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    object-fit: cover;
  }
  > div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 6.4rem;
    line-height: 2.4rem;

    strong{
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE_300};
    }
    button{
      border: none;
      background: transparent;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;