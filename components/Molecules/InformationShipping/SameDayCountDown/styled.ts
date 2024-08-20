import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`

export const TitleDiv = styled.div`
    display: flex;
    color: ${props => props.theme.colors.parkPicnic};
    margin-top: 10px;
    font-size: 15px;
`

export const SubtitleDiv = styled.div`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.millionGray};
    font-size: 13px;
    b {
        span {
            font-family: ${props => props.theme.fonts.bold};
        }
    }
`
