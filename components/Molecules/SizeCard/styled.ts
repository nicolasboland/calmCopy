import styled from "styled-components"

export const Container = styled.div<{ $isSelected:boolean, $landing?: string }>`
    border-radius: 10px;
    border: ${({ $isSelected, theme }) => $isSelected ? `2px solid ${theme.colors.yellowCalm}` : `0.5px solid ${theme.colors.millionGray}`};
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    width: ${ props => props.$landing === "accesorios" || props.$landing === "almohadas" ? "48%" : "32.3%"};
    height: 58px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media ${({theme}) => theme.devices.mobile} {
        margin-bottom: 5px;
        width: ${ props => props.$landing === "accesorios" || props.$landing === "almohadas" ? "48%" : "30%"};
        height: 45px;
  }
`