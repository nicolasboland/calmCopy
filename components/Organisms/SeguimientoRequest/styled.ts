import styled from "styled-components";

export const ContainerRequest = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    @media ${props => props.theme.devices.mobile} {
        margin: 2rem 0;
    }
`

export const InputContainer = styled.div`
    position: relative;
    margin: 2rem auto;
`