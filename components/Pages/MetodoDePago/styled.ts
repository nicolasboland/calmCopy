import styled from "styled-components";

export const CuotaSimple = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8rem;
    flex: 1;
    justify-content: center;

    @media ${props => props.theme.devices.mobile} {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 1rem;
    }
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    @media ${props => props.theme.devices.mobile} {
        flex-wrap: wrap;
    }
`