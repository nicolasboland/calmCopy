import styled from "styled-components";

export const Container = styled.div `
  @media ${({ theme }) => theme.devices.mobile} {
    padding-top: 10px;
    padding: 0;
  }

`

export const ContainerBackColor = styled.div`
  background-color: ${({ theme }) => theme.colors.ZZBPearl};
`
