import { FooterCheckoutContainer } from "./styled";
import FooterContact from "@/components/Molecules/FooterContact/FooterContact";
import PaymentMethodImages from "@/components/Molecules/PaymentMethodImages/PaymentMethodImages";
import FooterPaymentMethods from "@/utils/FooterPaymentMethods.json";

/* ,{
  "href":"https://www.wibond.com.ar/",
  "img":"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a6089b3b-d35c-4b9c-b69b-a6944b9a6a00/fit=cover",
  "alt":"wibond"
}
 */
const FooterCheckout = () => {
  return (
    <FooterCheckoutContainer>
      <FooterContact
        title={"Contactanos"}
        items={[
          {
            links: [
              {
                text: "+54 9 11 4049-0344",
                href: "https://wa.me/message/XBAEHPNQMBD4A1",
              },
              {
                text: "hola@calmessimple.com.ar",
                href: "mailto:hola@calmessimple.com.ar",
              }
            ],
          },
        ]}
      />
      <PaymentMethodImages items={FooterPaymentMethods} />
    </FooterCheckoutContainer>
  );
};

export default FooterCheckout;
