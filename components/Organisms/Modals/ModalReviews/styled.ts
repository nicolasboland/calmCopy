import styled from 'styled-components'
import { theme } from "@/utils/Theme";

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

export const DivModalReviews = styled.div`
  overflow-y: scroll;
  position: fixed;
  max-height: 600px;
  top: 50%;
  left: 50%;
  margin: auto;
  box-shadow: 2px 8px 23px 3px rgba(0, 0, 0, 0.2);
  z-index: 9998;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 550px;

  @media ${(props) => props.theme.devices.mobile} {
    max-height: 500px;
    width: 350px;
  }
`
export const InformationModal = styled.div`
  padding: 10px 20px;
  margin-bottom: 1rem;
`

export const ButtonContainer = styled.div`
  float: right;
`