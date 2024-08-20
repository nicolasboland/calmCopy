import styled from "styled-components";

export const SuscribeForm = styled.div`
    display: flex;
    flex-direction:row;
    margin-top:10px;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`;
