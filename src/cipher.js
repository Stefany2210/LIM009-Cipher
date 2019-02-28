window.cipher = {
  encode: (offset,string) => {
    let nuevoMensaje ="";
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAscii =((string[i].charCodeAt())-65+offset)%26+65;
        let lettercipher = String.fromCharCode(numberAscii);
        nuevoMensaje= nuevoMensaje+lettercipher;
      } else {
        nuevoMensaje = nuevoMensaje+string[i];
      }
    }
    return nuevoMensaje;
  },
  decode: (offset,string) => {
    let nuevoMensaje1 ="";
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90){
        let numberAscii =((string[i].charCodeAt())-90-offset)%26+90;
        let lettercipher = String.fromCharCode(numberAscii);
        nuevoMensaje1= nuevoMensaje1+lettercipher;
      } else {
        nuevoMensaje1 = nuevoMensaje1+string[i];
      }
    }
    return nuevoMensaje1;
  },
}