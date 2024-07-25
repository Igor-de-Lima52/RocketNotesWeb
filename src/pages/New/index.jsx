import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import { api } from "../../services/api";

import { Container, Form, InputWrapper } from "./styles";

export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleBack(e){
    e.preventDefault();
    navigate(-1);
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota");
    }

    if(!rating){
      return alert("Digite a nota do filme de 0 a 5");
    }

    if(rating > 5 || rating < 0){
      return alert("A nota deve ser entre 0 e 5");
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.");
    }

    await api.post("/notes", { title, description, tags, rating});
    alert("Nota criada com sucesso!");
    navigate(-1);
  }
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <button onClick={handleBack}><FiArrowLeft/>Voltar</button>
          </header>
          <div className="scrollable">
            <div className="content">
              <h2>Novo filme</h2>
              <InputWrapper>
                <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
                <Input type="number" placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
              </InputWrapper>
              <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />
              <Section title="Marcadores">
                <div className="tags">
                  {
                    tags.map((tag, index)=> (<NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />))
                  }
                  <NoteItem isNew placeholder="Nova tag" onChange={e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag}/>
                </div>
              </Section>
              <InputWrapper>
                <Button title="Salvar" onClick={handleNewNote} />
              </InputWrapper>
            </div>
          </div>
        </Form>
      </main>
    </Container>
  )
}