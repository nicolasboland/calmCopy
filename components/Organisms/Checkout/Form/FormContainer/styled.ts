import { styled } from 'styled-components'


export const StyledFormContainer = styled.section`
  @media ${({ theme }) => theme.devices.biggerMobile} {
    padding: 10px 20px 30px 20px;
  } 
`

export const StepContainer = styled.section <{$current?:number}>`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  position: relative;
  @media ${props => props.theme.devices.mobile}{
      gap: 10px;
    }
`

export const EditButton = styled.button<{$idDisabled?:boolean}>`
  margin-left: auto;
  font-size: 1rem;
  cursor: pointer;
  color: ${props => props.$idDisabled ? props.theme.colors.millionGray : props.theme.colors.dullViolet};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-decoration: underline;
  background-color: transparent;
  border: none;
  height: 40px;
`

export const StepNumber = styled.p<{ $active: boolean, $isComplete?: boolean }>`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  border-radius: 50%;
  border: 1px solid ${({ $isComplete, theme, $active }) => $active ? theme.colors.yellowCalm : $isComplete ? theme.colors.parkPicnic : theme.colors.offBlack};
  min-height: 34px;
  min-width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ $isComplete, theme, $active }) => $active ? theme.colors.yellowCalm : $isComplete ? theme.colors.parkPicnic : theme.colors.offBlack};
  opacity: ${({ $active, $isComplete }) => !$active && !$isComplete && "50%"};

  @media ${({ theme }) => theme.devices.biggerMobile} {
    position: absolute;
    min-height: 30px;
    min-width: 30px;
    left: 0;
  }
`

export const StepHeading = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 10px;

  @media ${({ theme }) => theme.devices.biggerMobile} {
    margin-left: 46px;
    align-items: center;
  }
`

export const StepDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 742px;
  width: 100%;

  @media ${({ theme }) => theme.devices.biggerMobile} {
    max-width: 810px;
  }
`
export const StepTitle = styled.h2<{ $active: boolean, $isComplete?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ $isComplete, theme, $active }) => $active ? theme.colors.yellowCalm : $isComplete ? theme.colors.parkPicnic : theme.colors.offBlack};
  opacity: ${({ $active, $isComplete }) => !$active && !$isComplete && "50%"};
  font-size: 32px;
  line-height: 100%; 
  letter-spacing: 0.2px;

  @media ${({ theme }) => theme.devices.biggerMobile} {
    font-size: 24px;
  }
`

export const StepFormSummary = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.millionGray};
`

export const StyledHr = styled.hr`
  width: 100%;
  margin: 24px 0;
`

export const StepForm = styled.section<{$isCurrentStep:boolean}>`
  width: 100%;
  display: ${props=>props.$isCurrentStep?"block":"none"};
`