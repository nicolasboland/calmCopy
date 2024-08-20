import styled from "styled-components";

export const Wrapper = styled.div<{ $isForMobile?: boolean }>`
    display: ${props => props.$isForMobile ? "none" : "flex"};
    border-style: solid;
    border-width: 1px;
    border-color: #c7c7c7;
    padding: 20px 10px;
    border-radius: 10px;
    margin: 15px 0;

    img {
        border-radius: 100%;
        padding: 5px;
    }

    @media ${ props => props.theme.devices.biggerMobile} {
        margin: 10px;
        display: ${props => props.$isForMobile ? "flex" : "none"};
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 5px 5px 10px;
`;

export const Button = styled.div`
    letter-spacing: .5px;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
        color: ${props => props.theme.colors.darkerWildViolet};
    }
`;