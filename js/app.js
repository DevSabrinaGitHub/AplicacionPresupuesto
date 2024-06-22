const ingresos = [ ///arays que contienen instancias de Ingreso y Egreso
    //es decir que los valores del array, se asignaran a la clase Ingreso y Egreso con new y se guardaran, dependiendo la operacion 
    new Ingreso('Salario mensual', 2100.00),
    new Ingreso('Venta auto', 5500)
];

const egresos = [
    new Egreso('Alquiler departamento', 500),
    new Egreso('Ropa', 80)
];

let cargarApp = ()=>{ //esta funcion carga los ingresos, egresos, y la pagina en si
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = ()=>{ //esta funcion calcula el total de ingresos, iterando sobre el array ingreso
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{ //esta funcion calcula el total de egresos, iterando sobre el array egreso
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{ //esta funcion actualiza el cabecero, es decir, actualiza los elelemtnos HTML con los valores de presupuesto
    //porcentaje de egresos, total de ingresos y total de egresos
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

//este formateo de valores, formatean los valores numericos a cadena de texto con formato de moneda y porcentaje
const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2});
}

//esta funcion genera HTML para cada ingreso y lo inserta en el elemento id lista-ingresos y crearIngresoHTML.
//genera el HTML especifico para un ingreso y "eliminarIngreso" elimina un ingreso por su id y recarga los datos actualizados
const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}
const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>

    `;
    return ingresoHTML;
}

const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}  //EL GENERADOR DEL HTML FINALIZA AQUI

const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}


//cargarEgresos genera HTML para cada egreso y lo inserta en el elemento con id lista-egresos. 
//crearEgresoHTML genera el HTML específico para un egreso, incluyendo el porcentaje de este respecto al total de egresos.
const crearEgresoHTML = (egreso)=>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"
                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return egresoHTML;
}

let eliminarEgreso = (id)=>{  //buscamos el indice en el array egresos
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1); //indicamos que se elimine 1 valor a partir de su indice
    cargarCabecero(); //actualizamos
    cargarEgresos();
}

//validar form
let agregarDato =() =>{
    let forma= document.forms['forma'];
    let tipo= forma['tipo'];
    let descripcion= forma['descripcion'];
    let valor = forma['valor'];

    if(descripcion.value !== '' && valor.value != ''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value)); //+valor.value convierte un string a number
            cargarCabecero(); //actualizamos
            cargarIngresos();

        }
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();

        }
    }
}