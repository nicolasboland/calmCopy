import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2em 0;
`;

export const Content = styled.div`
    width: 60%;
    height: 400px;
    @media ${props => props.theme.devices.mobile} {
        width: 95%;
    }
`;

export const IFrame = styled.iframe<{$visible?: boolean}>`
    width: 100%;
    height: 100%;
    border-radius: 3em;
    display: ${props => props.$visible ? "block" : "none"};
`;

export const Window = styled.div<{$visible?: boolean}>`
    display: ${props => props.$visible ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 3em;
    background-image: url(https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/43893a75-d026-4a45-4a9a-ca2eba10ed00/fit=cover);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
    display: flex;
`