
let listaRegistrados= [{correo: "a@a", password: "111"}];

function inicioSesion(){
    let correoI = document.getElementById("email").value;
    let passwordI = document.getElementById("password").value;

    let verCorreo = validarFull("correo",correoI);
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