import styled from "styled-components";

export const DivContainerQuizz = styled.div<{$quizzActive?: boolean}>`
  position: relative;
  display: ${(props) => props.$quizzActive ? "block" : "none"};

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9998;
  }
`

export const DivQuizz = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  transform: translate(-50%, -50%);
  background-color: ${props=>props.theme.colors.white};
  border-radius: 10px;
`

export const DivUnit = styled.div<{ $isfromNavBar?: boolean }>`
  position: relative;
  margin: ${props => props.$isfromNavBar ? "0" : "0.4rem 0.4rem 2rem 0.4rem"};
  display: inline-table;
  width: 280px;
  cursor: pointer;

  @media ${props=>props.theme.devices.mobile} {
    width: auto;
  }

`;