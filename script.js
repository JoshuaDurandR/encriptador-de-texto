const campoTexto = document.querySelector("#texto-ingresado");
const campoRespuesta = document.querySelector("#Mensaje-resultado");
const copiar = document.querySelector("#copiar");
const sugerencia = document.querySelector("#Mensaje-sugerencia");
const dolly = document.querySelector("#Dolly");

const matriz_code = [
    ["e", "enter"],  // índice 0
    ["i", "imes"],   // índice 1
    ["a", "ai"],     // índice 2
    ["o", "ober"],   // índice 3
    ["u", "ufat"]    // índice 4
];

function validarTexto(textoRevisado) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(textoRevisado);
}

function mostrarError(mensaje) {
    alert(mensaje);
}

function buttonEncriptar(){
    if (validarTexto(campoTexto.value) === true){
        const texto = encriptar(campoTexto.value); // Se realiza la encriptación
        campoRespuesta.innerText = texto; // Usar innerText porque un "p" no tiene atributo value
        copiar.style.display = "block"; // Aparece el botón de copiar que está oculto
        sugerencia.style.display = "none"; // Desaparece mensaje sugerencia
    } else{
        mostrarError("No se permiten caracteres especiales, solo letras minúsculas y espacios");
    }
}

function buttonDesencriptar(){
    if (validarTexto(campoTexto.value) === true){
        const texto = desencriptar(campoTexto.value); // Se realiza la desencriptación
        campoRespuesta.innerText = texto; // Usar innerText porque un "p" no tiene atributo value
        copiar.style.display = "block"; // Aparece el botón de copiar que está oculto
        sugerencia.style.display = "none"; // Desaparece mensaje sugerencia
    } else{
        mostrarError("No se permiten caracteres especiales, solo letras minúsculas y espacios");
    }
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseDencriptada){
    for (let i = matriz_code.length - 1; i >= 0; i--){ // Recorrer la matriz en orden inverso
        if (fraseDencriptada.includes(matriz_code[i][1])){
            fraseDencriptada = fraseDencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseDencriptada;
}

function copiarTexto() {
    const texto = campoRespuesta.innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
