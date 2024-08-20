import { styled } from 'styled-components'

export const LandingContainer = styled.section`
  width: 100%;
  margin: 2rem auto;
`

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;


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
  }
`

export const ProductInfoContainer = styled.div`
  max-width: 380px;
  margin: 10px;

  @media ${(props) => props.theme.devices.biggerMobile} {
    max-width: 100%;
  }
`
