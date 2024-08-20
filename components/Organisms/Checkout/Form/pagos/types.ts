export interface IProps {
  handleStepFormSubmit: (step: string, data: UserData) => void;
  currentStep: number;
  userDataForm: any;
}

export interface UserData {
  card: string;
  nombreTitular: string;
  fechaVencimiento: Date;
  dni: string;
  codigoSeguridad: string;
  preferedCuotas: {cuota: string, installment: number};
}

export interface DataToValidate {
  card: string;
  cardError: string;
  nombreTitular: string;
  nombreTitularError: string;
  fechaVencimiento: Date,
  fechaVencimientoError: string;
  dni: string;
  dniError: string;
  codigoSeguridad:string;
  codigoSeguridadError: string;
  preferedCuotas: {cuota: string, installment: number};
}

export interface DataPLocalm {
  methodTitle: string,
  methodCode: string,
  localmTitle: string,
  localmCode: string,
  idTransaction: string,
  idTransactionError: string,
  lastFourDigits: string,
  lastFourDigitsError: string,
}

export interface ImagesCard {
  imagenes: Images,
  candado: string
};

interface Images {
  [key: string]: any
};