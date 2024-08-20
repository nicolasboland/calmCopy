import { theme } from "@/utils/Theme";
import styled from 'styled-components'

export const ContainerModal = styled.div`
  position: relative;

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

export const DivModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  width: 355px;
`

export const InformationModal = styled.div`
  padding: 10px 20px;
`

export const ContainarButton = styled.div`
  float: right;
  cursor: pointer;
  position: absolute;
  right: -13%;
  top: 0%;
  z-index: 9999;
`