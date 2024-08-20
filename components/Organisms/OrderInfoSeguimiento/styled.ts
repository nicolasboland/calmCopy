import styled from "styled-components";


export const ContainerAnswer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
`

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;

    @media ${props => props.theme.devices.mobile} {
        margin: 3rem 0;
        width: auto;
    }
`

export const ShipmentOrderCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    @media ${props => props.theme.devices.mobile} {
        flex-direction: column;
        width: 90%;
        margin: auto;
        gap: 0;
    }
`