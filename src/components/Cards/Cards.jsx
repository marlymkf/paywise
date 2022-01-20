import React from "react";

import {
  Content,
  Titulo,
  One,
  Texto,
  Box,
  Box1,
  Texto1,
  Texto2,
  Text,
  Cartao,
  Cartao1,
  Texto4,
  Texto5,
  Texto6,
  Texto11,
  Texto22,
} from "./styles";
import Button from "../Button/Button";
import Container from "../Container/Container";
const Cards = () => {
  return (
    <Container>
      <Content>
        <One>
          <Titulo>One Mission. Two Cards</Titulo>
          <Texto>
            We are providing our clients two cards for their one mission and
            finance
          </Texto>
        </One>
        <Box>
          <Box1>
            <Texto1>Petal 1</Texto1>
            <Texto2>Expanding Access Through Technology.</Texto2>
            <Text>. No annual fee (Late and returned less apply )</Text>
            <Text>. $500 - $5,000 limits</Text>
            <Text>. APRs 19.99% - 29.49%</Text>
            <Text>. 2% -10% cash back at select merchants</Text>
            <Button className="botao3">Learn More</Button>

            <Cartao>
              <Texto4>Visa</Texto4>
              <Texto5>Total balance</Texto5>
              <Texto6>$27,000.30</Texto6>
            </Cartao>
          </Box1>
          <Box1>
            <Texto11>Petal 2</Texto11>
            <Texto22>Responsible Credit Without Fees.</Texto22>
            <Text>. No annual fee (Late and returned less apply )</Text>
            <Text>. $500 - $5,000 limits</Text>
            <Text>. APRs 19.99% - 29.49%</Text>
            <Text>. 2% -10% cash back at select merchants</Text>
            <Button className="botao3">Learn More</Button>

            <Cartao1>
              <Texto4>Visa</Texto4>
              <Texto5>Total balance</Texto5>
              <Texto6>$27,000.30</Texto6>
            </Cartao1>
          </Box1>
        </Box>
      </Content>
    </Container>
  );
};

export default Cards;
