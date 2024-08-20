import { ContainerResumen, InfoCustomer } from "./StepsCss";

interface IFormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  dni: string;
  cuit: string;
  conFacturaA: boolean;
}

interface IProps {
  data: IFormData;
}

function Step2Resumen({ data }: IProps) {
  return (
    <ContainerResumen>
      <InfoCustomer>
        <span>{`${data.email}`} </span> <br/>
        <span>{`${data.nombre} ${data.apellido}`}</span> <br/>
        <span>{`${data.dni}`} </span> <br/>
        <span>{`${data.telefono}`} </span> <br/>
        {
          data.conFacturaA && <span>{`CUIT: ${data.cuit}`}</span>
        }
          </InfoCustomer>
    </ContainerResumen>
  );
}

export default Step2Resumen;
