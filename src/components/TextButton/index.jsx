import { Container } from "./styles";

export function TextButton({ isActive = false, ...rest }){
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      
    </Container>
  )
}