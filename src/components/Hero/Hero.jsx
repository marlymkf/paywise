import Header from "../Header/Header";
import Container from "../Container/Container";
import {
  Content,
  Left,
  Titulo,
  Img,
  Text,
  Coluna,
  Text1,
  Lore,
} from "./styles";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <Content>
      <Container>
        <Header />
        <Left>
          <Titulo>
            Your next<br></br>
            Online bank.
          </Titulo>
        </Left>
        <Lore>
          <Coluna>
            <Text>6X</Text>
            <Text1>
              Lorem ipsum<br></br> Dolor sit amet,
            </Text1>
          </Coluna>
          <Coluna>
            <Text>-15%</Text>
            <Text1>
              Lorem ipsum<br></br> Dolor sit amet,
            </Text1>
          </Coluna>
          <Coluna>
            <Text>3M+</Text>
            <Text1>
              Lorem ipsum<br></br> Dolor sit amet,
            </Text1>
          </Coluna>                           
        </Lore>
        <Button className="botao2">Download Now</Button> 
      </Container>
      <Img src="img/hero@2x.png" alt="" width={1412} height={941} />
    </Content>
  );
};

export default Hero;
