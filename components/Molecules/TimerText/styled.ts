import styled from "styled-components";

export const Container = styled.div`
    width: 30px;

    @media ${props => props.theme.devices.mobile} {
        width: 30px;
    }
`