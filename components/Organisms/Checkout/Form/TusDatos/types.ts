export interface UserData {
  telefono: string;
  email: string;
  nombre: string;
  apellido: string;
  dni: string;
  cuit: string;
  conFacturaA?: boolean;
}

export interface DataToValidate {
  telefono: string;
  telefonoError: string;
  email: string;
  emailError: string;
  nombre: string;
  nombreError: string;
  apellido: string;
  apellidoError: string;
  dni: string;
  dniError: string;
  cuit: string;
  cuitError: string;
  conFacturaA?: boolean;
  [key: string]: string | boolean | undefined
}