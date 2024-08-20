import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
    margin-bottom: 2rem;

    @media ${({ theme }) => theme.devices.mobile} {
        flex-direction: column;
    }
`
export const Item = styled.div`
    width: 25%;
    p {
        width: 80%;
    }
    @media ${({ theme }) => theme.devices.mobile} {
        width: 100%;
        p {
            width: 100%;
            margin-bottom: 1rem;
        }
    }
`