import { styled } from 'styled-components'
import { theme } from "@/utils/Theme";


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DivAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.superSilver};
  padding: 10px;
  border-radius: 6px;
  margin: 20px 0;
`

export const DivImgAlert = styled.div`
  width: 30%;
  display: flex;
`