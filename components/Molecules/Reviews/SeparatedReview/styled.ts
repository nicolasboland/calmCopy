import styled from "styled-components";

export const NuggetWrapper = styled.div`
    padding-top: .6rem;
    max-width: 420px;
    height: 145px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    .u-textSentenceCase {
        font-family: ${props => props.theme.fonts.extraBold}, "Arial";
    }
    .NuggetsWidget-prefix .NuggetsWidget .NuggetsWidget__heading .R-TextHeading:not(.NuggetsWidget__quotationMark) {
        -webkit-line-clamp: 3 !important;
        text-overflow: ellipsis;
    }
`;