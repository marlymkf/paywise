import React from "react";
import {
  Rodape,
  Flex,
  Left,
  Img,
  Text,
  Input,
  Retangulo,
  Arrow,
  Texto,
  Right,
  Ul,
  ListaLink,
  Coluna,
  Texto1,
  RodapePeq,
  Texto2,
  Sociais,
} from "./styles";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Rodape>
      <Container>
        <Flex>
          <Left>
            <Img src="img/logo (6).png" alt="" width={285} height={73} />
            <Text>Subscribe to keep up with the latest news</Text>
            <Retangulo>
              <Input type="email" />
              <Arrow>
                <Img src="img/Arrow 1 (1).png" alt="" width={28} height={16} />
              </Arrow>
            </Retangulo>
            <Texto>
              by submitting this form,you acknowledge that you have the terms of
              our Privacy Statement
            </Texto>
          </Left>
          <Right>
            <Coluna>
              <Ul>
                <li>
                  <Texto1> Solutions</Texto1>
                </li>
                <li>
                  <ListaLink href="MasterCard">MasterCard</ListaLink>
                </li>
                <li>
                  <ListaLink href="Louis Vuitton">Louis Vuitton</ListaLink>
                </li>
                <li>
                  <ListaLink href="Gillette">Gillette</ListaLink>
                </li>
                <li>
                  <ListaLink href="Apple">Apple</ListaLink>
                </li>
                <li>
                  <ListaLink href="General Electric">
                    General Electric
                  </ListaLink>
                </li>
              </Ul>
              <Sociais>
                <a href="/">
                  <img src="img/facebook (2).png" alt="" />
                </a>
                <a href="/">
                  <img src="img/instragram.png" alt="" />
                </a>
                <a href="/">
                  <img src="img/twitter (2).png" alt="" />
                </a>
                <a href="/">
                  <img src="img/Vector (38).png" alt="" />
                </a>
              </Sociais>
            </Coluna>
            <Coluna>
              <Ul>
                <li>
                  <Texto1> Solutions</Texto1>
                </li>
                <li>
                  <ListaLink href="Home">Home</ListaLink>
                </li>
                <li>
                  <ListaLink href="About">About</ListaLink>
                </li>
                <li>
                  <ListaLink href="Services">Services</ListaLink>
                </li>
                <li>
                  <ListaLink href="Contact">Contact</ListaLink>
                </li>
                <li>
                  <ListaLink href="Term and conditions">
                    Term and conditions
                  </ListaLink>
                </li>
              </Ul>
            </Coluna>
          </Right>
        </Flex>
        <RodapePeq>
          <Texto2>Copyrighy @ Foodhub 2022</Texto2>
        </RodapePeq>
      </Container>
    </Rodape>
  );
};

export default Footer;
