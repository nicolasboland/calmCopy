import { useEffect, useState } from "react"
import { IProps } from "./types"
import { IBannerAndCucarda } from "@/state/hygraph/types"
import { useDispatch, useSelector } from "react-redux"
import { getBannerAndCucarda } from "@/state/hygraph/hygraphSelector"
import { onGetBannerAndCucarda } from "@/state/hygraph/hygraphActions"
import Images from "@/components/Atoms/Images/Images"

export const BannerAndCucarda = ({category, isBanner, isCucarda, srcBanner, srcCucarda}: IProps) => {
    const dispatch = useDispatch()
    const [bannerAndCucardaSelected, setBannerAndCucardaSelected] = useState<IBannerAndCucarda>()
    
    const bannerAndCucarda = useSelector(getBannerAndCucarda)

    useEffect(() => {
        if (!bannerAndCucarda) {
            dispatch(onGetBannerAndCucarda())
        }
    }, [])
    
    useEffect(() => {
      if (bannerAndCucarda) {
        setBannerAndCucardaSelected(
          (bannerAndCucarda?.find((bannerAndCucarda: IBannerAndCucarda) => bannerAndCucarda.categoria === category) ||
            undefined) as IBannerAndCucarda | undefined
        )
      }
    }, [bannerAndCucarda])

    return (
        <>
            {
                bannerAndCucardaSelected && (
                    isBanner && bannerAndCucardaSelected.banner ? (
                        <Images 
                        src={srcBanner ? srcBanner : bannerAndCucardaSelected.banner} 
                        alt="PromoBanner"
                        widthLCP={374} 
                        heightLCP={97} 
                        sizes="(max-width: 768px) 374px, 815px"
                        />
                    ) : (bannerAndCucardaSelected.cucarda || srcCucarda) && isCucarda && (
                        <Images 
                        src={srcCucarda ? srcCucarda : bannerAndCucardaSelected.cucarda ? bannerAndCucardaSelected.cucarda : ""} 
                        alt="cucarda" 
                    /*     width="30%"  */
                    /*     responsiveMobile={{ width:"25%"}} */
                        widthLCP={82} 
                        heightLCP={76} 
                        sizes="(max-width: 768px) 82px, 98px"
                        />
                    )
                )

            }
        </>
    )
}