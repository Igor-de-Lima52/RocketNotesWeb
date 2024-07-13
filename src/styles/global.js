import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    font-size: 62.5%;
  }
  body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  body, input, textarea, button{
    font-size: 1.6rem;
    font-family: "Roboto Slab", serif;
    outline: none;
  }
  a{
    text-decoration: none;
  }
  button, a{
    cursor: pointer;
    transition: filter .2s;
  }
  button:hover, a:hover{
    filter: brightness(0.9);
  }
`;