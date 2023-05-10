import styled from "styled-components";

export const Button = styled.button`
  font-weight: 700;
  border-radius: 12px;
  cursor: pointer;
  padding 12px 40px;
  border: none;
  outline: none;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  margin-top: 20px;
`

export const Card = styled.div`
  box-shadow: 0px 4px 4px #00000005;
  display: flex;
  align-items: center;
  width: 340px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 12px;
`

export const CardImg = styled.div`
  background-color: #FFEDEC;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E23428;
`

export const CardActive = styled(Card)`
  box-shadow: 0px 16px 30px #00000014;
`

export const CardImgActive = styled(CardImg)`
  background-color: #E23428;
  color: white;
`