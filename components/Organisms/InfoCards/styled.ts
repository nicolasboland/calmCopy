import styled from "styled-components";

export const DivHelp = styled.section`
  width: 75%;
  margin: 2rem auto;
  @media ${props =>  props.theme.devices.biggerMobile} {
    width: 95%;
  }

`;

export const DivCards = styled.section <{ $carousel?: boolean}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  @media ${(props) => (props.$carousel ? "initial" : props.theme.devices.mobile)} {
    flex-direction: column;
  }
`;