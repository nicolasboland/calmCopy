import styled from "styled-components";

export const StyledContainer = styled.footer<{ $showFooter?: boolean }>`
    position:relative;
    padding: 30px 70px;
    height: 100%;
    background-color: ${props => props.theme.colors.coldMorning};
    margin-bottom: -20px;
    display: ${props => props.$showFooter ? "flex" : "none"};
    width: 100%;

    @media ${props => props.theme.devices.biggerMobile} {
        flex-direction: column-reverse;
        padding: 20px;
    }
    
    @media ${props => props.theme.devices.mobile} {
    }
`;

export const InfoColumn = styled.div`
    display: flex;
    width: 33.3%;
    justify-content: space-evenly;

    @media ${props => props.theme.devices.biggerMobile} {
        width: 100%;
    }
`

export const NewsLetterContainer = styled.div`
    display: flex;
    justify-content:start;
    flex-direction: column;
    
    @media ${props => props.theme.devices.mobile} {
        align-items:center;
    }
`;
