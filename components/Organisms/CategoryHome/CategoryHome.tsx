import Titles from "@/components/Atoms/Typography/Titles"
import {
  CategoryHomeContainer,
  DivTitle,
  ColumnImages,
  DivImages,
  RowImages,
} from "./styled"
import ImageCard from "@/components/Molecules/ImageCard/ImageCard"
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"

const CategoryHome = () => {
  return (
    <CategoryHomeContainer>
      <DivTitle>
        <Titles
        titleTag="h3"
        color="millionGray"
        align="center"
        lineHeight="1"
        hasStrong
        >
          encontrá tu <b>descanso soñado</b>.
        </Titles>
      </DivTitle>
      <DivImages>
        <RowImages>
          <ImageCard
            link={productURLRedirectionByEnv("/colchones")}
            pillLayout="FirstPill"
            categoryPill="colchones"
            title="colchón calm"
            imageSrc="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/90892417-c12a-48e9-ee16-a83450c1ed00/fit=cover"
            imageMedia="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ef0d5ce3-c30e-47ca-f2e0-46609d7c0300/fit=cover"
            layout="FirstRow"
          />
          <ImageCard
            link={productURLRedirectionByEnv("/bases")}
            pillLayout="CenterPill"
            categoryPill="bases"
            title="bases"
            imageSrc="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8fd40189-cf08-44f0-7476-0d606611d900/fit=cover"
            imageMedia="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/d28b14de-05a3-46c4-d956-37d77dea4100/fit=cover"
            layout="SecondRow"
          />
        </RowImages>
        <ColumnImages>
          <ImageCard
            link={productURLRedirectionByEnv("/almohadas")}
            pillLayout="HalfPill"
            categoryPill="almohadas"
            title="almohadas"
            imageSrc="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/40b10026-960c-4a32-6045-85c6c3f22a00/fit=cover"
            imageMedia="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/f5d6a1db-f319-424a-acc1-6c61da906700/fit=cover"
            layout="FirstColumn"
          />
          <ImageCard
            link={productURLRedirectionByEnv("/ropa-de-cama")}
            pillLayout="HalfPill"
            categoryPill="ropa-de-cama"
            title="ropa de cama"
            imageSrc="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/7879f78f-c7f3-46c5-be3a-9d7ad9e84300/fit=cover"
            imageMedia="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/96009bd6-f0d1-46f1-dcbc-13f2a12a8900/fit=cover"
            layout="SecondColumn"
          />
        </ColumnImages>
      </DivImages>
    </CategoryHomeContainer>
  )
}

export default CategoryHome
