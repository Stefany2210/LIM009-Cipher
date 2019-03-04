const ingreso = document.getElementById("ingreso");
ingreso.addEventListener('click', functionA);

function functionA() {
   
    let usuario = document.getElementById("usuary").value;
    document.getElementById("saludo").innerHTML = "Bienvenid@ " + usuario; 
    document.getElementById("first").style.display="none"
    document.getElementById("second").style.display="block"
       
    }

const iniciar = document.getElementById("iniciar");
iniciar.addEventListener('click', functionB);

function functionB() {

        document.getElementById("second").style.display="none";
        document.getElementById("third").style.display="block";
    
    }



const encriptar = document.getElementById("encriptar"); // id=único de un elemento, si cambia el nombre no lo encuentra
const frase = document.getElementById("frase");
const frase1 = document.getElementById("frase1");
const textoCifrado = document.getElementById("texto-cifrado");
const movimiento = document.getElementById("movimiento");
const movimiento1 = document.getElementById("movimiento1");
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
    let mensaje =frase1.value;
    let numero =parseInt(movimiento1.value);
    let nuevoMensaje1 =cipher.decode(numero,mensaje);
    return textoDescifrado.value = nuevoMensaje1;
}

descifrar.addEventListener("click",clikDesencriptar)


