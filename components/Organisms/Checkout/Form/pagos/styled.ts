import { styled } from 'styled-components'
import InputMask from 'react-input-mask'
import { FormLabel } from "../ui/styled"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const PagoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.offBlack};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 600;
  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
  }
`

export const PaymentContainer = styled.div<{ $isSelected: boolean}>`
  background-color: ${({ theme, $isSelected }) => $isSelected ? theme.colors.antiqueIvory : theme.colors.white};
  border-radius: 30px;
  margin: ${({ $isSelected }) => $isSelected ? "15px 0" : "0 0 15px 30px"};
  padding: ${({ $isSelected }) => $isSelected && "20px 30px"};
`

export const DivImg=styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0.5rem;
`

export const Img=styled.img`
  border: 1px solid ${props=>props.theme.colors.millionGray};
  border-radius: 5px;
  width: 2.2rem;
  text-align: center;
  height: 1.5rem;
  padding: 2px;
  object-fit: scale-down;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Violet=styled.p`
  color:#631F99;
`

export const StyledInputMask=styled(InputMask)<{$errors?:string}> `
  width: 100%;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  padding: 16px 18px;
  border-radius: 6px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.millionGray};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.dullViolet};
  }
  &:disabled {
    outline: 1px dashed ${({ theme }) => theme.colors.explosiveGray};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.millionGray};
  }
  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    opacity: 1;
    transform: scale(0.75) translateY(-70%) translateX(-14px);
    top: 0;
  }
  
  /* @media ${props=>props.theme.devices.mobile}{
    margin-top: 40px;
  } */
`
export const DivText=styled.div`
  display: flex;
  flex-direction: row;
  gap:0.5rem;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`
export const ErrorFix=styled.div`
  display: flex;
  background-color:#DE1135;
  color:white;
  border-radius: 0.5rem;
  width: 700px;
  height: 5rem;
  gap:30rem;
  justify-content: center;
  ${props=>props.theme.fonts.bold};
  font-size: 1.4rem;
  padding-top: 2rem;
  letter-spacing: 1px;
  line-height: 21px;


@media ${props=>props.theme.devices.mobile}{
  width: 18.5rem;
  height: 3rem;
  gap:9rem;
  width: Fixed (631px);
  height: Hug (64px);
  ${props=>props.theme.fonts.bold};
  font-size: 18px;
}

button{ 
  background-color: #DE1135;
    border: none;
    color:white;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  
  @media ${props=>props.theme.devices.mobile}{
    background-color: #DE1135;
    border: none;
    color:white;
    padding-bottom: 10px;
    font-size: 1.3rem;
  
  }
}

`

export const StyledDataPickerContainer=styled.div`
  .react-datepicker {

    font-family: ${({ theme }) => theme.fonts.medium};
    border: 1px solid #ccc;
  }
  .react-datepicker__input-container {
    width: 100%;
    border-radius: 6px;
    
  }
  .react-datepicker__input-container input {
    width: 100%;
    height: 3.4rem;
    padding: 8px; 
    border: 1px solid #999; 
    border-radius: 6px; 
    &::placeholder{
      color: ${({ theme }) => theme.colors.millionGray};
      font-family: ${({ theme }) => theme.fonts.medium};
      font-size: 18px;
    }
    &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.dullViolet};
    
  }
  }
`

export const PaymentText = styled.p`
  margin-top: 2px;
`

export const Errormessage = styled.p`
  padding: 0.3rem;
  color: ${(props) => props.theme.colors.dullViolet};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1em;
`

export const DatePickerContainer = styled(DatePicker)`

/*   &:focus {
    background-color: red;
  } */
  
  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    opacity: 1;
    transform: scale(0.75) translateY(-70%) translateX(-14px);
    top: 0;
  }
`

export const DivImgCards=styled.div`
position: relative;
  grid-column-start: 3;
  grid-column-end: 4;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 0.5rem;

  @media ${({ theme }) => theme.devices.mobile} {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`

export const DivCardsModal = styled.div<{ $isVisible: boolean }>`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  gap: 0.5rem;
  flex-wrap: wrap;
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 100;
  transition: opacity  0.6s;
  border-radius: 10px;
  box-shadow: 6px 6px #0000001f;
  /* width: 20rem; */
  p {
    font-family: ${(props) => props.theme.fonts.regular};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    /* top: 60%; */
    /* top: 1rem; */
    right: 1rem;
  }
`;

export const ImgModalCards = styled.img`
  cursor: pointer;
  width: 1.6rem;
`;