import { Link } from "react-router-dom";
import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
        <h1>RocketMovies</h1>
        <input type="text" placeholder="Pesquisar pelo título"/>
      <Profile>
        <Link to="/profile"><img src="https://github.com/Igor-de-Lima52.png" alt="Foto do usuário" /></Link>
        <div>
          <Link to="/profile"><strong to="/profile">Igor de Lima</strong></Link>
          <button>Sair</button>
        </div>
      </Profile>
    </Container>
  )
}