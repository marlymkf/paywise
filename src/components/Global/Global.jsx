import React from "react";
import {
  Content,
  Our,
  Titulo,
  Texto,
  Box,
  Left,
  Box1,
  Text,
  Texto1,
  Right,
  Img,
  Box2,
  Text1,
  Texto2,
} from "./styles";
import Container from "../Container/Container";

const Global = () => {
  return (
    <Container>
      <Content>
        <Our>
          <Titulo>Our Global Services</Titulo>
          <Texto>
            we providing our clients two cards for their one mission and finance
          </Texto>
        </Our>
        <Box>
          <Left>
            <Box1>
              <Text>Bank Transfer</Text>
              <Texto1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Texto1>
            </Box1>
            <Box1>
              <Text>Bank Transfer</Text>
              <Texto1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Texto1>
            </Box1>
          </Left>

          <Img src="img/global-svgrepo-com 1.png" alt="" width={302} height={302} />
          <Right>
            <Box2>
              <Text1>Bank Transfer</Text1>
              <Texto2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Texto2>
            </Box2>
            <Box1>
              <Text>Bank Transfer</Text>
              <Texto1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </Texto1>
            </Box1>
          </Right>
        </Box>
      </Content>
    </Container>
  );
};

export default Global;
