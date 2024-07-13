import { Link } from "react-router-dom";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile(){
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/Igor-de-Lima52.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input readOnly placeholder="Igor Nascimento de Lima" type="text" icon={FiUser}/>
        <Input readOnly placeholder="igor@email.com" type="email" icon={FiMail}/>
        <Input placeholder="Senha atual" type="password" icon={FiLock}/>
        <Input placeholder="Nova senha" type="password" icon={FiLock}/> 
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}