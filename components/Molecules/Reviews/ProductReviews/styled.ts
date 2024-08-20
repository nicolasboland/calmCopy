import styled from "styled-components";

export const ReviewsContainer = styled.div`
    margin-right: 10%;
    margin-left: 10%;
    padding: 2em;

    @media ${props => props.theme.devices.mobile} {
        margin-right: 1%;
        margin-left: 1%;
        padding: 1em;
    }
`;