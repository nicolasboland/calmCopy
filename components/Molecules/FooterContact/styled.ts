import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    @media ${props => props.theme.devices.mobile} {
        height:100%;
    }
`;

export const ChatHandler = styled.div`
    cursor: pointer;
    margin-top: 20px;
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
`