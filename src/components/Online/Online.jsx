import React from "react";
import {
  Content,
  Flex,
  Left,
  Titulo,
  Texto,
  Coluna,
  Text,
  Texto1,
  Img,
  Right,
  Border,
  Texto2,
  Texto3,
  Texto4,
  Valores,
} from "./styles";
import Button from "../Button/Button";
import Container from "../Container/Container";

const Online = () => {
  return (
    <Content>
      <Container>
        <Flex>
          <Left>
            <Titulo>Our Online And ATM Exchange Rates</Titulo>
            <Texto>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Texto>
            <Coluna>
              <Text>USD</Text>
              <Valores>
                <Texto1>71,35</Texto1>
                <Img src="img/Polygon 1 (1).png" alt="" width={12} height={9} />
              </Valores>
              <Valores>
                <Texto1>76,55</Texto1>
                <Img src="img/Polygon 1 (1).png" alt="" width={12} height={9} />
              </Valores>
            </Coluna>
            <Coluna>
              <Text>EUR</Text>
              <Valores>
                <Texto1>84,98</Texto1>
                <Img
                  src="img/Polygon 1 (1).png"
                  alt=""
                  width={12}
                  height={12}
                />
              </Valores>
              <Valores>
                <Texto1>85,98</Texto1>
                <Img
                  src="img/Polygon 1 (1).png"
                  alt=""
                  width={12}
                  height={12}
                />
              </Valores>
            </Coluna>
          </Left>

          <Right>
            <Texto2>i’d like to sell</Texto2>
            <Border>
              <Texto3>10,000</Texto3>
              <Texto3>RUB</Texto3>
            </Border>
            <Texto4>i’ll get</Texto4>
            <Border>
              <Texto3>112,00</Texto3>
              <Texto3>RUB</Texto3>
            </Border>
            <Button className="botao4">Exchange Money</Button>
          </Right>
        </Flex>
      </Container>
    </Content>
  );
};

export default Online;
