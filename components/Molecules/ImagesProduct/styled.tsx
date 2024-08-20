import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    @media ${props => props.theme.devices.mobile} {
        width: 100%;
        padding: 10px 0;
        max-height: initial;
    }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 6px;
  flex: 1;
`;

export const ImageContainer = styled.div<{$ratio?: number, $isLast?: boolean}>`
  flex: ${(props => props.$ratio)};
  position: relative; 

  @media ${props => props.theme.devices.mobile} {
        border: 1px solid grey;
        border-radius: 10.931px;
        margin-bottom: ${props => props.$isLast ? "5px" : "40px"};
        padding-bottom: 30px;
    }
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 30px;
    left: 24px;

    @media ${props => props.theme.devices.mobile} {
        position: relative;
        top: initial;
        left: initial;
        padding: 20px 10px 0 10px;
        text-align: center;
    }
`

export const ImageDegrade = styled.div`
  position: relative;
  &:hover {
    transform: scale(1.05);
    transition: 1.5s;
  }
 /*  @media ${props => props.theme.devices.mobile} {
   
    &:hover {
      transform: none;
    transition: none;
  }
  } */
`

export const Degrade = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10.931px;
  background: linear-gradient(to top left, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8));
  pointer-events: none;
`