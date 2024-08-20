import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 30px 20px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.devices.biggerMobile} {
    flex-direction: column;
    gap: 5px;
    padding: 0px;
    /* padding: 10px 20px 30px 20px; */
  } 
`

export const Wraper = styled.div<{ $isForm?: boolean }>`
  flex-basis: ${props => props.$isForm ? "50%" : "40%"};
  padding: 100px 0;

  @media ${({ theme }) => theme.devices.middleResolutionDesktop} {
    flex-basis: ${props => props.$isForm ? "40%" : "50%"};
  } 

  @media ${({ theme }) => theme.devices.biggerMobile} {
    order: ${props => props.$isForm ? "2" : "1"};
    padding: 0;
  } 
`

export const CalmLogo = styled.div`
  flex-basis: 10%;

  @media ${({ theme }) => theme.devices.biggerMobile} {
    padding: 10px 0 0 20px;
  } 
`
export const ImgCalmLogo = styled.img `
 width: 110px;
 height: auto;

 @media ${({ theme }) => theme.devices.biggerMobile} {
   width: 90px;
  } 
 `