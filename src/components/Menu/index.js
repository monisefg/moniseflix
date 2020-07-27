import React from "react";
import Logo from "../../assets/logo.png";
import "./Menu.css";
//import ButtonLink from "../ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Moniseflix Logo"></img>
        </a>

        <Button className="ButtonLink" href="/">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
}

export default Menu;
