function descuento(neto) {
    let respuesta;

    if(neto <= 1000){
        respuesta = 3;
    }
    if((neto > 1000) && (neto <=3000)){
        respuesta = 5;
    }
    if((neto > 3000) && (neto <=7000)){
        respuesta = 7;
    }

    return respuesta;
  }

  export default descuento;