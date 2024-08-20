import styled from "styled-components"

export const ItemWrapper = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    @media ${props => props.theme.devices.biggerMobile} {
        width: 60%;
    }
`;

export const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: ${props => props.theme.colors.yellowCalm};
    margin-bottom: 10px;
`;