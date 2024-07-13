import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";
import { Container, Form, Background } from "./styles";

export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Email" type="email" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>
        <Button title="Entrar" />
        <TextButton><Link to="/register">Criar conta</Link></TextButton>
      </Form>
      <Background />
    </Container>
  )
}
