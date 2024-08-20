import styled from "styled-components";

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.devices.biggerMobile} {
    justify-content: space-between;
    position: relative;
    height: 55px;
  }

  @media ${props => props.theme.devices.biggerMobile} {
    height: 45px;
    /* div a img {
      display: flex;
    } */
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 30px;
  z-index: 15;

  @media ${props => props.theme.devices.biggerMobile} {
    position: relative;
    top: auto;
    left: auto;
    margin-top: 4px;
  }
`;

export const CategoryItemWrapper = styled.div<{ $active?: boolean }>`
  height: ${props => props.$active ? "0" : "fit-content"};
  opacity: ${props => props.$active ? "0" : "1"};
  visibility: ${props => props.$active ? "hidden" : "visible"};
`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const CategoryItemTitle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;  
  margin: 0 20px;
  @media ${props => props.theme.devices.biggerMobile} {
    justify-content: space-between;
    margin: 0;
  }
`;

export const MenuWrapperMobile = styled.div<{ $isMenuOpen?: boolean }>`
  display: none;
  z-index: 25;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  white-space: nowrap;
  transition: all .1s ease-in;
  font-size: 1em;
  justify-content: center;
  margin: 0;
  color: ${props => props.theme.colors.black};


  @media ${props => props.theme.devices.biggerMobile} {
    display: flex;
    justify-content: flex-start;
    transition: transform .7s ease-in-out;
    margin-top: 890px;
    width: -webkit-fill-available;
    transform: ${props => props.$isMenuOpen ? "translate(0)" : "translate(-150%)"};
    padding: 0 20px 10px 20px;
    position: absolute;
    background-color: ${props => props.theme.colors.white};
    height: 100vh;
  }
`;

export const MenuWrapperDesktop = styled.div`
  z-index: 25;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  white-space: nowrap;
  transition: all .1s ease-in;
  font-size: 1em;
  justify-content: center;
  margin: 0;
  color: ${props => props.theme.colors.black};

  @media ${props => props.theme.devices.biggerMobile} {
    display: none;
  }
`;

export const MobileMenuIconWrapper = styled.div`
 display: none;

  @media ${props => props.theme.devices.biggerMobile} {
    display: block;
    margin: 0 10px;
    cursor: pointer;
  }
`;

export const NavigationDropDown = styled.div<{ $active: boolean }>`
  z-index: 1;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${props => props.theme.colors.white};
  width: 70%;
  position: absolute;
  top: 85px;
  left: 15%;
  opacity: ${props => props.$active ? "1" : "0"};
  visibility: ${props => props.$active ? "visible" : "hidden"};
  ${props => props.$active && "transform: translateY(-1rem);"}
  transition: all .3s ease-in;
  padding: 30px;
  
  @media ${props => props.theme.devices.biggerMobile} {
    height: ${props => props.$active ? "fit-content" : "0"};
    position: unset;
    padding: 0 10px;
    ${props => props.$active && "margin-bottom: 20px;"};
    transform: none;
    justify-content: start;
    transition: none;
  }
`;

export const ProductsColumn = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin: 10px 0;
`;

export const CartAndLandingsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: 15px;

  @media ${props => props.theme.devices.biggerMobile} {
    position: relative;
  }
`;

export const LandingsWrapperDesktop = styled.div`
  display: flex;

  @media ${props => props.theme.devices.biggerMobile} {
    display: none;
  }
`;

export const LandingsWrapperMobile = styled.div<{ $active?: boolean }>`
    display: none;

  @media ${props => props.theme.devices.biggerMobile} {
    display: flex;
    visibility: ${props => props.$active ? "hidden" : "visible"};
    opacity: ${props => props.$active ? "0" : "1"};
    flex-direction: column;
    border-top: 1px solid ${props => props.theme.colors.explosiveGray};
    margin-top: 4px;
    padding-top: 8px;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  cursor: pointer;
  position: relative;
  @media ${props => props.theme.devices.biggerMobile} {
    margin: 0 20px;
  }
`;

export const ProductWrapper = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all .1s ease-in-out;
  }
  div {
    margin-left: 5px;
  }
  @media ${props => props.theme.devices.biggerMobile} {
    font-size: 1.2em;
    margin: 5px 0;
  }
`;

export const Pill = styled.span<{$isYellowPill?: boolean}>`
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$isYellowPill ? props.theme.colors.yellowCalm : props.theme.colors.coldMorning};
  text-transform: lowercase;
  color: ${props => props.$isYellowPill ? props.theme.colors.white : props.theme.colors.millionGray};
  border-radius: 15px;
  padding: 5px 8px;
  border-radius: 15px;
  font-size: .7em;
`;

export const SelectedProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartNumber = styled.div<{$disabled?: boolean}>`
  position: absolute;
  display: ${props => props.$disabled ? "none" : "flex"};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.yellowCalm};
  left: 50%;
  bottom: 40%;
  width: 15px;
  height: 15px;
`;

export const QuizzContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`