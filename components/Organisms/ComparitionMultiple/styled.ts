import styled from "styled-components";

export const Container = styled.div<{ $isThreeItems?: boolean}>`
    display: flex;
    flex-direction: column;
    flex-direction: ${props => props.$isThreeItems ? "column" : "row"};
    margin: 40px 60px;

  @media ${props => props.theme.devices.mobile} {
    flex-direction: column;
    margin: 30px 5px 5px 5px;
  }

  @media ${(props) => props.theme.devices.middleResolutionDesktop} {
/*     max-width: 1240px; */
  max-width: 1350px;
    margin: 40px auto;
  }
`

export const ContainerText = styled.div<{ $isThreeItems?: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${props => !props.$isThreeItems && "width: 40%; padding-right: 110px;"};

    @media ${props => props.theme.devices.mobile} {
      width: 100%;
      padding-right: 0;
      align-items: center;
  }
`

export const ContainerCards = styled.div<{ $isThreeItems?: boolean}>`
  display: flex;
  ${props => !props.$isThreeItems && "width: 60%;"};
  @media ${props => props.theme.devices.mobile} {
    display: none;
  }
`

export const Select = styled.select`
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border-radius: 4px;
    border: 0.75px solid ${props => props.theme.colors.lead};
    font-family: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.lead};
    line-height: 100%;
    font-size: 1rem;
`

export const ContainerCardsMobile = styled.div`
  display: none;
  @media ${props => props.theme.devices.mobile} {
    display: block;
  }
`