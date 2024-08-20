import styled from "styled-components";

export const NavBarWrapper = styled.div<{ $show?: boolean, $isLoading?: boolean }>`
  z-index: 19;
  position: sticky;
  top: -1px;
  display: ${({ $show, $isLoading }) => (($show && $isLoading) ? "block" : "none")};
  

  @media ${props => props.theme.devices.mobile} {
    height: 100px;
  }
`;

export const MenuWrapper = styled.div`
    background-color:  ${props => props.theme.colors.white};
    z-index: 1;
`;

export const HeadBannerContent = styled.div`
  min-height: 25px;
  background-color: ${props => props.theme.colors.offBlack};
  display: flex;
`;

export const ScrolNavBar = styled.div<{$visible?: boolean}>`
  @media ${props => props.theme.devices.mobile} {
    top: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateY(${props => (!props.$visible ? '-100%' : '0')});
  }
`

export const Loaders = styled.div`
    width: 100%;
`