import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Container, Form, InputWrapper } from "./styles";

export function New(){
  const handleDelete = e =>{
    e.preventDefault();
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft/>Voltar</Link>
          </header>
          <div className="scrollable">
            <div className="content">
              <h2>Novo filme</h2>
              <InputWrapper>
                <Input placeholder="Título"/>
                <Input placeholder="Sua nota (de 0 a 5)"/>
              </InputWrapper>
              <Textarea placeholder="Observações" />
              <Section title="Marcadores">
                <div className="tags">
                  <NoteItem value="React"/>
                  <NoteItem isNew placeholder="Nova tag"/>
                </div>
              </Section>
              <InputWrapper>
                <button onClick={handleDelete}>Excluir filme</button>
                <Button title="Salvar alterações" />
              </InputWrapper>
            </div>
          </div>
        </Form>
      </main>
    </Container>
  )
}