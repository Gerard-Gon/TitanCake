let listaUsuarios = [];

// Función que se ejecuta al hacer presionar el botón "Registrar".
function validacion_registrar(){
    let nombres = document.getElementById("first_name");
    let apellidos = document.getElementById("last_name");
    let correo = document.getElementById("email");
    let password = document.getElementById("password");
    
    let verNombres = validarFull("nombres",nombres.value) && validarCarateres("nombres",nombres.value);
    let verApellidos = validarFull("apellidos",apellidos.value) && validarCarateres("apellidos",apellidos.value);
    let verCorreo = validarFull("correo",correo.value)&& validarCarateres("correo",correo.value);
    let verPassword = validarFull("password",password.value) && validarCarateres("password",password.value);

    if(verNombres == 1 && verApellidos == 1 && verCorreo == 1 && verPassword == 1 ){
        let usuario = {
            nombres: nombres.value,
            apellidos: apellidos.value,
            correo: correo.value,
            password: password.value,
        };

        listaUsuarios.push(usuario);

        alert("Usuario registrado exitosamente")

        nombres.value = "";
        apellidos.value = "";
        correo.value = "";
        password.value = "";

        console.log("Usuarios registrados: ", listaUsuarios);
        
    }else{
        alert("Complete todos los campos con la información")
    }
}

// Valida que el campo no esté vacío.
function validarFull(atributo, valor){
    if(validarCampos(valor) == 1){
        return 1;
    }else{
        alert(`El campo ${atributo} está vacío`)
        return 0;
    }
}

// Función que valida si el campo está vacío.
function validarCampos(texto){
    if(texto.trim() == "" ){
        return 0;
    }else{
        return 1;
    }
}

// Función que valida el límite de caracteres que es 100.
function validarCarateres(atributo, valor){
    if(valor.length > 100){
        alert(`El campo ${atributo} excede el límite de caracteres`)
        return 0;
    }else{
        return 1;
    }
}



