import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Link } from "react-router-dom";
import { Container, Profile } from "./styles";

export function Header({ children }){
  const { signOut, user} = useAuth();
  const navigation = useNavigate();

  function handleSignOut(){
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
        <h1>RocketMovies</h1>
        { children }
      <Profile>
        <Link to="/profile"><img src={avatarUrl} alt={user.name} /></Link>
        <div>
          <Link to="/profile"><strong to="/profile">{user.name}</strong></Link>
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Profile>
    </Container>
  )
}