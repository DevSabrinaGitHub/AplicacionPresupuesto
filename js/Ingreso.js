//ingreso extiende Dato, es decir, Ingreso hereda todas las propiedades(variables) y metodos(funciones) de Dato
class Ingreso extends Dato{ 
    static contadorIngresos = 0; //contadorIngresos es una propiedad estatica, pertenece a la clase de Ingreso y no a sus intancias (Dato)

    constructor(descripcion, valor){ //este contructor llama a la clase padre Dato usando super(descripcion,valor)
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos; //luego asigna un id unico a cada infreso incrementado el contadorIngresos
    }
    get id(){
        return this._id;
    }
}

/*en conclusion una instacia es un objeto ceado a partir de una clase y se relacionan entre si, pasandose datos */
/*instancia hereda las propiedades y métodos definidos en la clase y puede tener sus propios datos o valores únicos. 
En el contexto de la programación orientada a objetos: */