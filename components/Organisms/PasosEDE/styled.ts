import { styled } from 'styled-components'

export const LandingContainer = styled.section`
  width: 100%;
  max-width: 1084px;
  margin: 2rem auto;
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100vw;

  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
    flex-direction: column-reverse;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    &:first-child {
      flex-direction: column;
    }
  }
`

export const MediaContainer = styled.div`
  padding: 10px;
  max-width: 700px;

  video {
    max-height: 500px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  @media ${(props) => props.theme.devices.biggerMobile} {
    margin: 0 auto;
  }

  @media ${(props) => props.theme.devices.mobile} {
    max-width: 768px;
    margin: 0;
    video {
    max-height: 300px;
    }
  }
`

export const DivContainer = styled.div`
  border: 1px solid ${props=>props.theme.colors.steam};
  border-radius: 10px;
  margin: 10px;
  max-width: 380px;

  @media ${(props) => props.theme.devices.mobile} {
    max-width: 100%;
  }
`
export const NuggetsContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;

  @media ${(props) => props.theme.devices.mobile} {
    max-width: 100%;
  }
`

export const PasoAPasoContainer = styled(DivContainer)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export const PasosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
      padding: 4px;
    }
    @media ${(props) => props.theme.devices.mobile} {
      flex-direction: column;
      gap: 0;
    }
  }

  
`

export const DivLine = styled.div`
  width: calc(100% - 20px);
  height: 30px;
  border-top: 1px solid ${props=>props.theme.colors.steam};
  margin: 0 auto;
  margin-top: 10px;

  @media ${(props) => props.theme.devices.mobile} {
    display: none;
  }
`
export const ReciclarContainer = styled(DivContainer)`
  
  max-width: 680px;
  display: flex;
  align-items: center;

  img {
    margin: 1rem;
  }

  @media ${(props) => props.theme.devices.mobile} {
    flex-direction: column;
    p {
      padding: 2rem;
    }

  }

`