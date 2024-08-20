import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => props.theme.colors.ZZBPearl};
  margin-top: 50px;
  
  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    max-width: 1240px;
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
  height: 500px;

  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: column;
    height: auto;
  }
`

export const WraperInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.devices.mobile} {
    margin: 20px 10px 0 10px;
  }
`

export const WraperImages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media ${(props) => props.theme.devices.mobile} {
    margin: 0 20px;
  }
`