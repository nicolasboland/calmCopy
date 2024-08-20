import { IProps } from "./types"
import { Container, Item } from "./styled"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Accordion from "@/components/Organisms/Accordion/Accordion"
import { useWidth } from "@/hooks/useWidth"
import parse from 'html-react-parser';
import { useEffect, useState } from "react"

export const ThreeBlockText = ({title, info, hasAccordion, isHome, isOrange} : IProps) => {
    const width = useWidth()
    const [render, setRender] = useState(false)
  
    useEffect(() => {
      setRender(true)
    },[])

    if (!render) return null

    return (
        <>
            {
                title?.hasTitle && (
                    <>
                        <Margin margin="1rem 0 0 0"/>
                        <Titles
                        titleTag="h2"
                        color={title.color}
                        font={title.font}
                        fontSize={title.fontSize}
                        boldTitle={title.boldTitle}
                        align="center"
                        responsiveMobile={{
                            fontSize: title.responsiveFontSize
                        }}
                        >
                            {parse(title.title)}
                        </Titles>
                    </>
                )
            }
        <Container>
            {
              (width > 768 || !hasAccordion) &&
                info.map((item) => {

                    const description = item.description.replace(/<p>/g, " ").replace(/<\/p>/g, ' ');
                    return (
                    <Item key={item.title}>
                        <Titles
                        titleTag="h3"
                        fontSize="1.7em"
                        font={isHome ? "regular" : "extraBold"}
                        color={isOrange ? "darkerYellowCalm" : "offBlack"}
                        hasStrong
                        >
                            {parse(item.title)}
                        </Titles>
                        <Margin margin="20px 0 0px 0"/>
                        <Text
                        fontSize="1em"
                        hasStrong
                        >
                            {parse(description)}
                        </Text>
                    </Item>
                )
                })
            }
            
            {
                hasAccordion && width < 768 && (
                    <Accordion items={info} isOrange={isOrange}/>
                )
            }
        </Container>
        </>
    )
}
