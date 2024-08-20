import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.garnish};
    border-radius: 8.942px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextContainer = styled.div`
    border-left: 2px dashed white;
    padding: 7px 9px;

    @media ${props => props.theme.devices.mobile} {
    };
`