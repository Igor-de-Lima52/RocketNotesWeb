import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { FiPlus } from "react-icons/fi";
import { Container, Content, Data } from "./styles";

import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { CardParagraph } from "../../components/CardParagraph";
import { Tag } from "../../components/Tag";
import starImg from "../../assets/star.svg";

export function Home(){
  const [search, setSearch] = useState("");
  // const [tags, setTags] = useState([]);
  // const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes(){
      console.log(search);
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header>
        <input type="text" placeholder="Pesquisar pelo título" onChange={(e) => setSearch(e.target.value)} />
      </Header>
      <main>
        <Content>
          <header>
            <h2>Meus  Filmes</h2>
            <button><Link to="/new"><FiPlus/> Adicionar filme</Link></button>
          </header>
          <div className="scrollable">
            {
              notes.map(note => (
                <Section key={String(note.id)} >
                  <div className="card" onClick={() => handleDetails(note.id)}>
                    <Data>
                      <h2>{note.title}</h2>
                      <div>
                        <span className="rate">{note.rating}</span><img className="star" src={starImg} alt="Imagem de uma estrela rosa"/>
                      </div>
                    </Data>
                    <CardParagraph>
                      <p>{note.description}</p>
                    </CardParagraph>
                    {
                      note.tags && 
                      <div className="tags">
                        {
                          note.tags.map(tag=> <Tag key={tag.id} title={tag.name} /> )
                        }
                      </div>
                    }
                  </div>
                </Section>
              ))
            }
          </div>
        </Content>
      </main>
    </Container>
  )
}