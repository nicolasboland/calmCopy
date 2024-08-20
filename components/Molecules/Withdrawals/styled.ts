import styled from "styled-components";

export const DivWithdrawals = styled.section`
    background-color: ${props=>props.theme.colors.lynxWhite};
    padding: 20px 0px 20px 0px;
`

export const DivWithdrawalsText = styled.div`
    width: 57%;
    margin: auto;
    @media  ${props=>props.theme.devices.mobile} {
        width: 90%;
  }
`  