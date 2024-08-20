import { DataToValidate } from "../TusDatos/types";

export const validator = (
  fieldName: string, 
  input: string, 
  dataToValidate: any, 
  onBlur?: boolean,
  CvvCaracteres?: number
) => {
/* const regexString = /^[a-zA-Z\p{P}]*$/;  *///solo letras sin espacios
const regexNumero = /^[0-9]*$/; //solo numeros sin espacios
const regexaTelefono = /^\+?[0-9]*$/; //solo numeros sin espacios y el simbolo +
const regexEmail = /^\s*$|^[^\s@]+@[^\s@]+\.[^\s@]+[a-zA-Z0-9]+$/; //email sin espacios
const regexEmailType = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}(?<!\.[a-zA-Z0-9]{1})$/;
const regexWhiteSpaces = /^\S*$/ //verifica que no tenga espacios
const regexStringAndNumber = /^[0-9a-zA-Z\s]*$/; //espacios, numeros y letras
const regexHasOnlySpaces = /^\s+$/ //comprueba que no sean solo espacios
const regexStringAndSpaces = /^[a-zA-Z\s]*$/ //letras y espacios
const regexContainsAngleBrackets = /<[^\s<>]*>/;

const regexIdTransaction = /^\d{4},\d{4}$/
const regexNumeroComa = /^[0-9,]*$/

const maxCaracteres = {
  number: fieldName === "dni" ? 10 : 13,
  longNumber: 25,
  string: 50,
  longString: 70,
  cp: 4,
  notes: 200,
}

const minCaracteres = {
  longNumber: 10
}

const data = { ...dataToValidate }; 
 
  switch (fieldName) {
    case 'nombre':
    case 'apellido':
      if (onBlur && !dataToValidate[fieldName]) {
        data[fieldName + "Error"] = `Debe ingresar el ${fieldName} completo`
      } else if (regexHasOnlySpaces.test(input)) {
        data[fieldName + "Error"] = `No contener solo espacios en blanco`
      } else if (!regexStringAndSpaces.test(input) || input.length > maxCaracteres.string) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'dni':
    case 'cuit':
      if(onBlur) {
        if(!dataToValidate[fieldName]){
          data[fieldName + "Error"] = `Debe ingresar el ${fieldName} completo`
        } else if (input.length > 0 && input.length < 6) {
          data[fieldName + "Error"] = "Debe ser mayor a 6 numeros"
        } else if (/0000/.test(input)) {
          data[fieldName + "Error"] = "No pueden ser solo 0"
        } else {
          data[fieldName + "Error"] = ""
        }
      } else if (!regexNumero.test(input) || input.length >= maxCaracteres.number) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'email':
      if (onBlur) {
        if (!dataToValidate[fieldName]) {
          data[fieldName + "Error"] = `Debe ingresar el ${fieldName} completo`
        } else if (!regexEmailType.test(input)) {
          data[fieldName + "Error"] = "El email debe tener más de un caracter después del punto: Ejemplo '.com' en vez de '.c'"
        } else if (!regexEmail.test(input)) {
          data[fieldName + "Error"] = "Debe ingresar un email válido"
        } else if (regexContainsAngleBrackets.test(input)) {
          data[fieldName + "Error"] = "Contiene caracteres inválidos"
        } else {
          data[fieldName + "Error"] = ""
        }
      } else if (input.length > maxCaracteres.longString || !regexWhiteSpaces.test(input)) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'telefono':
      if (onBlur) {
        
      if (!dataToValidate[fieldName]) {
          data[fieldName + "Error"] = `Debe ingresar el ${fieldName} completo`;
      } else if (input.replace(/\D/g, '').length < 10) {
          data[fieldName + "Error"] = `El teléfono no puede tener menos de 10 dígitos`;
      } else if (/0000/.test(input)) {
          data[fieldName + "Error"] = "El teléfono no puede ser solo ceros";
      } else if (input.length > maxCaracteres.longNumber) {
          return data;
      }

      } else if(!regexaTelefono.test(input)){
        data[fieldName + "Error"] = `El teléfono solo puede contener números`
      } else if(input.length > maxCaracteres.longNumber) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'placeDetails':
    case 'city':
    case 'notes':
      if (onBlur) {
        if (regexHasOnlySpaces.test(input)) {
          data[fieldName + "Error"] = "No puede contener solo espacios vacios"
        } else if (fieldName === "city" && !dataToValidate[fieldName]) {
          data[fieldName + "Error"] = `Debe ingresar la localidad`
        }
      } else if (!regexStringAndNumber.test(input)){
        return data
      } else if (fieldName === "notes" && input.length > maxCaracteres.notes) {
        return data
      } else if (!(fieldName === "notes") && input.length > maxCaracteres.string) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'zipCode':
      if(onBlur) {
        if(!dataToValidate[fieldName]){
          data[fieldName + "Error"] = `Debe ingresar el codigo postal`
        } else if (input.length < 4) {
          data[fieldName + "Error"] = "Deben ser 4 numeros"
        } else if (/0000/.test(input)) {
          data[fieldName + "Error"] = "No pueden ser solo 0"
        } else {
          data[fieldName + "Error"] = ""
        }

      } else if (!regexNumero.test(input) || input.length > maxCaracteres.cp) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'card':
      if(onBlur) {
        if(!dataToValidate[fieldName]){
          data[fieldName + "Error"] = `Debe ingresar el numero de tarjeta`
        } else if (input.length <= 16 && input.length >= 13 || input.length < 13) {
          data[fieldName + "Error"] = "El número de tajeta no es válido"
        } else {
          data[fieldName] = input
          data[fieldName + "Error"] = ""
        }
      }
      break;
    case 'nombreTitular' :
      if (onBlur) {
        if (regexHasOnlySpaces.test(input)) {
          data[fieldName + "Error"] = "No puede contener solo espacios vacios"
        } else if (!dataToValidate[fieldName]) {
          data[fieldName + "Error"] = `Debe ingresar el nombre completo`
        }
      } else if (!regexStringAndSpaces.test(input) || input.length > maxCaracteres.string) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case 'codigoSeguridad': 
      if(onBlur) {
        if(!dataToValidate[fieldName]){
          data[fieldName + "Error"] = `Debe ingresar el codigo completo`
        } else if (input.length > 3) {
          data[fieldName + "Error"] = `Debe tener 3 digitos`
        } else {
          data[fieldName + "Error"] = ""
        }
      } else if (!regexNumero.test(input) || input.length > (CvvCaracteres || 3)) {
        return data
      } else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    case "idTransaction":
    case "lastFourDigits":
      if(onBlur) {
        if(!dataToValidate[fieldName]) {
          data[fieldName + "Error"] = `Es necesario el ID de la transacción`
        } else if(dataToValidate.methodTitle === "Multiples metodos de pago") {
          if(!regexIdTransaction.test(input)) {
            data[fieldName + "Error"] = `Formato no valido, debe ser 0000,0000`
          }
        } else {
          data[fieldName + "Error"] = ""
        }
      } else if(dataToValidate.methodTitle === "Multiples metodos de pago" ) {
        if(!regexNumeroComa.test(input)) {
          data[fieldName + "Error"] = `Solo numeros`
        } else {
          data[fieldName] = input
          data[fieldName + "Error"] = ""
        }
      } else if (!regexNumero.test(input)) {
          data[fieldName + "Error"] = `Solo numeros`
        }
        else {
        data[fieldName] = input
        data[fieldName + "Error"] = ""
      }
      break;
    default:
    break;
  } 
return data;
};
