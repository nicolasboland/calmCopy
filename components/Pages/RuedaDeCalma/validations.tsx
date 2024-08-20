const validateEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    let errors: { [key: string]: string } = {};

    if (!email) {
      errors.email = "El email no puede estar vacio";
    } else if (!emailRegex.test(email)) {
      errors.email = "El email ingresado no es válido";
    }
  
    return errors;
  };
  export default validateEmail
  