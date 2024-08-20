import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  max-width: 1140px;
  min-width: 1140px;

  @media ${props=>props.theme.devices.mobile}{
    flex-direction: column;
    min-width: 0;
  }   
`
export const DivButton = styled.div`
  display: flex;
  margin: 20px 20px 20px 0px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0;

  }
`;
