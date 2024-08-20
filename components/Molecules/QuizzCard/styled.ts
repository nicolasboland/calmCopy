import styled from "styled-components";

export const Container = styled.div<{ $isfromNavBar?: boolean }>`
  position: relative;
  margin: ${props => props.$isfromNavBar ? "0" : "0.4rem 0.4rem 2rem 0.4rem"};
  display: inline-table;
  width: 280px;
  cursor: pointer;

  @media ${props=>props.theme.devices.mobile} {
    width: auto;
  }

`;

export const TextMobile = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`