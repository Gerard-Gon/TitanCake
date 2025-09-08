listaContacto = [];

function validar(){
    let nombre = document.getElementById("first_name");
    let correo = document.getElementById("email");
    let comentario = document.getElementById("comentario");
    let verNombre = validarFull("nombre",nombre.value) && validarCarateres("nombre",nombre.value);
    let verCorreo = validarFull("correo",correo.value);
    let verComentario = validarFull("comentario",comentario.value) && validarCarateres2("comentario",comentario.value);

    if(verNombre == 1 && verCorreo == 1 && verComentario == 1){
        alert("Datos correctos ");

        let contacto = {
            Nombre: nombre.value,
            correo: correo.value,
            comentario: comentario.value
        };

        listaContacto.push(contacto);

        nombre.value = "";
        correo.value = "";
        comentario.value = "";

        console.log("Mensaje enviado Correctamente");

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

// Función que valida el límite de caracteres.
function validarCarateres(atributo, valor){
    if(valor.length > 100){
        alert(`El campo ${atributo} excede el límite de 100 caracteres`)
        return 0;
    }else{
        return 1;
    }
}

function validarCarateres2(atributo, valor){
    if(valor.length > 500){
        alert(`El campo ${atributo} excede el límite de 500 caracteres`)
        return 0;
    }else{
        return 1;
    }

}