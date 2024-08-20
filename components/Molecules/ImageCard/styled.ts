import styled from "styled-components"

export const DivPill = styled.div<{
  $pillLayout?: "FirstPill" | "CenterPill" | "HalfPill"
}>`
  position: absolute;
  width: 100%;
  top: ${({ $pillLayout }) =>
    $pillLayout === "FirstPill" || $pillLayout === "CenterPill"
      ? "22%"
      : $pillLayout === "HalfPill" && "47%"};
  left: ${({ $pillLayout }) =>
    $pillLayout === "FirstPill"
      ? "7%"
      : $pillLayout === "CenterPill"
      ? "10%"
      : $pillLayout === "HalfPill" && "9%"};

  @media ${({theme}) => theme.devices.biggerMobile} {
    top: ${({ $pillLayout }) =>
      ($pillLayout === "FirstPill" || $pillLayout === "CenterPill") && "25%"};
  }

  @media ${({theme}) => theme.devices.middleResolutionDesktop} {
    top: ${({ $pillLayout }) =>
      $pillLayout === "FirstPill" || $pillLayout === "CenterPill"
        ? "21%"
        : $pillLayout === "HalfPill" && "40%"};
    left: ${({ $pillLayout }) =>
      $pillLayout === "FirstPill"
        ? "4%"
        : $pillLayout === "CenterPill"
        ? "8%"
        : $pillLayout === "HalfPill" && "6.5%"};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    top: 35%;
  }
`

export const DivText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  @media ${({ theme }) => theme.devices.mobile} {
    bottom: 1rem;
    left: 1rem;
  }

  p {
    font-weight: 600;
    letter-spacing: 0.5px;

    @media ${({ theme }) => theme.devices.mobile} {
      font-size: 1em;
    }
  }
`

export const DivImg = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  border-radius: 8px 8px 8px 8px;

  @media ${({theme}) => theme.devices.mobile} {
    height: 12em;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;

    &:hover {
      transform: scale(1.05);
      transition: 1.5s;
    }
  }
`

export const Layout = styled.a<{
  $layout?: "FirstRow" | "SecondRow" | "FirstColumn" | "SecondColumn"
}>`
  cursor: pointer;
  max-width: 100%;
  position: relative;
  padding: 10px;
  flex-basis: ${({ $layout }) =>
    $layout === "FirstRow" ? "63.02%" : $layout === "SecondRow" && "37%"};

  @media ${({ theme }) => theme.devices.mobile} {
    flex-basis: 50%;
    padding: 5px;
  }
`
