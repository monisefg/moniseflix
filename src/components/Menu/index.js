import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Menu.css';
// import ButtonLink from "../ButtonLink";
import Button from '../Button';

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Moniseflix Logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
