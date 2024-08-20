import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1em;
`;

const placeholderAnimate = keyframes`
    0%{ background-position: -650px 0; }
    100%{ background-position: 650px 0; }
`;

export const Content = styled.div`
    overflow: hidden;
    background: ${props => props.theme.colors.black};
    position: relative;
    margin: 5px;
    animation-duration: 1.7s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: ${placeholderAnimate};
    background: ${props => props.theme.colors.lynxWhite};
    background: linear-gradient(to right, ${props => props.theme.colors.superSilver} 2%, ${props => props.theme.colors.steam} 18%, ${props => props.theme.colors.superSilver} 33%);
    background-size: 1300px;
`;