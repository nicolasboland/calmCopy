import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
    @media ${props => props.theme.devices.mobile} {
        flex: 1;
    }
`