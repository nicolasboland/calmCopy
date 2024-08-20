import styled from "styled-components";

export const ContainerInfoReferidos = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1rem;
  padding-left: 5rem;
  max-width: 1240px;
  @media ${props => props.theme.devices.biggerMobile}{
    padding-left: 3rem;
  }
  @media ${props => props.theme.devices.mobile}{
   align-items: center;
   padding-left: 0;
   width: 100%;
  }
`;

export const CopyCoupon = styled.div`
  &:hover {
    background-color: ${props => props.theme.colors.yellowCalm};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  &:not(:hover) {
    transition: background-color 0.2s ease-in-out;
  }
`

export const CouponContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
`

export const CopiedText = styled.div<{ $hasBeenCopied: boolean }>`
  display: ${props => props.$hasBeenCopied ? "block" : "none"};
`

export const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`