import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;

  @media ${({ theme }) => theme.devices.mobile} {
   margin: 5px 0;
  }
`

export const ContainerPrices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1/2;
    grid-row: 1/2;
    font-family: ${(props) => props.theme.fonts.regular}, "Arial";

    @media ${({ theme }) => theme.devices.mobile} {
    width: 55%;
  }
`

export const WrapperPrices = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const DivPillDiscount = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  @media ${({ theme }) => theme.devices.mobile} {
    width: 45%;
  }
`