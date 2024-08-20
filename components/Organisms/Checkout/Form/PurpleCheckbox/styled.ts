import { styled } from 'styled-components'

export const CheckboxContainer = styled.div`
`

export const OuterCheckboxOrange = styled.div<{ $disabled?: boolean, $isSquare?: boolean }>`
  border-radius: ${({ $isSquare }) => $isSquare ? '4px' : '50%'};
  width: 24px;
  height: 24px;
  border: 1px solid
    ${({ $disabled, theme, $isSquare }) =>
      $disabled ? theme.colors.millionGray : $isSquare ? theme.colors.yellowCalm : theme.colors.tangledWeb};
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $disabled }) => ($disabled ? '#dfdfdf' : '#fff0')};

  @media ${({ theme }) => theme.devices.mobile} {
    width: 20px;
    height: 20px;
  }
`

export const InnerCheckboxOrange = styled.div<{ $disabled?: boolean, $isSquare?: boolean }>`
  width: ${({ $isSquare }) => $isSquare ? '24px' : '16px'};
  height: ${({ $isSquare }) => $isSquare ? '24px' : '16px'};
  background-color: ${({ theme }) => theme.colors.yellowCalm};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ $isSquare }) => $isSquare ? '4px' : '50%'};
  display: ${({ $disabled }) => ($disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.devices.mobile} {
    width: ${({ $isSquare }) => $isSquare ? '20px' : '14px'};
    height: ${({ $isSquare }) => $isSquare ? '20px' : '14px'};
}
`

export const Text = styled.p<{ $disabled?: boolean }>`
  ${(props) => props.theme.fonts.medium};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GreenText = styled.span<{ $hasImages?: boolean}>`
  color: #40914d;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
  cursor: pointer;
`

export const GrayText = styled.span<{ $hasImages?: boolean}>`
  color: ${({ theme }) => theme.colors.millionGray};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
  cursor: pointer;
`