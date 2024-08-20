import styled from "styled-components";

export const ContainerTabla = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 1240px;
`;

export const ContainerTitles = styled.div`
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.yellowCalm};
    height: 3rem;
    p {
      width: 50%;
    }
`

export const Referidos = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.devices.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`

export const ContainerBoxRefes = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  margin: 7px 0;
  width: 100%;

  @media ${props => props.theme.devices.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 50%;

  @media ${props => props.theme.devices.mobile} {
    width: 100%;
  }
`

export const SegmentsText = styled.div`
  display: flex;
  gap: 5rem;

  @media ${props => props.theme.devices.mobile} {
    gap: 2.6rem;
  }
`