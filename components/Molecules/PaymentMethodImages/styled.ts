import styled from "styled-components";

export const DivPaymentMethod = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 2rem 0 2rem 0;

    @media ${props => props.theme.devices.mobile} {
        margin: 1.5rem 0 1.5rem 0;
    }
`

export const DivPaymentMethodImg = styled.div`
    width: 15%;
    padding: 10px;

    @media ${props => props.theme.devices.mobile} {
        padding: 8px;   
    }
`
export const ChildrenIconHolder = styled.div`
    height:40px;
    width:40px;
    margin:0px 10px 0px 10px;
`;