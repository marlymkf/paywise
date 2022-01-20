import React, { useState } from "react";
import Button from "../Button/Button";
import { Cabecalho, Lista, ListaLink, Left, Hamburger,
  BtnMobile, } from "./styles";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Cabecalho className={isMenuOpen ? "active" : ""}>
      <img src="img/Logo (5).png" alt="paywise" width="182" height="47" />
      <Lista className="nav">
        <li>
          <ListaLink href="Home">Home</ListaLink>
        </li>
        <li>
          <ListaLink href="Features">Features</ListaLink>
        </li>
        <li>
          <ListaLink href="Cards">Cards</ListaLink>
        </li>
        <li>
          <ListaLink href="Contact">Contact</ListaLink>
        </li>
        
      </Lista>
      <Left>
        <li>
          <ListaLink href="Log in">Log in</ListaLink>
        </li>
        <Button className="botao">Sign Up</Button>
        <BtnMobile id="btn-mobile" onClick={handleMenu}>
          Menu
          <Hamburger id="hamburger" />
        </BtnMobile>
      </Left>
    </Cabecalho>
  );
};
export default Header;