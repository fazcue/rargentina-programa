/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const cantidadIntegrantes = Number(prompt('Cuanta gente integra tu grupo familiar?'));

function crearInputParaCadaIntegrante(cantidad) {

    //Obtener el nodo donde luego colocar los input: #integrantes
    const $integrantes = document.querySelector('#integrantes');
    const $formulario = document.querySelector('form');

    //Crear input+label por cada integrante, con type 'number' y un placeholder
    for (i=1; cantidad >= i; i++) {

        //Crear div contenedor
        let divIntegrante = document.createElement('div');

        //Crear label
        let labelEdad = document.createElement('label');
        labelEdad.id = 'label-integrante-' + i;
        labelEdad.textContent = 'Integrante #' + i;
        divIntegrante.appendChild(labelEdad);
        $integrantes.appendChild(divIntegrante);

        //Crear salto de linea (para mejor diseño)
        let saltoLinea1 = document.createElement('br');
        divIntegrante.appendChild(saltoLinea1);
        $integrantes.appendChild(divIntegrante);

        //Crear input
        let inputEdad = document.createElement('input');
        inputEdad.type = 'number';
        inputEdad.id = 'integrante-' + i;
        inputEdad.placeholder = 'Ingresa la edad de un integrante';
        divIntegrante.appendChild(inputEdad);
        $integrantes.appendChild(divIntegrante);

        //Crear salto de linea nuevamente (para mejor diseño)
        let saltoLinea2 = document.createElement('br');
        divIntegrante.appendChild(saltoLinea2);
        $integrantes.appendChild(divIntegrante);

    }

    //Si existe al menos 1 integrante, añadir 'submit' y 'reset', sino mostrar mensaje en div resultado
    if (cantidad >= 1) {

        //Crear input submit, con value personalizado
        let submitForm = document.createElement('input');
        submitForm.type = 'submit';
        submitForm.id = 'calcular-datos-integrantes';
        submitForm.value = 'Calcular datos';
        $formulario.appendChild(submitForm);

        //Crear input reset, con value personalizado
        let resetForm = document.createElement('input');
        resetForm.type = 'reset';
        resetForm.value = 'Limpiar';
        $formulario.appendChild(resetForm);

    } else {
        let mensaje = 'No tienes familiares? :(';
        let $divResultado = document.querySelector('#resultado');
        $divResultado.textContent = mensaje;
    }

}

function obtenerDatosIntegrantes(cantidad) {

    let datosIntegrantes = [];

    //Crear array con las edades de los integrantes
    for (i=1; cantidad >= i; i++) {
        let EdadIntegrante = Number(document.querySelector('#integrante-' + i).value);
        datosIntegrantes.push(EdadIntegrante);
    }

    //devuelve array con los datos (edades)
    return datosIntegrantes;

}

function calcularMayorEdadIntegrantes(datosIntegrantes) {

    let mayorEdad = 0;

    for (i=0; datosIntegrantes.length > i; i++) {
        if (mayorEdad < datosIntegrantes[i]) {
            mayorEdad = datosIntegrantes[i];
        }
    }

    return mayorEdad;

}

function calcularMenorEdadIntegrantes(datosIntegrantes) {

    let menorEdad;

    for (i=0; datosIntegrantes.length > i; i++) {
        if (menorEdad === undefined) {
            menorEdad = datosIntegrantes[i];
        } else if (menorEdad > datosIntegrantes[i]) {
            menorEdad = datosIntegrantes[i];
        }
    }

    return menorEdad;

}

function calcularPromedioEdadIntegrantes(datosIntegrantes) {

    let total = 0;
    let cantidadIntegrantes = 0;
    let promedio;

    for (i=0; datosIntegrantes.length > i; i++) {
        total += datosIntegrantes[i];
        cantidadIntegrantes += 1;
    }

    promedio = total / cantidadIntegrantes;

    return promedio;
}

function mostrarDatosIntegrantes(datosIntegrantes) {

    //Mostrar mayor edad
    let mayorEdadMensaje = 'El integrante con mayor edad tiene ' + calcularMayorEdadIntegrantes(datosIntegrantes) + ' años.';
    document.querySelector('#mayor-edad').textContent = mayorEdadMensaje;

    //Mostrar menor edad
    let menorEdadMensaje = 'El integrante con menor edad tiene ' + calcularMenorEdadIntegrantes(datosIntegrantes) + ' años.';
    document.querySelector('#menor-edad').textContent = menorEdadMensaje;

    //Mostrar promedio edad
    let promedioEdadMensaje = 'El promedio de edad es de ' + calcularPromedioEdadIntegrantes(datosIntegrantes) + ' años.';
    document.querySelector('#promedio-edad').textContent = promedioEdadMensaje;

}

//Pasos tarea
//Creo inputs
crearInputParaCadaIntegrante(cantidadIntegrantes);

//obtengo datos y realizo calculos
$submitForm = document.querySelector('#calcular-datos-integrantes');

$submitForm.onclick = function() {
    let datosIntegrantes = obtenerDatosIntegrantes(cantidadIntegrantes);
    mostrarDatosIntegrantes(datosIntegrantes);

    return false;
}
