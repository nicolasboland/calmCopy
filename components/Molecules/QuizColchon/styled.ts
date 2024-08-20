import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.ZZBPearl};
    padding: 30px 25px;
    border-radius: 8px;

  @media ${props => props.theme.devices.mobile} {
    margin: 0 20px;
  }
`
