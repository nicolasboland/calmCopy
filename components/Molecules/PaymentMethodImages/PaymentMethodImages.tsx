import {IProps} from "./types"
import{
    DivPaymentMethod,
    DivPaymentMethodImg,
    ChildrenIconHolder
} from "./styled"
import Images from "@/components/Atoms/Images/Images"
import Text from "@/components/Atoms/Typography/Text"

const PaymentMethodImages = ({items} : IProps) => {
    return(
        <DivPaymentMethod>
        {items.map((item) => (
          item.href ? (
              item.dataFiscal ? (
                <Text textTag="a" link={item.href} target='_blank' rel='noreferrer' key={item.href}>
                       <Images src={item.img} alt={item.alt} isLazy/>
                  </Text>
              ): (
                <ChildrenIconHolder key={item.href}>
                    <Text textTag="a" link={item.href} target='_blank' rel='noreferrer'>
                        <Images src={item.img} alt={item.alt} isLazy widthHTML={40} heightHTML={40}/>
                    </Text>
                </ChildrenIconHolder>
                )
                )
          : 
            (<DivPaymentMethodImg key={item.alt}>
              <Images src={item.img} alt={item.alt}/>
            </DivPaymentMethodImg>)
          
        ))}
      </DivPaymentMethod>
    )
}
export default PaymentMethodImages