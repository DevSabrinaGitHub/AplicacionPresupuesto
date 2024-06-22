class Egreso extends Dato{ //egreso extiende Dato de forma similar a ingreso
    static contadorEgresos = 0; //cuanta el nmr de objetos Egresos creados

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}