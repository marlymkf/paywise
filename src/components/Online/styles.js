import styled from "styled-components";
export const Content = styled.div`
  background-color: #309975;
  position: relative;
  margin-right: 0;
  z-index: 1;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 133px 188px 60px 52px;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 48px 20px;
  }
`;

export const Left = styled.div`
  max-width: 531px;
`;
export const Titulo = styled.h2`
  color: #ffffff;
  font-weight: 500;
  font-size: 48px;
  line-height: 50px;
  margin-bottom: 16px;

`;

export const Texto = styled.p`
  color: #ffffff;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 127px;

  @media (max-width: 991px) {
    margin-bottom: 80px;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 105%;
  color: #ffffff;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Texto1 = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 36px;
  line-height: 105%;
  margin-right: 0;
`;

export const Coluna = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 446.39px;
  margin: auto;
  align-items: center;
  padding-bottom: 75px;
  flex-wrap: wrap;

  @media (max-width: 991px) {
   padding-bottom: 30px;
   margin: 0;
  }
`;
export const Img = styled.img`
  margin-left: 6px;
`;
export const Right = styled.div`
  max-width: 327px;
`;
export const Texto2 = styled.p`
  margin-top: 232px;
  font-weight: normal;
  font-size: 18px;
  line-height: 105%;
  color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 991px) {
    margin-top: 50px;
  }
`;
export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #ffffff;
  padding: 16px 41px;
  min-width: 327px;

  @media (max-width: 767px) {
    min-width: 304px;
  }
`;
export const Texto3 = styled.p`
  box-sizing: border-box;
  font-weight: normal;
  font-size: 36px;
  line-height: 105%;
  color: #ffffff;
`;
export const Texto4 = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 105%;
  color: #ffffff;
  margin-bottom: 10px;
  margin-top: 32px;
`;
export const Valores = styled.div`
  display: flex;
  align-items: center;
`;
