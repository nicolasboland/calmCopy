import { ChangeEvent } from "react"

export type InputMaskLabelErrorProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
  formData: DataToValidate
  imagen?: string
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