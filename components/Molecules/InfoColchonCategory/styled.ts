import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    gap: 10px;
`

export const Specs = styled.div<{ $isCirculacion?: boolean }>`
    display: flex;
    flex-direction: ${props => props.$isCirculacion ? "row" : "column"};
    align-items: center;
    flex: 1;
    ${props => props.$isCirculacion && `
    border: 1px solid ${props.theme.colors.whiteEdgar};
    border-radius: 16px;
    padding: 15px 15px;
    margin: 0px 10px;
    `};

    @media ${props => props.theme.devices.mobile} {
    ${props => props.$isCirculacion && `
    flex-direction: column;
    padding: 10px 10px;
    margin: 0px 5px;
    `};
    }
`