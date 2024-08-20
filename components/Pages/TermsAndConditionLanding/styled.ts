import styled from "styled-components";

export const TextContainer = styled.div`
    font-family: ${props => props.theme.fonts.regular};
    line-height: 1.618;
    text-align: left;
    color: ${props => props.theme.colors.steel};
    a {
        color: ${({ theme }) => theme.colors.yellowCalm};
    }
    ul {
        margin: 0 0 30px 40px;
    }
`

export const LoaderSpinner = styled.div`
    height: 100vh;
`