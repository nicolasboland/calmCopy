import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1140px;
  min-width: 1140px;

  @media ${props=>props.theme.devices.mobile}{
    flex-direction: column;
    min-width: 0;
  }   
`

export const ImageDiv = styled.div<{$imagePosition: 'left' | 'right' }>`
  order: ${({ $imagePosition }) => $imagePosition === "left" ? 1 : 3};
  width: 10%;
  margin: 50px;

  @media ${props=>props.theme.devices.mobile}{
    width: 30%;
    margin: 30px;
    order: 1;
    }   
`

export const TextDiv = styled.div`
  order: 2;
  width: 71%;

  @media ${props=>props.theme.devices.mobile}{
    width: 95%;
    }  
`

export const EmptySpace = styled.div<{$imagePosition: 'left' | 'right' }>`
  order: ${({ $imagePosition }) => $imagePosition === "left" ? 3 : 1};
  width: 18%;

  @media ${props=>props.theme.devices.mobile}{
    width: 0%;
    }   
`