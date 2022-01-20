import styled from "styled-components";
export const Content = styled.div`
  max-width: 1396px;
  margin: auto;
`;
export const Titulo = styled.h2`
  color: #575757;
  font-weight: 600;
  font-size: 48px;
  line-height: 132.5%;
  max-width: 476px;
  margin: auto;
  margin-top: 51px;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 38px;
    line-height: 102.5%;
  }
`;
export const Texto = styled.p`
  color: #575757;
  text-align: center;
  font-weight: normal;
  font-size: 24px;
  line-height: 132.5%;
  max-width: 564px;
  margin: auto;
  margin-bottom: 35px;
`;

export const Our = styled.div`
  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Left = styled.div``;
export const Box1 = styled.div`
  max-width: 400px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 67px 68px 72px 42px;
  margin-bottom: 73px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 50px 32px 36px 38px;
    margin-bottom: 20px;
  }
`;

export const Box2 = styled.div`
  background: #309975;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 67px 68px 72px 42px;
  margin-bottom: 73px;
  max-width: 400px;

  @media (max-width: 767px) {
    width: 100%;
    padding: 50px 32px 36px 38px;
  }
`;
export const Text = styled.p`
  color: #575757;
  font-weight: 600;
  font-size: 24px;
  line-height: 132.5%;
  margin-bottom: 10px;
`;
export const Text1 = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  line-height: 132.5%;
  margin-bottom: 10px;
`;
export const Texto1 = styled.p`
  color: #575757;
  font-weight: normal;
  font-size: 14px;
  line-height: 132.5%;
  max-width: 290px;
  margin-bottom: 10px;
`;

export const Texto2 = styled.p`
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  line-height: 132.5%;
  max-width: 290px;
  margin-bottom: 10px;
`;
export const Right = styled.div``;
export const Img = styled.img`
  @media (max-width: 767px) {
    display: none;
  }
`;
