import { Container } from "./styles";

export function CardParagraph({ children, ...rest }){
  return (
    <Container { ...rest }>
      { children }
    </Container>
  )
}