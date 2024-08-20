import { styled } from "styled-components"
import { theme } from "@/utils/Theme";

type ThemeColors = keyof typeof theme.colors;

export const CheckboxContainer = styled.div<{ $hasImages?: boolean }>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 6px;
  margin: 10px 0;

  @media ${({ theme }) => theme.devices.smallTablet} {
    margin: ${({$hasImages}) => ($hasImages && "10px 0 54px;")};
  }
`

export const Wrapper = styled.div`
  width: 30px;
`

export const OuterCheckbox = styled.div<{ $disabled?: boolean, $color?: ThemeColors, $isSquare?: boolean  }>`
border-radius: ${({ $isSquare }) => $isSquare ? '4px' : '50%'};
  width: 24px;
  height: 24px;
  border: 1px solid
    ${({ $disabled, $color, theme, $isSquare  }) =>
      $disabled ? theme.colors.millionGray : $isSquare ? theme.colors.yellowCalm : $color ? theme.colors[$color] : theme.colors.tangledWeb};
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.kinglyCloud : theme.colors.white};
`

export const InnerCheckbox = styled.div<{ $disabled?: boolean, $color?: ThemeColors, $isSquare?: boolean }>`
  width: ${({ $isSquare }) => $isSquare ? '24px' : '16px'};
  height: ${({ $isSquare }) => $isSquare ? '24px' : '16px'};
  background-color: ${({ theme, $color }) => $color ? theme.colors[$color] : theme.colors.yellowCalm};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${({ $isSquare }) => $isSquare ? '4px' : '50%'};
  display: ${({ $disabled }) => ($disabled ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.devices.mobile} {
    width: ${({ $isSquare }) => $isSquare ? '22px' : '14px'};
    height: ${({ $isSquare }) => $isSquare ? '22px' : '14px'};
}
`

export const TextButton = styled.div<{ $disabled?: boolean }>`
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  -ms-user-select: none;
  user-select: none;
`

export const CheckboxMap = styled.div`
  margin-left: auto;
`

export const SubText = styled.div`
  color: ${({ theme }) => theme.colors.parkPicnic};
  display: block;
  position: absolute;
  top: 100%;
  left: 7%;

  @media ${({ theme }) => theme.devices.mobile} {
    position: absolute;
    left: 7%;
  }
`
