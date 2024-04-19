function Validation(values) {
    const error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === "") {
        error.email = "No has ingresado el Correo"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "El correo no existe"
    } else {
        error.email = ""
    }
    
    if(values.password === "") {
        error.password = "No has ingresado contraseña"
    }
    else if (!password_pattern.test(values.password)){
        error.password = "La contraseña es incorrecta"
    }else {
        error.password = ""
    }
    return error;
    
}

export default Validation;