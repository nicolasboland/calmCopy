import styled from "styled-components";

export const Socials = styled.div`
    display:flex;
    justify-content:center;
    margin-top:25px;
`;

export const SocialDiv = styled.div`
    background-color: ${props => props.theme.colors.offBlack};
    border-radius: 50px;
    height:30px;
    width:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    a {
        display:flex;
        justify-content:center;
        align-items:center;
    }
`;