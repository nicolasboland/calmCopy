import styled from "styled-components";

export const Container = styled.div<{ $isFourItems?: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.ZZBPearl};
    margin: 10px 20px;
    margin: ${props => props.$isFourItems ? "10px 10px" : "10px 20px"};
    padding: 20px 30px;
    border-radius: 10.028px;
    flex: 1;

    @media ${props => props.theme.devices.mobile} {
      margin: 10px 20px;
  }
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InfoHeight = styled.div<{ $isFourItems?: boolean }>`
  height: ${props => props.$isFourItems ? "130px" : "190px"};

  @media ${props => props.theme.devices.mobile} {
    height: ${props => props.$isFourItems ? "130px" : "230px"};
  }
`