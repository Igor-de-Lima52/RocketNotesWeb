import { useEffect, useState } from "react";
import { Container, Content, Data } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { FiArrowLeft } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import starImg from "../../assets/star.svg";
import clockImg from "../../assets/clock.svg";

import { api } from "../../services/api";

export function Preview(){
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack(){
    navigate(-1);
  }
  async function handleRemove(e){
    e.preventDefault();

    const confirm = window.confirm("Deseja realmente remover o filme?");
  
    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(()=>{
    async function fetchMovie(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchMovie();
  }, []);
  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <header>
              <button onClick={handleBack}><FiArrowLeft/>Voltar</button>
            </header>
            <div className="scrollable">
              <div className="content">
                <div className="title">
                  <h2>{data.title}</h2>
                  <span className="rate">{data.rating}</span><img className="star" src={starImg} alt="Imagem de uma estrela rosa"/>
                </div>
                <Data>
                  <div>
                    <img src={avatarUrl} alt={user.name} />
                    <p>Por {user.name}</p>
                  </div>
                  <div>
                    <img src={clockImg} alt="Imagem de um relógio rosa"/>
                    <p>{data.created_at}</p>
                  </div>
                </Data>
                {
                  data.tags &&
                  <Section>
                    {
                      data.tags.map(tag => (<Tag key={String(tag.id)} title={tag.name} />))
                    }
                  </Section>
                }
              </div>
              {
                data.description && 
                <Section>
                  <p>{data.description}</p>
                </Section>  
              }
              <button onClick={handleRemove}>Excluir filme</button>
            </div>
          </Content>
        </main>
      }
    </Container>
  )
}