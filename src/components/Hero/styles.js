import styled from "styled-components";

export const Content = styled.div`
  background-color: #309975;
  position: relative;
  margin-right: 0;
  z-index: 1;
`;
export const Left = styled.div`
  max-width: 704px;
  display: flex;
  justify-content: space-between;
`;
export const Titulo = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 80px;
  line-height: 110.5%;
  border-bottom: 3px solid #ffffff;
  margin-bottom: 34px;
  padding-bottom: 15px;

  @media (max-width:767px) {
    font-size:54px;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

  @media (max-width:767px) {
    display:none;
  }
`;
export const Text = styled.p`
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;

  @media (max-width:767px) {
    font-size: 32px;
  }
`;
export const Text1 = styled.p`
  color: #ffffff;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
`;

export const Coluna = styled.div`
max-width: 137px;
margin: 0 36px;
padding-bottom:149px;

&:first-child {
  margin-left:0;
}
@media (max-width:767px) {
  margin:0 15px;
  padding-bottom:80px;
}
`;
export const Lore = styled.div`
  display: flex;
  justify-content:flex-start;
  
`;
