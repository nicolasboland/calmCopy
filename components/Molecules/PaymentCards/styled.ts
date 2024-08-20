import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    div {
        margin: 5px 5px;
    }
    @media ${props => props.theme.devices.mobile} {
        width: 60%;
        gap: 5px;
    }
`