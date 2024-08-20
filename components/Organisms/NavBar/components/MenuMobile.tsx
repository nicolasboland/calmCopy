import {
    CategoryItemTitle,
    CategoryItemWrapper,
    LandingsWrapperMobile,
    MenuWrapperMobile,
    NavigationDropDown,
    Pill,
    ProductWrapper,
    ProductsColumn,
    ProductsWrapper,
    BackWrapper,
    QuizzContainer
} from "./styled"
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"
import { productURLRedirectionById } from '@/utils/productURLById';
import QuizzCard from "@/components/Molecules/QuizzCard/QuizzCard"
import { IPropsMenuDkestop } from "./types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { getMobileMenu } from "@/state/cart/cartSelector";

const MenuMobile = ({
    menuData,
    selectedLink,
    currentCategory,
    setCurrentCategory,
    handleRedirect,
    quizzHandle,
    staticLandings
}: IPropsMenuDkestop) => {
    const isMobileMenuOpen = useSelector(getMobileMenu);

    return (
        <MenuWrapperMobile id="menuWrapper" $isMenuOpen={isMobileMenuOpen}>
        <div>
            {menuData.map((categoryItem) => {
                return (
                    <div key={categoryItem.name}>
                        <CategoryItemWrapper $active={currentCategory != ""}>
                            <CategoryItemTitle onClick={() => setCurrentCategory(categoryItem.name)}>
                                <Margin margin="15px 0">
                                    <Text
                                    fontSize="1.2em"
                                    font={(currentCategory == categoryItem.name || selectedLink == categoryItem.name) ? "bold" : "regular"}
                                    >
                                        {categoryItem.name}
                                    </Text>
                                </Margin>
                                <IoIosArrowForward />
                            </CategoryItemTitle>
                        </CategoryItemWrapper>
                        
                        <NavigationDropDown
                            $active={currentCategory == categoryItem.name}
                        >
                            <ProductsColumn>
                                <BackWrapper onClick={() => setCurrentCategory("")}>
                                    <Margin margin="0.5em 0 0 0">
                                        <IoIosArrowBack />
                                    </Margin>
                                    <Text
                                    font="bold"
                                    fontSize="1.2em"
                                    >
                                        atrás
                                    </Text>
                                </BackWrapper>

                                <Text
                                fontSize="13px"
                                color="explosiveGray"
                                >
                                    {categoryItem.header}
                                </Text>

                                <ProductsWrapper>
                                    {categoryItem.items.map((item) => (
                                        <ProductWrapper key={item.id}>
                                            <Text
                                            textTag="a"
                                            handleClick={handleRedirect}
                                            link={productURLRedirectionById(item.id)}
                                            isNextLink
                                            >       
                                                    <Margin margin=" 5px 10px 5px 0">
                                                    <Text
                                                    font="medium"
                                                    fontSize=".9em"
                                                    color="offBlack"
                                                    >
                                                        {item.name}
                                                    </Text>
                                                    </Margin>
                                                    {item.pillMessage && <Pill $isYellowPill={item.isYellowPill}>{item.pillMessage}</Pill>}
                                            </Text>
                                        </ProductWrapper>
                                    ))}
                                    {
                                        categoryItem.quizz && 
                                        <QuizzContainer>
                                            <QuizzCard 
                                                  quizzHandle={quizzHandle} 
                                                  isfromNavBar
                                                  src={categoryItem.quizz.image_url}
                                                  text={categoryItem.quizz.text}
                                                  id={categoryItem.quizz.id}
                                            />
                                            <Pill >Test</Pill>
                                        </QuizzContainer>
                                    }
                                </ProductsWrapper>
                                <Text
                                textTag="a"
                                font="extraBold"
                                fontSize="0.8em"
                                color="offBlack"
                                textDecoration="none"
                                link={categoryItem.redirect}
                                isNextLink
                                handleClick={handleRedirect}
                                >
                                    {categoryItem.seeMoreText}
                                </Text>
                            </ProductsColumn>
                        </NavigationDropDown>
                    </div>
                )
            })}
            <LandingsWrapperMobile $active={currentCategory != ""}>
                {staticLandings.map((landingData) => {
                    return (
                        <Margin margin="10px 0" key={landingData.name}>
                            <Text
                            textTag="a"
                            link={landingData.redirect}
                            textDecoration="none"
                            color="offBlack"
                            isNextLink
                            handleClick={handleRedirect}
                            >
                                {landingData.name}
                            </Text>
                        </Margin>
                    )
                })}
            </LandingsWrapperMobile>
        </div>

    </MenuWrapperMobile>
    )
} 

export default MenuMobile