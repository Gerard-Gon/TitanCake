
let listaRegistrados= [{correo: "anacleto@duocuc.cl", password: "111"}];

function inicioSesion(){
    let correoI = document.getElementById("email").value;
    let passwordI = document.getElementById("password").value;

    let verCorreo = validarFull("correo",correoI) && validarCarateres("correo",correoI);
    let verPassword = validarFull("password",passwordI);
    let usuarioValido = listaRegistrados.find(usuario => usuario.correo == correoI && usuario.password == passwordI);
    
    if(usuarioValido && verCorreo == 1 && verPassword ==1){
        alert("Logeado exitoso")
        alert(`Bienvenido sr(a):  ${correoI}`);
    }else{
        alert("Usuario o contraseña no validos");
    }

}

function validarFull(atributo, valor){
    if(validarCampos(valor) == 1){
        return 1;
    }else{
        alert(`El campo ${atributo} está vacío`)
        return 0;
    }
}


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

// Función que valida el límite de caracteres maximo que es 500.
function validarCarateres2(atributo, valor){
    if(valor.length > 500){
        alert(`El campo ${atributo} excede el límite de caracteres`)
        return 0;
    }else{
        return 1;
    }

}