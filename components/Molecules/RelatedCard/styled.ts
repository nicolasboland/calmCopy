import styled from "styled-components"

export const Article = styled.article`
  display: flex;
  margin: 0.4rem;
  flex-direction: column;
  justify-content: space-between;
`

export const DivUnit = styled.div`
  width: auto;
  max-width: 100%;
  position: relative;
  height: max-content;
`

export const TitleUnitDiv = styled.div`
  word-break: break-all;
  white-space: break-spaces;
  text-transform: lowercase;
  font-weight: 100;
`

export const TitleBoldDiv = styled.div`
  white-space: break-spaces;
  text-transform: capitalize;
`

export const VariationsDiv = styled.div`
  margin-top: 0.1rem;
  white-space: break-spaces;
  width: 80%;
`

export const AddToCart = styled.div<{ $notEnabled?: boolean }>`
  background-color: ${({theme, $notEnabled}) =>
    $notEnabled
      ? theme.colors.millionGray
      : theme.colors.fadingHorizon};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  right: 2%;
  top: 75%;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  &:hover {
    cursor: ${(props) => (props.$notEnabled ? "not-allowed" : "pointer")};
    background-color: ${({theme, $notEnabled}) =>
      $notEnabled ? theme.colors.millionGray : theme.colors.elegantPurpleGown};
  }
`