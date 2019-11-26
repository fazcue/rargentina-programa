const $listaItems = document.querySelectorAll('li');

function crearArrayItems(lista) {

    let array = [];

    for (i=0; lista.length > i; i++) {
        array.push(Number(lista[i].innerText));
    }

    return array;
}

function calcularPromedio(array) {

    let $resultadoPromedio = document.querySelector('#resultado-promedio');
    let total = 0;

    for (i=0; array.length > i; i++) {
        total += array[i];
    }

    let promedio = total / array.length;

    $resultadoPromedio.innerText = 'El promedio es igual a: ' + promedio;
}

function numeroMasPequeno(array) {

    let $resultadoMasPequeno = document.querySelector('#resultado-mas-pequeno');
    let masPequeno;

    for (i=0; array.length > i; i++) {
        if (masPequeno === undefined) {
            masPequeno = array[i];
        } else if (masPequeno > array[i]) {
            masPequeno = array[i];
        }
    }

    $resultadoMasPequeno.innerText = 'El numero mas pequeño es: ' + masPequeno;
}

function numeroMasGrande(array) {

    let $resultadoMasGrande = document.querySelector('#resultado-mas-grande');
    let masGrande;

    for (i=0; array.length > i; i++) {
        if (masGrande === undefined) {
            masGrande = array[i];
        } else if (masGrande < array[i]) {
            masGrande = array[i];
        }
    }

    $resultadoMasGrande.innerText = 'El numero mas grande es: ' + masGrande;
}

let items = crearArrayItems($listaItems);
calcularPromedio(items);
numeroMasPequeno(items);
numeroMasGrande(items);