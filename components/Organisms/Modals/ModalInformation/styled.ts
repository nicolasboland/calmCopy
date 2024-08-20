import styled from 'styled-components'
import { theme } from "@/utils/Theme";


export const DivButtonModal = styled.div`
  width: 60%;
  cursor: pointer;
  display: inline;
`
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
  overflow-y: scroll;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  width: 355px;
  display: flex;
  flex-direction: column;
`
export const InformationModal = styled.div`
  padding: 10px 20px;
  margin-bottom: 1rem;
`
export const DivAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`
export const DivImgAlert = styled.div`
  width: 30%;
  display: flex;
`
export const DivCloseIcon = styled.div`
  position: absolute;
  width: 100%;
  cursor: pointer;
  
  button{
    padding: 10px;
    float: right;
  }
`

