import { ContainerResumen, InfoCustomer } from "./StepsCss";
import { format } from "date-fns";
interface IFormData {
  address: string;
  province: string;
  city: string;
  zipCode: string | undefined;
  preferedTime?: string;
  preferedDate?: Date;
  notes?: string;
  placeDetails?: string;
  pickupOption?:string;
  selectedPickUpStore?:string
}

interface IProps {
  data: IFormData;
}
function formatearFechaConLetras(fecha:Date) {
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  const dia = fecha.getDate();
  const diaSemanaNombre = diasSemana[fecha.getDay()];
  const mesNombre = meses[fecha.getMonth()];
  return `${diaSemanaNombre} ${dia} de ${mesNombre}`;
}
; 

function Step1Resumen({ data }: IProps) {
  const {pickupOption,address,preferedDate,preferedTime,placeDetails,zipCode,city,selectedPickUpStore}=data
  
  return(
    <ContainerResumen>
      <InfoCustomer>
      {pickupOption==="Envío a domicilio"
      ?<div>
        <p>{`${pickupOption}`}<br/></p>
        <p>{`${preferedDate&&`Llega el ${formatearFechaConLetras(preferedDate)}`} ${preferedTime}`}<br/></p>
        <p>{`${address}`}<br/></p>
        <p>{`${placeDetails?`${placeDetails}/${zipCode}/${city}`:`${zipCode}/${city}`}`}</p>
      </div>
      
      :<div>
       <p>{`${pickupOption}`}<br/></p>
       <p>Lunes a domigo de 11 a 20hs.</p>
       {selectedPickUpStore==="Godoy Cruz 1737"
       ? <p>{`${selectedPickUpStore}, Palermo, CABA`}<br/></p>
       : selectedPickUpStore==="Santos Dumont 3507" ?
       <p>{`${selectedPickUpStore}, Chacarita, CABA`}<br/></p>
       :<p>{`${selectedPickUpStore}, Austria, CABA`}<br/></p>}
      
      </div>}

      </InfoCustomer>
    </ContainerResumen>
  )
}

export default Step1Resumen;
