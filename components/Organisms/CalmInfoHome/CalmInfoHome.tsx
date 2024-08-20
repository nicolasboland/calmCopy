import {
  DivImgDescButt,
  SectionImgDescButt,
  DivInfo
} from "./styled";
import infoHome from './HomeImgDescButt.json'
import Images from "@/components/Atoms/Images/Images";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Button from "@/components/Atoms/Buttons/Button";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import {IProps, IPosts} from "./types"
import { useWidth } from "@/hooks/useWidth";


const CalmInfoHome = (props: IProps) => {
  const info = props.info ? props.info : infoHome
  const width = useWidth()
  const mobileView = width <= 768;

  return (
    <SectionImgDescButt>
    <DivImgDescButt>
      <DivInfo>
          <Images borderRadius="16x" data-src={info.firstImage} src={info.firstImage} alt="CalmImage" />
          <Margin margin="10px"/>
        <Titles
        titleTag="h3"
        color="fulvous"
        font="bold"
        fontSize="1.5em"
        lineHeight="1"
        responsiveMobile={{
          align: "center",
          fontSize: "1.2em"
        }}
        >{info.firstTitle}</Titles>
    
          <Margin margin="10px"/>
          <Text
         color="offBlack"
         font="light"
         fontSize="0.8em"
         responsiveMobile={{
          align: "center",
          fontSize: "0.7em"
        }}>{info.firstText}</Text>
        <Margin margin="8px"/>
        {mobileView ? (
            <Button 
            width="100%"
            href={info.firstButtonLink}
            children={info.firstButtonText}
            backgroundColor="white"
            textColor="fulvous"
            textColorHover="white"
            backgroundColorHover="fulvous"
            borderRadius="6px" 
            borderColor="fulvous"
            fontSize="1.12em"
            font="extraBold"
            ></Button>
        ): (
        <Button 
        size="medium"
        href={info.firstButtonLink}
        children={info.firstButtonText}
        backgroundColor="white"
        textColor="fulvous"
        textColorHover="white"
        backgroundColorHover="fulvous"
        borderRadius="6px" 
        borderColor="fulvous"
        fontSize="1.2em"
        font="extraBold"
        ></Button>  
        )}
        
      </DivInfo>
      <DivInfo>
          <Images borderRadius="16x" data-src={info.secondImage} src={info.secondImage} alt="CalmImage" />
          <Margin margin="10px"/>
        <Titles 
        titleTag="h3"
        color="fulvous"
        font="bold"
        fontSize="1.5em"
        responsiveMobile={{
          align: "center",
          fontSize: "1.2em"
        }}>{info.secondTitle}</Titles>
        <Margin margin="10px"/>
        <Text
        color="offBlack"
        font="light"
        fontSize="0.8em"
        responsiveMobile={{
          align: "center",
          fontSize: "0.7em"
        }}>{info.secondText}</Text>
        <Margin margin="8px"/>

        {mobileView ? (
            <Button 
            width="100%"
            href={info.secondButtonText}
            children={info.secondButtonText}
            backgroundColor="white"
            textColor="fulvous"
            textColorHover="white"
            backgroundColorHover="fulvous"
            borderRadius="6px" 
            borderColor="fulvous"
            fontSize="1.12em"
            font="extraBold"
            ></Button>
        ): (
        <Button 
        size="medium"
        href={info.secondButtonText}
        children={info.secondButtonText}
        backgroundColor="white"
        textColor="fulvous"
        textColorHover="white"
        backgroundColorHover="fulvous"
        borderRadius="6px" 
        borderColor="fulvous"
        fontSize="1.2em"
        font="extraBold"
        ></Button>  
        )}
      </DivInfo>
    </DivImgDescButt>
    </SectionImgDescButt>
  );
};

export default CalmInfoHome;
