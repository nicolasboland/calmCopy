import { Dispatch, SetStateAction } from "react"

export type InputCuotasSelectProps = {
  loadingPay?: boolean
  cuotasLoading?: boolean
  formData: DataToValidate
  setFormData: Dispatch<SetStateAction<DataToValidate>>
  cuotas: {
    cuota: string
    installment: number
  }[]
  loadingCardInfo?: boolean
}

export interface DataToValidate {
  card: string
  cardError: string
  nombreTitular: string
  nombreTitularError: string
  fechaVencimiento: Date
  fechaVencimientoError: string
  dni: string
  dniError: string
  codigoSeguridad: string
  codigoSeguridadError: string
  preferedCuotas: { cuota: string; installment: number }
}
