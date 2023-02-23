function descuento(neto) {
    let respuesta;

    if(neto <= 1000){
        respuesta = 3;
    }
    if((neto > 1000) && (neto <=3000)){
        respuesta = 5;
    }

    return respuesta;
  }

  export default descuento;