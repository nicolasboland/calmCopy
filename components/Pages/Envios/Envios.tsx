import {
    ComponentContent,
  } from "./styled";
  import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection";
  import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor";
  import TextAndImageEnvios from "@/components/Molecules/TextAndImageEnvios/TextAndImageEnvios";
  
  const Envios = () => {
    return (
      <>
        <HeaderBackColor
          backgroundColor={"superSilver"}
          title="Nuestra política de envios"
          titleColor="decorYellow"
          titleFont="regular"
          titleFontSize="2.6em"
          subtitle="Es simple, envío gratis a todo el país."
          subtitleColor="aswadBlack"
          subtitleFont="extraBold"
          subtitleFontSize="1.1em"
        />

        <ComponentContent>
          <TextAndImageEnvios
            title="Queremos compartir con vos los ahorros logisticos por hacer que entre un todo en una caja."
            subtitle="Llegamos gratis a casi todo el país."
            image="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-08-1.png"
            altImage="Caja colchonCalm"
            imagePosition="left"
          />
  
          <TextAndImageEnvios
            title="Entregas en menos de 24hs en el AMBA"
            subtitle="Podes selccionar entre 2 rangos de entregas (9:00 a 14:00 o 13:00 a 19:00) y si compras antes de las 12:00hs podes recibir el mismo día. <br/><br/>
                      El envío en 24hs está sujeto a la disponibilidad de stock y a la zona del AMBA en la que te encuentres. Calcula el tiempo de envío en la página del producto que quieras comprar para confirmar la fecha de entrega."
            image="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-18-1-1-e1615776944995.png"
            altImage="Icono de camioneta calm"
            imagePosition="right"
          />
  
          <TextAndImageEnvios
            title="Entregamos gratis en todo el pais"
            subtitle="Somos una empresa de argentinos para argentinos, por eso elegimos los mejores proveedores logísticos de cada zona para poder dar la mejor propuesta en cada rincón. <br/><br/>
                      Aún no hacemos envíos a Tierra del Fuego, pero estamos trabajando para llegar pronto."
            image="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-10.png"
            altImage="Argentina"
            imagePosition="left"
          />
          
          <TextAndImageEnvios
            title="El envío gratis aplica para todos los productos"
            subtitle=" En el caso de las almohadas es comprando a partir de 2 unidades."
            image="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-12-e1585764278939.png"
            altImage="casa"
            imagePosition="right"
          />
  
          <TextAndImageEnvios
            title="En caso de que no ames tu nuevo Calm, no te cobramos el envío devuelta."
            subtitle="Proba cualquier producto de Calm por 30 noches. Si no te gusta, lo devolves y te reembolsamos cada centavo.Así de simple como lo lees."
            image="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-13-1.png"
            altImage="devolución de producto"
            imagePosition="left"
          />
  
        </ComponentContent>
  
        <ButtonSection
        middleButton
          imageDesktop="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
          imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
        />
      </>
    );
  };
  export default Envios;
  