import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import NavBarMenu from "./components/NavBarMenu";
import { useDispatch, useSelector } from "react-redux";
import HeadBanner from "@/components/Molecules/HeadBanner/HeadBanner";
import { HeadBannerContent, MenuWrapper, NavBarWrapper, ScrolNavBar, Loaders } from "./styled";
import { useModal } from "@/hooks/useModal";
import { onCloseSideCart, onGetCart, onOpenSideCart } from "@/state/cart/cartActions";
import { getOpenSideCart } from "@/state/cart/cartSelector";
import { getLoadingGetCart } from "@/state/loading/loadingSelector";
import { useRouter } from "next/router";
import { getHygraphId } from "@/utils/hygraphIds";
import BenefitsBanner from "../BenefitsBanner/BenefitsBanner";
import { onMobileMenuClose } from "@/state/cart/cartActions"
import { getMobileMenu } from "@/state/cart/cartSelector"
import { onGetHideNavbar, onGetShowNavbar } from "@/state/products/productsActions";
import { onGetHeadBannersData, onGetHeadBannersDataSucceeded } from '@/state/hygraph/hygraphActions';
import { INavbar } from "@/types"
import SkeletonLoader from '@/components/Atoms/SkeletonLoader/SkeletonLoader';

const Cart = dynamic(() => import('@/components/Organisms/Cart/Cart'), {
    ssr: false,
  });

const Quizz = dynamic(() => import('@/components/Molecules/Quizz/Quizz'), {
    ssr: false,
  });

const NavBar = (/* {headbannerData}: INavbar */) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const [isOpenModal, openModal, closeModal] = useModal(false)
    const sideCartOpened = useSelector(getOpenSideCart)
    const isMobileMenuOpen = useSelector(getMobileMenu);
    const loadingGetCart = useSelector(getLoadingGetCart)
    const [quizzActive, setQuizzActive] = useState(false)
    const [selectedQuizz, setSelectedQuizz] = useState<undefined | string>()
    const [bannerId, setBannerId] = useState<string>()
    const [loadedNavBar, setLoadedNavBar] = useState(false)

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [selectedLink, setSelectedLink] = useState("")

    useEffect(() => {
        dispatch(onGetHeadBannersData());
     /*  if (headbannerData)  dispatch(onGetHeadBannersDataSucceeded(headbannerData)) */
      }, [/* headbannerData */]);

    const openCart = () => {
        dispatch(onOpenSideCart())
        dispatch(onGetCart())
    }

    const closeCart = () => {
        dispatch(onCloseSideCart());
    };

  const setLandingSettings = (url: string) => {
    let selectedBannerId = ""
    if(url == "/quienes-somos") {
        setSelectedLink("Nosotrxs")
    } else if(url == "/localm") {
        setSelectedLink("Localm")
    } else if(url.includes("colchon") && !url.includes("protector")) {
        setSelectedLink("Colchones")
        if(url.includes("perro")) {
            selectedBannerId = getHygraphId("mascotas-head-banner")
        }else if(url.includes("bb")) {
            selectedBannerId = getHygraphId("bb-head-banner")
        } else {
            selectedBannerId = getHygraphId("colchones-head-banner")
        }
    } else if(url.includes("base") || url.includes("sommier") || url.includes("cama-suavidad")) {
        setSelectedLink("Bases y sommiers")
        if (url.includes("cama-suavidad")) {
            selectedBannerId = getHygraphId("nuevos-lanzamientos-head-banner")
        } else {
            selectedBannerId = getHygraphId("bases-head-banner")
        }
    } else if(url.includes("almohada")) {
        setSelectedLink("Almohadas")
        selectedBannerId = getHygraphId("almohadas-head-banner")
    } else if(url.includes("ropa-de-cama") || url.includes("edredon") || url.includes("funda") || url.includes("sabanas")) {
        setSelectedLink("Ropa de cama")
        selectedBannerId = getHygraphId("ropa-de-cama-head-banner")
    } else if(url.includes("marco-suavidad") || url.includes("respaldo-horizonte") || url.includes("protector-de-colchon") || url.includes("accesorios")) {
        setSelectedLink("Accesorios")
        if (url.includes("protector-de-colchon")) {
            selectedBannerId = getHygraphId("accesorios-head-banner")
        } else {
            selectedBannerId = getHygraphId("nuevos-lanzamientos-head-banner")
        }
    }

    if((!selectedBannerId)) {
        selectedBannerId = getHygraphId("home-head-banner")
    }
    if(url.includes("feria")) {
        selectedBannerId = ""
    }
    return selectedBannerId
    }

    useEffect(() => {
        setLoadedNavBar(true)
    }, [])

    useEffect(() => {
        if(router) {
            dispatch(onMobileMenuClose())
            const selectedBannerId = setLandingSettings(router.asPath) 
            setBannerId(selectedBannerId)
        }
    }, [router.asPath])

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = document.documentElement.scrollTop;
        const currentScrollPos = window.scrollY;
        if (scrollY > 90 && !isMobileMenuOpen && typeof isOpenModal === "boolean" && !isOpenModal) {
                setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
                setPrevScrollPos(currentScrollPos);
            } else {
                setVisible(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, isMobileMenuOpen, isOpenModal]);

    useEffect(() => {
        if (visible) {
            dispatch(onGetShowNavbar())
        } else {
            dispatch(onGetHideNavbar())
        }
    }, [visible]);

    const noNavBarRoutes = ["/metodo", "/pago", "/mantenimiento", "/checkout-pago"];
    const showNavBar = !noNavBarRoutes.some(route => router.asPath.includes(route));

    useEffect(() => {
        if (sideCartOpened && !isOpenModal && !loadingGetCart) {
            (openModal as () => void)() 
        } else if (!sideCartOpened && isOpenModal) {
            (closeModal as () => void)()
        }
    }, [sideCartOpened, loadingGetCart])

    const quizzHandle = (quizzId?: string) => {
      setQuizzActive(!quizzActive)
      quizzId && setSelectedQuizz(quizzId)
    }

    return (
    <>
        {
        !loadedNavBar &&
            <Loaders>
                <SkeletonLoader  width="100%" height="95px"/>
            </Loaders>
        }
        <NavBarWrapper  $show={showNavBar} $isLoading={loadedNavBar}>
            <ScrolNavBar $visible={visible} >
                {bannerId != ""  &&
                    <HeadBannerContent>
                        <HeadBanner
                            bannerId={bannerId}
                        />
                    </HeadBannerContent>
                }
                
                <MenuWrapper>
                    <NavBarMenu
                        openCart={openCart}
                        quizzHandle={quizzHandle}
                        selectedLink={selectedLink}
                    />
                </MenuWrapper>

                <Cart isOpen={isOpenModal} openCart={openCart} closeCart={closeCart} />

                {bannerId != ""  &&
                    <BenefitsBanner />
                }
            </ScrolNavBar>
            {
                quizzActive && selectedQuizz &&
                    <Quizz quizzActive={quizzActive} closeHandle={quizzHandle} quizzKey={selectedQuizz}/>
            }
        </NavBarWrapper>
    </>

    )
}

export default NavBar