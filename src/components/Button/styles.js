import styled from "styled-components";
export const Botao = styled.button`
  background: #dad873;
  border-radius: 5px;
  color: #309975;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  padding: 11px 41px;
  border: 0;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
    padding: 8px 14px;
  }
  &.botao2 {
    color: #309975;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-transform: capitalize;
    padding: 22px 35px;
    background: #dad873;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-bottom: 250px;

    @media (max-width: 767px) {
      margin-bottom: 100px;
    }
  }
  &.botao3 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #575757;
    padding: 19px 44px;
    background: #f8bf88;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 88px;

    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
  }
  &.botao4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 105%;
    color: #20656f;
    background: #ffca63;
    border-radius: 5px;
    padding: 25px 23px;
    margin-top: 44px;
  }
`;
