import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import {
    DivWithdrawals,
    DivWithdrawalsText
  } from "./styled";
  import { useWidth } from "@/hooks/useWidth";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
  
  const Withdrawals = () => {
    const width = useWidth();
    const breakpoint = 768;
  
    return (
        <DivWithdrawals>
          <DivWithdrawalsText>
            <Titles
                titleTag="h2"
                color="offBlack"
                font="extraBold"
                fontSize="2em"
                align="center"
                responsiveMobile={{
                    fontSize:"21px"
                }}>Modalidad de retiros</Titles>
            <Margin margin="2rem"  marginMobile="1.5rem"/>
            <Text
                font="regular"
                color="offBlack"
                lineHeight="1.618"
                align="center"
                >
                <Text
                textTag="span"
                font="extraBold">La acción sólo aplica a pedidos en zonas determinadas de CABA y GBA</Text>
                 . <br />
                Retiramos el colchón que ya no vas a usar, tu ex colchón, en el
                momento que entregamos tu Calm. Vamos a estar comunicandonos con vos
                apenas recibamos tu pedido para coordinar el paso a paso. <br />
                <Text
                textTag="span"
                font="extraBold"> Es importante que el colchón esté en buen estado </Text>y, en lo
            posible, envuelto para que llegue sano a su nuevo hogar. 💛
            </Text>
            <Margin margin="0" marginMobile="1.5rem"/>
          </DivWithdrawalsText>
  
          {width <= breakpoint && (
            <DivWithdrawalsText>
              <Titles
                titleTag="h2"
                color="offBlack"
                font="extraBold"
                align="center"
                fontSize="2em"
                responsiveMobile={{
                    fontSize:"21px"
                }}>Cyber Monday</Titles>
                <Margin margin="1em"/>
               <Text
                font="regular"
                color="offBlack"
                lineHeight="1.618"
                align="center"
                >
                Durante el evento incrementamos el volumen de envíos y 
                <Text
                textTag="span"
                font="extraBold"> puede ser que no tengamos </Text>
                espacio para retirar tu ex colchón al mismo tiempo que entregamos el nuevo. Si esto pasa no te preocupes, después de la entrega 
                <Text
                textTag="span"
                font="extraBold"> vamos a comunicarnos con vos </Text>
                para coordinar otro día para el retiro de la donación.
              </Text>
            </DivWithdrawalsText>
          )}
        </DivWithdrawals>
  
    );
  };
  
  export default Withdrawals;