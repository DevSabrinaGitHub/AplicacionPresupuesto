class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
}

/* La clase Dato proporciona la estructura base con propiedades y métodos generales que son comunes a todas las transacciones (ya sea ingresos o egresos).
Las clases hijas, Ingreso y Egreso, extienden la clase Dato y son responsables de almacenar y gestionar los valores específicos de cada tipo de transacción. */