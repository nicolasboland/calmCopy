import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import {DivInfo, ItemLi } from "./styled"
import Text from "@/components/Atoms/Typography/Text";


interface IProps {
  sizesText: string
  sizesPrice: string
  sizeLinePrice: string
  sizelink: string
}

const ExtraInfoHome = ({ sizesText, sizesPrice, sizeLinePrice, sizelink }: IProps) => {
  return (
    <ItemLi>
      <a href={sizelink} >
        <DivInfo>
          <Margin margin="7px 0" />
        <Text
        font="medium"
        responsiveMobile={{
          color: "offBlack"
        }}>{sizesText}: &nbsp; </Text>
        <Text>
        <Text
        font="extraBold"
        textTag="span"
        responsiveMobile={{
          color: "black",
          fontSize: "1em"
        }}>
            ${sizesPrice} &nbsp;
          </Text>
          {(sizesPrice != sizeLinePrice) && 
          <Text
          font="light"
          textTag="span"
          color="millionGray"
          textDecoration="line-through">
              ${sizeLinePrice}
          </Text>}
        </Text>
        </DivInfo>
      </a>
    </ItemLi>
  );
};

export default ExtraInfoHome;
