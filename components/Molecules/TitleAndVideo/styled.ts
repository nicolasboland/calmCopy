import styled from "styled-components";

export const Container = styled.div`
    max-width: 1134px;
    padding: 10px;
    margin: auto;
    
  @media ${props=>props.theme.devices.mobile} {
    padding: 0% 4% 0% 4%;
  }
`

export const Iframe = styled.iframe`
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  max-width: 100%;
  width: 100%;
  height: 436px;

@media (max-width: 768px) {
  height: 300px;
}
@media (min-width: 998px) {
  height: 576px;
}
@media (max-width: 698px) {
  height: 210px;
}
`;