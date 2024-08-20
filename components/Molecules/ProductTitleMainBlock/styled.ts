import styled from "styled-components";

export const ComponentWrapper = styled.div`

    @media ${props => props.theme.devices.mobile} {
    }
`;

export const TitleWrapper = styled.div`
    max-width: 450px;
    display: flex;
    flex-direction: column;

    @media ${props => props.theme.devices.mobile} {
        gap: 0.1rem;
    }
`;