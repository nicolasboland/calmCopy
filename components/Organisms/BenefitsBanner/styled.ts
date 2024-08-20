import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.perfumeHaze};
  @media ${(props) => props.theme.devices.mobile} {
    height: 30px;
  }
`

export const BenefitWrapper = styled.div`
  display: flex;
  margin: 0 10px;
  @media ${(props) => props.theme.devices.mobile} {
    width: 100%;
    justify-content: center;
  }

  p {
    width: fit-content;
  }
`
