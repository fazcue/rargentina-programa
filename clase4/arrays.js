//ARRAYS

//Creo un array
const comidasFavoritas = ['milanesas', 'pizza', 'papas fritas', 'asado'];

//Imprimo la cantidad de elementos del array
console.log(comidasFavoritas.length);

//Obtengo el 3er elemento
console.log(comidasFavoritas[2]);

//Reemplazo el 1er elemento
comidasFavoritas[0] = 'pastas';

//Añado un elemento al array
comidasFavoritas.push('tartas');
console.log(comidasFavoritas);

//BUCLES

//Tarea 1
//Registrar los numeros del 10 a 1 con While

x = 10

while (x >= 1) {
    console.log(x);
    x -= 1;
}

//Tarea 2
//Imprimir cada 3er numero del 3 al 22 con for

for (i = 3; i <= 22; i = i + 3) {
    console.log(i);
}

//Tarea extra: Dado un array (contiene notas de examenes) imprimir cada nota, y luego calcular el promedio
const notas = [6,8,9,5];
let examen = 0;
let total = 0;

for (i = 0; i < notas.length; i++) {
    examen = i + 1;
    console.log(`Nota del examen numero ${examen}: ${notas[i]}`);
}

for (i = 0; i < notas.length; i++) {
    total += notas[i];
    if (notas.length === (i+1)) {
        console.log(`El promedio es: ${total / notas.length}`);
    }
}

//Tarea 3: Hacer una funcion que se llame calcularPromedio que tome como parametro un array
function calcularPromedio(notas) {
    let total = 0;
    for (i = 0; i < notas.length; i++) {
        total += notas[i];
    }

    let promedio = total / notas.length;
    return promedio;
}

console.log('(Funcion) El promedio es ' + calcularPromedio(notas));