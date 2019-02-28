const encriptar = document.getElementById("encriptar"); // id=único de un elemento, si cambia el nombre no lo encuentra
const frase = document.getElementById("frase");
const textoCifrado = document.getElementById("texto-cifrado");
const movimiento = document.getElementById("movimiento");
const descifrar = document.getElementById("descifrar");
const textoDescifrado = document.getElementById("texto-descifrado");

const clikEncriptar =()=>{
    let mensaje =frase.value;
    let numero =parseInt(movimiento.value);
    let nuevoMensaje =cipher.encode(numero,mensaje);
    return textoCifrado.value = nuevoMensaje;
}

encriptar.addEventListener("click",clikEncriptar)

const clikDesencriptar =()=>{
    let mensaje =frase.value;
    let numero =parseInt(movimiento.value);
    let nuevoMensaje1 =cipher.decode(numero,mensaje);
    return textoDescifrado.value = nuevoMensaje1;
}

descifrar.addEventListener("click",clikDesencriptar)




/*
encriptar.addEventListener("click", () => {
textoCifrado.innerHTML = frase.value
console.log(movimiento.value)
})

descifrar.addEventListener("click", ()=> {
    textoDescifrado.innerHTML = frase.value
    console.log(movimiento.value)
}) */

