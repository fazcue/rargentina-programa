//Desafío de programación #1: Imprimí los números del 1 al 10

for (let i=1; i <= 10; i++) {
    console.log(i);
}

//Desafìo de programación #2: Imprimí los números impares del 1 al 100

for (let i=1; i <= 100; i+=2) {
    console.log(i);
}

//Desafío de programación #3: Imprimí la tabla de multiplicación del 7

for (let i=0; i <= 10; i+=1) {
    console.log(`7x${i}: ` + i * 7);
}

//Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
//solucion usando array conteniendo las tablas
/*
const tablas = [1,2,3,4,5,6,7,8,9];

for (let i=0; tablas.length > i; i++) {

    for (let multiplicacion=0; multiplicacion <= 9; multiplicacion++) {
        console.log(`${tablas[i]}x${multiplicacion}: ` + multiplicacion * tablas[i]);
    }

}
*/

//Solucion alternativa usando funcion
/*
function tabla(numero) {
    for (let i = 0; i <= 9; i++) {
        let texto = `${numero}x${i}: ` + numero * i;
        console.log(texto);
    }
}

for (let i=1; i <= 9; i++) {
    tabla(i);
}
*/

//Solucion alternativa usando funcion y array

const tablas = [1,2,3,4,5,6,7,8,9];

function tabla(numero) {
    for (let i=0; i <= 9; i++) {
        let texto = numero + 'x' + i + ': ' + numero * i;
        console.log(texto);
    }
}

for (let i=0; tablas.length > i; i++) {
    tabla(tablas[i]);
}

//Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
//[1,2,3,4,5,6,7,8,9,10]
//1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

const array = [1,2,3,4,5,6,7,8,9,10];
let suma = 0;

for (let i=0; array.length > i; i++) {
    suma += array[i];
}
console.log(suma);

//Desafío de programación #6: Calcula 10! (10 factorial)
//10 * 9 * 8 * ... * 1

let factorialDe10 = 1;

for (let i=10; i > 1; i--) {
    factorialDe10 *= i;
}

console.log(factorialDe10);

//Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

//Solucion usando modulo
let sumaNumerosImpares = 0;

/*
for (i=10; i <= 30; i++) {
    if (i % 2 === 1) {
        sumaNumerosImpares += i;
    }
}

console.log(sumaNumerosImpares);
*/

//solucion salteando con i+=2
for (let i=11; i<30; i+=2) {
    sumaNumerosImpares += i;
}

//Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

let temperaturaCelsius = 27;

function celsiusAfahrenheit(temperaturaCelsius) {
    let temperaturaFahrenheit = (temperaturaCelsius * (9/5)) + 32;
    return temperaturaFahrenheit;
}

console.log(celsiusAfahrenheit(temperaturaCelsius));

//Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

let temperaturaFahrenheit = 80.6;

function fahrenheitAcelsius(temperaturaFahrenheit) {
    let temperaturaCelsius = (temperaturaFahrenheit - 32) * (5/9);
    return temperaturaCelsius;
}

console.log(fahrenheitAcelsius(temperaturaFahrenheit));

//Desafío de programación #10: Calcula la suma de todos los números en un array de números

const arrayNumeros = [5,7,2,1,7];
let sumaArrayNumeros = 0;

for (let i=0; arrayNumeros.length > i; i++) {
    sumaArrayNumeros += arrayNumeros[i];
}

console.log(sumaArrayNumeros);

//Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

function calcularPromedio(array) {
    let suma = 0;
    let promedio = 0;
    for (let i=0; array.length > i; i++) {
        suma += array[i];
    }
    promedio = suma / array.length;
    return promedio;
}

console.log('El promedio dado un array de numeros es: ' + calcularPromedio(arrayNumeros));

//Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

const arrayNumerosPositivosNegativos = [-3,5,6,9,-2];

function soloNumerosPositivos(array) {
    let suma = 0;
    let arrayNumerosPositivos = [];
    for (let i=0; array.length > i; i++) {
        if (array[i] > 0) {
            arrayNumerosPositivos.push(array[i]);
        }
    }
    return arrayNumerosPositivos;
}

console.log('Array con solo numeros positivos: ' + soloNumerosPositivos(arrayNumerosPositivosNegativos));

//Desafío de programación #13: Find the maximum number in an array of numbers
let valorMasAlto = 0;
for (let i=0; arrayNumerosPositivosNegativos.length > i; i++) {
    if (valorMasAlto < arrayNumerosPositivosNegativos[i]) {
        valorMasAlto = arrayNumerosPositivosNegativos[i];
    }
}

console.log('Valor mas alto en el array: ' + valorMasAlto);

//Solucion usando funcion
function calcularValorMasAlto(array) {
    let valorMasAlto = 0;
    for (let i=0; array.length > i; i++) {
        if (valorMasAlto < array[i]) {
            valorMasAlto = array[i];
        }
    }
    return valorMasAlto;
}

console.log('Valor mas alto en array mediante funcion: ' + calcularValorMasAlto(arrayNumerosPositivosNegativos));

//Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
//El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function CalcularFibonacci(numero) {
    let cero = 0;
    console.log(cero);
    let uno = 1;
    console.log(uno);

    for (i=2; numero > i; i++) {
        resultado = cero + uno

        //reemplazo los valores iniciales
        cero = uno;
        uno = resultado;

        console.log(resultado);
    }
}

CalcularFibonacci(10);

//Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

//Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

function primoOno(numero) {
    let resultado = true;
    for (let i=2; numero > i; i++) {
        if (numero % i === 0) {
            resultado = false;
        }
    }
    return resultado;
}

console.log(primoOno(7));

//Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
//Ejemplo: 123 = 1 + 2 + 3 = 6

function calcularSumaDigitosPositivos(numero) {
    let suma = 0;
    numero = numero.toString()
    for (let i=0; numero.length > i; i++) {
        suma += Number(numero[i]);
    }
    return suma;
}

console.log(calcularSumaDigitosPositivos(9851));

//Desafío de programación #18: Imprimir los primeros 100 números primos

function imprimirNumerosPrimos(numero) {
    let resultado = true;
    for (let i=2; numero > i; i++) {
        if (numero % i === 0) {
            resultado = false;
        }
    }
    if (resultado === true) {
        console.log(numero);
    }
    if (numero > 2) {
        imprimirNumerosPrimos(numero - 1);
    }
}

imprimirNumerosPrimos(100);

//Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
//Ejemplo: Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

function crearArrayDeSiguientesXnumerosPrimos(numeroInicial, cantidad) { //5, 4
    let arrayPrimos = [];
    let esPrimo = true;
    
    do {
        for (let i=2; numeroInicial > i; i++) { //5
            if (numeroInicial % i === 0) { // 5
                esPrimo = false;
            }
        }
        if (esPrimo === true) {
            arrayPrimos.push(numeroInicial);
        }
        numeroInicial += 1;
        esPrimo = true;

    } while (cantidad > arrayPrimos.length);

    console.log(arrayPrimos);

}

crearArrayDeSiguientesXnumerosPrimos(11,10);

//Desafío de programación #20: Rotar un array hacia la izquierda una posición
//Ejemplo:[9,1,2,3,4] debería quedar como [1,2,3,4,9]
let array_a_rotar = [4,3,2,1]

//Solucion inicial
function rotarArrayAlaIzquierdaUnaPosicion(array) {
    let array_modificada = []

    //Añado elementos a nueva array desde el indice 1 (2do elemento) (solo si contiene mas de 1 elemento)
    if (array.length > 1) {
        for (let i=1; array.length > i; i++) {
            array_modificada.push(array[i]);
        }
    }

    //Luego, añado al final el elemento en indice 0 ()
    array_modificada.push(array[0]);

    //Asigno nueva array a la array inicial (reemplazo)
    array = array_modificada;

    return array;
}

console.log(rotarArrayAlaIzquierdaUnaPosicion(array_a_rotar));

//Solucion utilizando shift (mucho mas simple)
function rotarArrayAlaIzqUnaPosicion(array) {

    //Quito 1er elemento y lo guardo en variable
    let primer_elemento = array.shift();

    //Se lo reasigno nuevamente pero al final
    array.push(primer_elemento);

    return array;
}

console.log(rotarArrayAlaIzqUnaPosicion(array_a_rotar));

//Desafío de programación #21: Rotar un array a la derecha una posición
//Ejemplo: [2,3,4,1] debería quedar como [1,2,3,4]

let array_a_rotar_derecha = [2,3,4,1];

//Solucion utilizando pop (toma el ultimo elemento, modificando su longitud)
function rotarArrayAlaDerechaUnaPosicion(array) {
    let array_modificada = [];
    let ultimo_elemento = array.pop();
    
    array_modificada.push(ultimo_elemento);

    for (let i=0; array.length > i; i++) {
        array_modificada.push(array[i]);
    }

    return array_modificada;
}

console.log(rotarArrayAlaDerechaUnaPosicion(array_a_rotar_derecha));

//Solucion utilizando pop y unshift (agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array)

function rotarArrayAlaDerUnaPosicion(array) {
    let ultimo_elemento = array.pop();

    array.unshift(ultimo_elemento);

    return array;
}

let array_a_rotar_der = [2,3,4,1];
console.log(rotarArrayAlaDerUnaPosicion(array_a_rotar_der));

//Desafío de programación #22: Invertir un array
//Ejemplo: [1,2,3,4] debería quedar como [4,3,2,1]

//Solucion inicial
function invertirArray(array) {
    let array_modificada = [];

    for (let i = array.length - 1; i >= 0; i--) {
        array_modificada.push(array[i]);
    }

    return array_modificada;
}

let array_a_invertir = [1,2,3,4];
console.log(invertirArray(array_a_invertir));

//Solucion utilizando reverse
function invertirArrayConReverse(array) {
    let array_modificada = array.reverse();

    return array_modificada;
}

let array_a_invertir_reverse = [1,2,3,4];
console.log(invertirArray(array_a_invertir_reverse));

//Desafío de programación #23: Invertir una cadena de caracteres
//Ejemplo: "bienvenido" debería quedar como "odinevneib"

function invertirString(string) {
    let string_invertido = '';

    for (let i=string.length-1; i >= 0; i--) {
        string_invertido += string[i];
    }

    return string_invertido;
}

let string_a_invertir = 'sodinevneiB';
console.log(invertirString(string_a_invertir));

//Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
//Ejemplo: [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

//Solucion inicial
function unirArrays(array1, array2) {
    let array_unido = [];

    //uno cada elemento del array1 a nuevo array
    for (let i=0; array1.length > i; i++) {
        array_unido.push(array1[i]);
    }

    //repito para array2
    for (let i=0; array2.length > i; i++) {
        array_unido.push(array2[i]);
    }

    return array_unido;
}

let array_a_unir_1 = [1,2,3];
let array_a_unir_2 = ['a', 'b', 'c'];

console.log(unirArrays(array_a_unir_1, array_a_unir_2));

//Solucion utilizando concat
function unirArraysConConcat(array1, array2) {
    let array_unido = array1.concat(array2);

    return array_unido;
}

console.log(unirArraysConConcat(array_a_unir_1, array_a_unir_2));

//Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
//Nota: Esto se llama "diferencia simétrica" entre conjuntos

//Solucion inicial
function diferenciaSimetrica(array1, array2) {
    let esDiferente;
    let diferencia = [];

    for (let el of array1) {
        esDiferente = true;
        
        for (let i=0; array2.length > i; i++) {
            if (el === array2[i]) {
                esDiferente = false;
            }
        }

        if (esDiferente === true) {
            diferencia.push(el)
        }

    }

    for (let el of array2) {
        esDiferente = true;

        for (let i=0; array1.length > i; i++) {
            if (el === array1[i]) {
                esDiferente = false;
            }
        }

        if (esDiferente === true) {
            diferencia.push(el);
        }
    }

    return diferencia;
}

let diferencia1 = [1,2,3];
let diferencia2 = [1,4];
console.log(diferenciaSimetrica(diferencia1, diferencia2));

//Solucion utilizando includes (determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda)
function diferenciaSimetricaIncludes(array1, array2) {
    let diferencia = [];

    for (let el of array1) {
        if (array2.includes(el) === false) {
            diferencia.push(el);
        }
    }

    for (let el of array2) {
        if (array1.includes(el) === false) {
            diferencia.push(el);
        }
    }

    return diferencia;
}

console.log(diferenciaSimetricaIncludes(diferencia1, diferencia2));

//Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
//Nota; Esto se llama "resta" entre conjuntos

function restaEntreConjunto(array1, array2) {
    let diferencia = [];

    for (let el of array1) {
        if (array2.includes(el) === false) {
            diferencia.push(el);
        }
    }

    return diferencia;
}

console.log(restaEntreConjunto(diferencia1, diferencia2));

//Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
//Ejemplo: [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]

//Solucion usando splice (cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos | indice, cantidad, elementos(opcional))
function elementosUnicosArray(array) {
    let array_elementos_unicos = array;

    for (let el of array) {
        let contador = 0;

        for (let i=0; array.length > i; i++) {
            if (el === array[i]) {
                contador += 1;
            }

            
            if (contador > 1) {
                array_elementos_unicos.splice(i, 1);
            }
        }

    }

    return array_elementos_unicos;
}

let array_elementos_repetidos = [1,2,3,4,5,4,3,2,1,0];
console.log(elementosUnicosArray(array_elementos_repetidos));

//Desafío de programación #28: Calcular la suma de los primeros 100 numeros primos

//Solucion inicial
function first100PrimeNumbersSum() {
    let contador = 0;
    let suma = 0;

    for (let i=2; contador < 100; i++) {
        let es_primo = true;
        for (let x=2; i > x; x++) {
            if (i % x === 0) {
                es_primo = false;
            }
        }
        if (es_primo === true) {
            suma += i;
            contador++;
        }
    }

    return suma;
}

console.log(first100PrimeNumbersSum());

//Solucion llamando a una funcion que verifique si es primo o no
function sumaPrimeros100numerosPrimos() {
    let contador = 0;
    let suma = 0;

    for (let i=2; contador < 100; i++) {
        if (primoOno(i) === true) {
            contador++;
            suma += i;
        }
    }

    return suma;
}

console.log(sumaPrimeros100numerosPrimos());

//Desafío de programación #29: Print the distance between the first 100 prime numbers
function distanciaEntreNumerosPrimos() {
    let numero_actual = 0;
    let numero_anterior;
    let contador = 0;
    let distancia = 0;

    for (let i=2; contador < 100; i++) {
        let esprimo = true;
        for (x=2; x < i; x++) {
            if (i % x === 0) {
                esprimo = false;
            }
        }
        if (esprimo === true) {
            contador++;
            numero_anterior = numero_actual;
            numero_actual = i;
            distancia = numero_actual - numero_anterior;
            console.log('La distancia entre ' + numero_actual + ' y ' + numero_anterior + ' es: ' + distancia);
        }
    }
}
distanciaEntreNumerosPrimos();
