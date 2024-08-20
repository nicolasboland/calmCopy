import styled from "styled-components";

export const DivSleepTest = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  max-width: 1100px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.colors.lynxWhite};
  border-radius: 15px 15px 15px 15px;

  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: column;
    padding: 50px 12px 10px 12px;
    background-color: ${(props) => props.theme.colors.lynxWhite};
  }
`;

export const DivImage = styled.div`
  width: 55%;
  height: auto;

  @media ${(props) => props.theme.devices.mobile} {
    width: 95%;
    order: 1;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;


export const DivTexto = styled.div`
  padding: 25px 70px 37px 70px;
  width: 45%;

  @media ${(props) => props.theme.devices.mobile}{
    width: 90%;
    padding: 0px;
    order: 2;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
