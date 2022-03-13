import { Link } from "react-router-dom";
import BallLogo from "../../assets/kgLogoBall.png";
import { Container, Logo, NavMenu, NavMenuItem } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo src={BallLogo} alt="Logo" />
      </Link>
      <NavMenu>
        <NavMenuItem href="/">Sobre</NavMenuItem>
        <NavMenuItem href="https://discord.com/invite/H9XrhE4c" target="_blank">
          Comunidade
        </NavMenuItem>
        <NavMenuItem href="/">Equipe</NavMenuItem>
        <NavMenuItem href="/">Contato</NavMenuItem>
      </NavMenu>
    </Container>
  );
};
