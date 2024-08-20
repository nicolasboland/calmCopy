import styled from 'styled-components';

export const LandingContent = styled.div`
  padding: 10px 5px;
  width: 97%;
  margin: auto;

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0px;
    width: 100%;
  }

  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
    max-width: 1350px;
    margin: auto;
  }
`

export const Wrapper = styled.div`
  max-width: 1350px;
  display:  "flex";
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;

  @media ${({ theme }) => theme.devices.mobile} {
    margin: auto;
    width: 100%;
    gap: 10px;
  }
`

export const Loaders = styled.div`
  margin: 30px 0;
  display: flex;
  gap: 20px;

  @media ${({ theme }) => theme.devices.mobile} {
    margin: 0;
    flex-direction: column;
  }
`

export const SpanColumns = styled.span`
  display: flex;
  gap: 1.6rem;
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.5rem;
    flex-direction: column;
    margin: auto;
  }
`

export const MainContentWrapper = styled.section`
  margin: auto;
`

export const Breadcrumbs = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 5px;

  @media ${({ theme }) => theme.devices.mobile} {
    display: none;
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 65%;
  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
  }
`

export const GalleryWrapper = styled.div`
  position: relative;
`

export const RightColumn = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.devices.mobile} {
    width: 94%;
    margin: 0px auto 20px auto;
  }
`

export const ImagePromo = styled.div`
  @media ${(props) => props.theme.devices.mobile} {
   display: none;
  }
`

export const PillCategoryDiscount = styled.div`
  color: white;
  background-color: ${(props) => props.theme.colors.offBlack};
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  grid-column: 1/3;
  grid-row: 2/3;
  border-radius: 50px;
  width: fit-content;
  padding: 0.2rem 0.5rem;
`

export const ButtonInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const ContainerPaymentMethod = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

export const DivTitlePills = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3rem 0;
`

export const MiniBannerMobile = styled.div`
  display: none;
  
  @media ${(props) => props.theme.devices.mobile} {
    display: block;
  }
`