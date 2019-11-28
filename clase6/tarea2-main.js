/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
document.querySelector('#agregar-integrantes').onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);
    agregarIntegrantes(cantidadIntegrantes);

    event.preventDefault();
}

document.querySelector('#eliminar-integrantes').onclick = resetear;

document.querySelector('#calcular-salarios').onclick = function(event) {
    const salarios = obtenerSalarios();
    asignarCalculos('mayor', mayorSalarioAnual(salarios));
    asignarCalculos('menor', menorSalarioAnual(salarios));
    asignarCalculos('promedio-anual', promedioSalarioAnual(salarios));
    asignarCalculos('promedio-mensual', promedioSalarioMensual(salarios));
    mostrarCalculos();

    event.preventDefault();
}

function resetear() {
    eliminarIntegrantes();
    ocultarRealizarCalculos();
    ocultarCalculos();
}

function agregarIntegrantes(cantidadIntegrantes) {
    resetear();

    const agregarIntegrantes = document.querySelector('#agregar-eliminar-integrantes');
    //Crear input type number para cada integrante, con su label
    for (i=1; cantidadIntegrantes >= i; i++) {

        //crear div contenedor
        let divIntegrante = document.createElement('div');
        divIntegrante.id = 'integrante-' + i;

        //crear label
        let nuevoLabel = document.createElement('label');
        nuevoLabel.setAttribute('for', 'salario-integrante-' + i);
        nuevoLabel.textContent = 'Integrante #' + i;

        //crear salto de linea
        let saltoLinea = document.createElement('br');

        //crear input
        let nuevoIntegrante = document.createElement('input');
        nuevoIntegrante.type = 'number';
        nuevoIntegrante.id = 'salario-integrante-' + i;
        nuevoIntegrante.placeholder = 'Ingresar salario #' + i;

        //añadir nuevos nodos
        divIntegrante.appendChild(nuevoLabel);
        divIntegrante.appendChild(saltoLinea);
        divIntegrante.appendChild(nuevoIntegrante);
        agregarIntegrantes.appendChild(divIntegrante);

    }

    mostrarRealizarCalculos(cantidadIntegrantes);
}

function eliminarIntegrantes() {
    const eliminarIntegrantes = document.querySelectorAll('#agregar-eliminar-integrantes div');

    for (i=0; eliminarIntegrantes.length > i; i++) {
        eliminarIntegrantes[i].remove();
    }

/*    if (eliminarIntegrantes.length >= 1) {
        ocultarRealizarCalculos();
        ocultarCalculos();
    }*/
}

function mostrarRealizarCalculos(cantidadIntegrantes) {
    if (cantidadIntegrantes >= 1) {
        const $mostrarRealizarCalculos = document.querySelector('#realizar-calculos');
        $mostrarRealizarCalculos.className = '';
    }
}

function ocultarRealizarCalculos() {
    const $ocultarRealizarCalculos = document.querySelector('#realizar-calculos');
    $ocultarRealizarCalculos.className = 'oculto';
}

function obtenerSalarios() {
    const integrantes = document.querySelectorAll('#agregar-eliminar-integrantes div input');
    let salarios = [];

    for (i=0; integrantes.length > i; i++) {
        if (integrantes[i].value != '') {
            salarios.push(Number(integrantes[i].value));
        }
    }

    return salarios;
}

function asignarCalculos(tipo, valor) {
    const texto = document.querySelector(`#${tipo}-salario strong`);
    texto.textContent = valor;
}

function mostrarCalculos() {
    const mostrarCalculos = document.querySelector(`#datos-salarios`);
    mostrarCalculos.className = '';
}

function ocultarCalculos() {
    const ocultarCalculos = document.querySelector(`#datos-salarios`);
    ocultarCalculos.className = 'oculto';
}
