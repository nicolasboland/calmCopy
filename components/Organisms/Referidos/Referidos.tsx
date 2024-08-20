import {
  ContainerInfoReferidos,
  CopyCoupon,
  CouponContainer,
  CopiedText,
  BackButton
} from "./styled";
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { ReferidosTable } from "../ReferidosTable/ReferidosTable";
import { IProps, Order } from "./types"
import SocialImages from "@/components/Molecules/SocialImages/SocialImages" 
import { useEffect, useState } from "react";
import { CopyTextBlack } from "@/utils/Icons";
import Button from "@/components/Atoms/Buttons/Button";

export const Referidos = ({data, setView}: IProps) => {
  const [orders, setOrders] = useState<undefined | Order[]>()
  const [coupon, setCoupon] = useState<undefined | string>()
  const [hasBeenCopiedLink, setHasBeenCopiedLink] = useState<boolean>(false)
  const [hasBeenCopiedCoupon, setHasBeenCopiedCoupon] = useState<boolean>(false)

  const copyText = (from : "link" | "coupon") => {
    if (coupon) {
      if (from === "link") {
        const text = "https://calm.ar/" + coupon
        navigator.clipboard.writeText(text).then(() => {
          setHasBeenCopiedLink(true);
  
          setTimeout(() => {
            setHasBeenCopiedLink(false);
          }, 1000);
        });
      } else {
        navigator.clipboard.writeText(coupon).then(() => {
          setHasBeenCopiedCoupon(true);
  
          setTimeout(() => {
            setHasBeenCopiedCoupon(false);
          }, 1000);
        });
      }
    }
  };

  useEffect(() => {
    setOrders(Object.entries(data).map(([key, value]) => ({
      ...value,
    })))
  }, [])

  useEffect(() => {
    if (orders && orders[0].coupon) {
      setCoupon(orders[0].coupon)
    }
  }, [orders])

  return (
    <>
      <ContainerInfoReferidos>
        <Titles
        font="extraBold"
        fontSize="2rem"
        color="yellowCalm"
        responsiveMobile={{
          fontSize:"1.8rem",
          align:"center"
        }}
        >
          Compartí La Calma y ganá platita
        </Titles>

        <Margin margin="1rem 0 0 0" marginMobile="1rem 20px">
          <Text
          font="bold"
          fontSize="1.5rem"
          color="carbon"
          responsiveMobile={{
            align:"center",
            fontSize:"0.9rem"
          }}
          >
            Nuestro propósito en este mundo dejó de ser solamente trascender, sino
            que vos también lo hagas.
          </Text>
        </Margin>

        <Margin margin="1rem 0 0 0" marginMobile="0 20px">
          <Text
          font="light"
          fontSize="1rem"
          responsiveMobile={{
            fontSize:"0.8rem",
            align:"center"
          }}
          >
            Es simple, una vez que unx se abre a La Calma y la practica, la
            energía empieza a fluir a través de sus seres queridxs. Recibir La
            Calma y compartirla es el camino asegurado hacia la felicidad y la
            abundancia.<br/><br/>
          </Text>
        </Margin>

        <CouponContainer>
          <Text
            font="light"
            textTag="span"
            fontSize="1rem"
            responsiveMobile={{
              fontSize:"0.7rem",
              align:"center"
            }}
          >
            Compartí este link:
          </Text>

          {
            orders &&
              <CopyCoupon onClick={() => copyText("link")}>
                <Text
                  font="bold"
                  textTag="span"
                  fontSize="1rem"
                  responsiveMobile={{
                    fontSize:"0.7rem",
                    align:"center"
                  }}
                >
                  https://calm.ar/{orders[0].coupon} {CopyTextBlack()}
                </Text>
              </CopyCoupon>
           }

          <CopiedText $hasBeenCopied={hasBeenCopiedLink}>
            <Text
              font="bold"
              textTag="span"
              color="auberginePerl"
              fontSize="1rem"
              responsiveMobile={{
                fontSize:"0.7rem",
                align:"center"
              }}
            >
              Copiado!
            </Text>
          </CopiedText>
        </CouponContainer>

        <Margin margin=".3rem"/>

        <CouponContainer>
          <Text
            font="light"
            textTag="span"
            fontSize="1rem"
            responsiveMobile={{
              fontSize:"0.7rem",
              align:"center"
            }}
          >
            Código del cupón:
          </Text>

          {
            orders &&
              <CopyCoupon onClick={() => copyText("coupon")}>
                <Text
                  font="bold"
                  textTag="span"
                  fontSize="1rem"
                  responsiveMobile={{
                    fontSize:"0.7rem",
                    align:"center"
                  }}
                >
                  {orders[0].coupon} {CopyTextBlack()}
                </Text>
              </CopyCoupon>
           }

          <CopiedText $hasBeenCopied={hasBeenCopiedCoupon}>
            <Text
              font="bold"
              textTag="span"
              color="auberginePerl"
              fontSize="1rem"
              responsiveMobile={{
                fontSize:"0.7rem",
                align:"center"
              }}
            >
              Copiado!
            </Text>
          </CopiedText>
        </CouponContainer>
        <SocialImages/>

        <Margin margin=".5rem"/>

        <Text
        font="bold"
        fontSize="1.2rem"
        color="carbon"
        responsiveMobile={{
          fontSize:"1rem",
          align:"center"
        }}
        >
          Seguí el camino de tus calmantes
        </Text>

       </ContainerInfoReferidos>

        {
          orders && 
          <ReferidosTable
          data={orders}
          />
        }

        <BackButton>
          <Button
            onClick={setView}
            size={"medium"}
            backgroundColor="yellowCalm"
            textColor="white"
            borderRadius="10px"
            fontSize="1.1rem"
            font="extraBold"
            backgroundColorHover="vividAmber"
            >
              Volver atras
          </Button>
        </BackButton>
    </>
  );
};
export default Referidos;
