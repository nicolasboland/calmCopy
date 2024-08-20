import { useDispatch, useSelector } from "react-redux"
import Button from "@/components/Atoms/Buttons/Button"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import { Container } from "./styled"
import { onGetHygraphClearCache } from "@/state/hygraph/hygraphActions"
import { getClearCache } from "@/state/hygraph/hygraphSelector"
import { useEffect, useState } from "react"
import { getUserIsLogged } from "@/state/user/userSelector";
import { IStore } from "@/state/types"
import { onGetUserIsLogged } from "@/state/user/userActions"
import Spinner from "@/components/Atoms/Spinner/Spinner"
import { useRouter } from "next/router"

const ClearCacheLanding = () => {
    const dispatch = useDispatch()
    const route = useRouter()
    const hygraphResponse = useSelector(getClearCache)
    const userIsLogged  = useSelector((state: IStore) => getUserIsLogged(state));
    const [response, setResponse] = useState<string | undefined>()
    const urls = [
        "https://calmessimple.com.ar/api/hygraph/banner_and_cucarda",
        "https://calmessimple.com.ar/api/hygraph/bigbanners",
        "https://calmessimple.com.ar/api/hygraph/head_banners_data",
        "https://calmessimple.com.ar/api/hygraph/home_data",
        "https://calmessimple.com.ar/api/hygraph/pills_data",
        "https://calmessimple.com.ar/api/hygraph/popup_data",
        "https://calmessimple.com.ar/api/hygraph/sidecart_data",
        "https://calmessimple.com.ar/api/hygraph/tyc_content_data",
        "https://calmessimple.com.ar/api/hygraph/tyc_promotion_content_data",
    ]

    const handleHygraphCache = () => {
        dispatch(onGetHygraphClearCache(urls))
    }

    useEffect(() => {
        dispatch(onGetUserIsLogged())
    }, [])

    useEffect(() => {
        if(userIsLogged && !userIsLogged.data){
            route.push("/")
        }
    }, [userIsLogged])

    useEffect(() => {
        if(hygraphResponse) {
            setResponse("Cache de hygraph limpia") 
        } else {
            setResponse("Hubo un error, 0-800-@itfront")
        }
    }, [hygraphResponse])

    return (
        <>
        {
            userIsLogged?.data ? 
            <Container>
                <Titles
                font="medium"
                fontSize="2.5rem"
                align="center"
                >
                    Limpiador de cache
                </Titles>

                <div>
                    <Button
                    backgroundColor="yellowCalm"
                    backgroundColorHover="auberginePearl"
                    textColor="white"
                    font="extraBold"
                    size="small"
                    onClick={handleHygraphCache}
                    >
                        Hygraph
                    </Button>

                    {
                        response && 
                        <Text
                        font="medium"
                        fontSize="1rem"
                        align="center"
                        >
                            {response}
                        </Text>
                    }
                </div>
            </Container>
            : <Spinner
            isBlack
            isCenterScreen
                ></Spinner>
        }
        </>
        
    )
}

export default ClearCacheLanding