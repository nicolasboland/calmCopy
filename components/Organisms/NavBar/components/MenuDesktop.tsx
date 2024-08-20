import {
    CategoryItemTitle,
    CategoryItemWrapper,
    MenuWrapperDesktop,
    NavigationDropDown,
    Pill,
    ProductWrapper,
    ProductsColumn,
    ProductsWrapper,
    SelectedProductWrapper,
    CartAndLandingsWrapper,
    CartNumber,
    CartWrapper,
    LandingsWrapperDesktop,
} from "./styled"
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"
import { productURLRedirectionById } from '@/utils/productURLById';
import QuizzCard from "@/components/Molecules/QuizzCard/QuizzCard"
import { IPropsMenuDkestop } from "./types"
import { useSelector } from "react-redux";
import { getLoadingAddOrUpdateCart, getLoadingGetCart } from "@/state/loading/loadingSelector";
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { getCartItemsCount } from "@/state/cart/cartSelector";
import { useEffect, useState } from "react";

const MenuDesktop = ({
    menuData,
    selectedLink,
    currentCategory,
    setCurrentCategory,
    handleRedirect,
    quizzHandle,
    staticLandings,
    openCart
}: IPropsMenuDkestop) => {
    const loadingAddOrUpdateCart = useSelector(getLoadingAddOrUpdateCart)
    const itemsCount = useSelector(getCartItemsCount)
    const loadingGetCart = useSelector(getLoadingGetCart)
    const [render, setRender] = useState(false)

    useEffect(() => {
        setRender(true)
    }, [])

    if (!render) return null

    return (
        <>
            <MenuWrapperDesktop>
            {menuData.map((categoryItem) => {
                return (
                    <CategoryItemWrapper key={categoryItem.name}>
                        <Text 
                        textTag="a" 
                        textDecoration="none" 
                        link={productURLRedirectionByEnv(categoryItem.redirect)} 
                        handleClick={handleRedirect}
                        isNextLink>
                            <CategoryItemTitle
                                onMouseEnter={() => setCurrentCategory(categoryItem.name)}
                                onMouseLeave={() => setCurrentCategory("")}
                            >
                                <Text
                                fontSize=".9em"
                                font="medium"
                                color={(currentCategory == categoryItem.name || selectedLink == categoryItem.name) ? "yellowCalm" : "blackOut"}
                                >
                                    {categoryItem.name}
                                </Text>
                            </CategoryItemTitle>
                        </Text>
                        <NavigationDropDown
                            $active={currentCategory == categoryItem.name}
                            onMouseEnter={() => setCurrentCategory(categoryItem.name)}
                            onMouseLeave={() => setCurrentCategory("")}
                        >
                            <ProductsColumn>
                                <Text color="explosiveGray" fontSize="13px">{categoryItem.header}</Text>
                                <Margin margin="8px 0 8px 0">
                                <ProductsWrapper>
                                    {categoryItem.items.map((item) => (
                                        <ProductWrapper key={item.id}>
                                            <Margin margin="5px 8px 5px 0">
                                            <Text 
                                            textTag="a"
                                            link={productURLRedirectionById(item.id)}
                                            textDecoration="none"
                                            color="offBlack"
                                            HoverColor="yellowCalm"
                                            font="medium"
                                            handleClick={handleRedirect}
                                            isNextLink
                                            >
                                                {item.name}
                                                {item.pillMessage && <Pill $isYellowPill={item.isYellowPill}>{item.pillMessage}</Pill>}
                                            </Text>
                                            </Margin>
                                        </ProductWrapper>
                                    ))}
                                </ProductsWrapper>
                                </Margin>
                                <Text 
                                textTag="a" 
                                link={productURLRedirectionByEnv(categoryItem.redirect)}
                                fontSize="0.8em"
                                font="extraBold"
                                color="offBlack"
                                textDecoration="none"
                                handleClick={handleRedirect}
                                isNextLink
                                > 
                                    {categoryItem.seeMoreText}
                                </Text>
                            </ProductsColumn>
                            {categoryItem.selectedProducts.map((product) => (
                                <SelectedProductWrapper key={product.id}>
                                    <Text textTag="a" link={productURLRedirectionById(product.id)} isNextLink>
                                        <Images src={product.image_url + "?tr=w-240"} alt="producto" width="240px" borderRadius="10px" isLazy/>
                                    </Text>
                                    <Margin margin="5px 0 10px 0">
                                    <Text 
                                    textTag="a" 
                                    link={productURLRedirectionById(product.id)}
                                    color="offBlack"
                                    font="extraBold"
                                    fontSize=".8em"
                                    textDecoration="none"
                                    handleClick={handleRedirect}
                                    isNextLink
                                    >
                                        {product.name}
                                    </Text>
                                    </Margin>
                                    <Text fontSize=".8em" color="millionGray">{product.description}</Text>
                                </SelectedProductWrapper>
                            ))}
                            {
                                categoryItem.quizz &&
                                    <QuizzCard 
                                        quizzHandle={quizzHandle} 
                                        isfromNavBar
                                        src={categoryItem.quizz.image_url}
                                        text={categoryItem.quizz.text}
                                        id={categoryItem.quizz.id}
                                    />
                            }
                        </NavigationDropDown>
                    </CategoryItemWrapper>
                )
                
            })}
        </MenuWrapperDesktop>
        <CartAndLandingsWrapper>
            <LandingsWrapperDesktop>
                {staticLandings.map((landingData) => {
                    return (
                        <Margin margin="0 6px" key={landingData.name}>
                            <Text
                            textTag="a"
                            textDecoration="none"
                            fontSize=".8em"
                            color={(selectedLink === landingData.name) ? "yellowCalm" : "black"}
                            HoverColor="yellowCalm"
                            link={landingData.redirect}
                            handleClick={handleRedirect}
                            isNextLink
                            >
                                {landingData.name}
                            </Text>
                        </Margin>
                        )
                    })}
            </LandingsWrapperDesktop>
                        
            <CartWrapper onClick={() => openCart && openCart()}>
                <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/d234b338-32c2-47a1-771b-0f787a19dd00/public" alt="carrito" height="1.1em"/>
                <CartNumber $disabled={itemsCount == ""}> 
                    {
                        loadingAddOrUpdateCart || loadingGetCart ?
                        <Spinner />
                        :
                        <Text
                        color="brilliance"
                        font="regular"
                        fontSize=".7em"
                        >
                            {itemsCount}
                        </Text>
                    }
                </CartNumber>
            </CartWrapper>
        </CartAndLandingsWrapper>
    </>
    )
} 

export default MenuDesktop