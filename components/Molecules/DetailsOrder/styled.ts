import styled from "styled-components";

export const Container = styled.div`
    box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
    display: flex;
    padding: 25px;
    flex-direction: column;
    gap: 11px;
    border: 1px solid;
    border-radius: 10px;
    border-color: ${(props) => props.theme.colors.millionGray};
`

export const DetilsTitle = styled.div`
    padding: 5px 10px;
    border-bottom: 2px solid ${props => props.theme.colors.auberginnePerl};
`