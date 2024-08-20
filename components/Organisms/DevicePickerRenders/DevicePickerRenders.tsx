/* import { useEffect, useState } from "react"
import { RenderContainer, ContainerButtons, IphoneImg, ButtonRenderLink } from "./styled"
import { IProps } from "./types"
import renderLinks from "@/utils/rendersLinks.json"
import { Device } from "@/utils/device"
import { Render, Product } from "@/utils/Icons"
import Renders3D from "@/components/Organisms/Renders3D/Renders3D"

export const DevicePickerRenders = ({
    isRenderSelected, 
    altoState, 
    idProd,
    setIsRenderSelected
}: IProps) => {
    const [device, setDevice] = useState<'desktop' | 'androidIntent' | 'iphone'>('desktop')
    const [isPlus, setisPlus] = useState(false)
    const [renderLink, setRenderLink] = useState("")
    const product = idProd == "334" ? "Original" : idProd === "2067781" ? "Hibrido" : ""

    useEffect(() =>{
        setDevice(Device(navigator.userAgent))
    }, [])

    useEffect(() =>{
      setRenderLink(product === "Original" ? renderLinks[device].original : renderLinks[device].hibrido)
    }, [device])

    useEffect(() =>{
        setRenderLink(product === "Original" ?
        isPlus ?
          renderLinks.androidIntent.originalPlus : renderLinks.androidIntent.original 
        : product === "Hibrido" 
        && isPlus ? 
          renderLinks.androidIntent.hibridoPlus : renderLinks.androidIntent.hibrido)
    }, [isPlus])


    useEffect(() => {
        setisPlus(altoState ? altoState.split("-")[1] === "plus" : false)
    }, [altoState])


    return (
        <>
        <RenderContainer $isRenderSelected={isRenderSelected}>
            {
                device === "iphone" ? (
                <a rel="ar" href={renderLink}>
                    <IphoneImg/>
                </a>
                ) : ( 
                <Renders3D 
                product={product}
                isPlus={isPlus}
                />
                )
            }
        </RenderContainer>

        {   
            (idProd === "334" || idProd === "2067781") && (
                <ContainerButtons 
                $isRenderSelected={isRenderSelected} 
                onClick={(e) => {
                    setIsRenderSelected(!isRenderSelected)
                    e.stopPropagation()
                }}>
                    {
                    <>
                        {Render()}
                        {Product()}
                    </>
                    }
                </ContainerButtons>
            )
        }
        {
            isRenderSelected && device === "androidIntent" && 
            <ButtonRenderLink href={renderLink}>ver en tu casa</ButtonRenderLink>
        }
        </>
    )
} */