import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px auto 0px auto;
  
  
  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    max-width: 1350px;
    margin: auto;
    padding-bottom: 50px;
  }

  @media ${(props) => props.theme.devices.mobile} {
    padding-bottom: 30px;
    margin-top: 15px;
  }
`

export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 600px;
  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: column;
    height: auto;
  }
`

export const WraperInfo = styled.div`
  width: 40%;
  padding-right: 2em;
  padding-left: 3em;
  border-right: solid 2px ${(props) => props.theme.colors.coldMorning};

  @media ${(props) => props.theme.devices.mobile} {
    margin: 20px 10px 0 10px;
    width: 100%;
    border: none;
  }
`

export const WraperImages = styled.div`
  width: 60%;
  @media ${(props) => props.theme.devices.mobile} {
    margin: 0 20px;
    width: 100%;
  }
`