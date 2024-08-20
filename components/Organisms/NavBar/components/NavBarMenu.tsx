import {

    LogoWrapper,
    NavBarWrapper,
    MobileMenuIconWrapper,
} from "./styled"
import { useEffect, useState } from "react";
import { IProps } from './types';
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text"
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";
import { Turn as MobileMenuIcon } from 'hamburger-react';
import { useDispatch, useSelector } from "react-redux"
import { onMobileMenuOpen, onMobileMenuClose } from "@/state/cart/cartActions"
import { getMobileMenu, getShowFixedCart } from "@/state/cart/cartSelector";
import { onShowCart, onCloseCart } from "@/state/cart/cartActions"
import MenuDesktop from "./MenuDesktop"
import MenuMobile from "./MenuMobile"
import { menuData, staticLandings } from "../utils";
import Icons from "@/components/Atoms/Icons/Icons";
import { CalmLogo } from "@/utils/Icons";

const NavBarMenu = ({selectedLink, openCart, quizzHandle }: IProps) => {
    const width = useWidth()
    const dispatch = useDispatch()
    const [currentCategory, setCurrentCategory] = useState("");
    const isMobileMenuOpen = useSelector(getMobileMenu);
    const showATCButton = useSelector(getShowFixedCart)

    const onToggle = () => {
        setCurrentCategory("");
        if (isMobileMenuOpen) {
            dispatch(onMobileMenuClose())
        } else {
            dispatch(onMobileMenuOpen())
        }
        if (width < deviceSizes.mobile && showATCButton) {
            dispatch(onCloseCart())
        } else if (!showATCButton) {
            dispatch(onShowCart())
        }
    }

    const handleRedirect = () => {
        setCurrentCategory("")

        if (isMobileMenuOpen) {
            dispatch(onMobileMenuClose())
        }
    }

    useEffect(() => {
        const menu = document.getElementById('menuWrapper');
    
        const handleScroll = (e: WheelEvent) => {
          e.preventDefault();
          if (menu) {
            menu.scrollTop += e.deltaY;
          }
        };
    
        if (menu/*  && isMobileMenuOpen probar */) {
            menu.addEventListener('wheel', handleScroll);
        }
        if (!isMobileMenuOpen && menu) {
            menu.removeEventListener('wheel', handleScroll);
        }
       
      }, [isMobileMenuOpen]);
      
    return (
        <>
            <NavBarWrapper>
                <MobileMenuIconWrapper>
                    <MobileMenuIcon
                        label="open menu"
                        toggled={isMobileMenuOpen}
                        toggle={onToggle}
                        size={20}
                    />
                </MobileMenuIconWrapper>
                
                <LogoWrapper>
                    <Text textTag="a" textDecoration="none" link={productURLRedirectionByEnv('/')} isNextLink>
                        <Icons
                        width="75px"
                        responsiveMobile={{
                            width:"65px"
                        }}
                        >
                            {CalmLogo()}
                        </Icons>
                    </Text>
                </LogoWrapper>
            
                <MenuDesktop
                    menuData={menuData}
                    selectedLink={selectedLink}
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                    handleRedirect={handleRedirect}
                    quizzHandle={quizzHandle}
                    staticLandings={staticLandings}
                    openCart={openCart}
                />

                <MenuMobile
                    menuData={menuData}
                    selectedLink={selectedLink}
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                    handleRedirect={handleRedirect}
                    quizzHandle={quizzHandle}
                    staticLandings={staticLandings}
                />

            </NavBarWrapper>

        </>
    )
}

export default NavBarMenu;