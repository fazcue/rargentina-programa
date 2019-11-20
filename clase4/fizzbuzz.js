//Tarea FizzBuzz del 1 al 50 (Fizz en multiplos de 3, Buzz en multiplos de 5, FizzBuzz en multiplos de ambos, resto imprimir el numero)
//utilizando modulo (%), el cual calculo el resto

function fizzBuzz() {
    for (i = 1; i <= 50; i++) {
        let texto = '';
        if (i % 3 === 0) { //Si es multiplo de 3, imprimir Fizz
            texto = 'Fizz';
        }
        if (i % 5 === 0) { //Sies multiplo de 5, imprimir Buzz
            texto += 'Buzz';
        }
        console.log(texto || i);
    }
}

fizzBuzz();