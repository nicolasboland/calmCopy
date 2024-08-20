import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 1134px;
    padding: 10px;
    margin: auto;

    @media ${props => props.theme.devices.mobile} {
        flex-direction: column-reverse;
        padding: 0% 4% 4% 4%;
    }
`

export const QuizzContainaer = styled.div`
    width: 40%;
    background-color: ${props => props.theme.colors.yellowCalm};
    padding: 0 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px 0 0 10px; 

    @media ${props => props.theme.devices.mobile} {
        width: 100%;
        padding: 40px 30px;
        border-radius: 0 0 10px 10px;
        margin-top: -5px;
    }
`

export const QuizzImage = styled.div`
    width: 60%;

    @media ${props => props.theme.devices.mobile} {
        width: 100%;
    }
`