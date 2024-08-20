import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px  rgba(0,0,0,0.2);
    width: 350px;

    @media ${props => props.theme.devices.mobile} {
        width: 300px;
    }
`

export const TitleDate = styled.div`
    background-color: ${props => props.theme.colors.yellowCalm};
    border-bottom: 4px solid ${props => props.theme.colors.auberginnePerl};
    border-radius: 5px 5px 0 0;
    padding: 10px;
`

export const ShipmentTracker = styled.div`
    display: flex;
    padding: 0 10px;
`

export const InstanceText = styled.div`
    display: flex;
    flex-direction: column;
    height: 96px;
`

export const InstancesShipment = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3px 0 0 5px;
`