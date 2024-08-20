import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.ZZBPearl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 40px 0;
`;

export const InputContainer = styled.div`
    width: 50vh;
    position: relative;

    @media ${props => props.theme.devices.mobile} {
      width: 40vh;
    }
`