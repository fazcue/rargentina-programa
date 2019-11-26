const $submitTiempo = document.querySelector('#enviar-tiempo-clase');

$submitTiempo.onclick = function() {

    let titulo = document.querySelector('h1');
    let resultado = document.querySelector('#resultado');

    const $cantidadClases = document.querySelectorAll('label').length;

    let totalHoras = 0;
    let totalMinutos = 0;
    let totalSegundos = 0;

    for (i=1; $cantidadClases >= i; i++) {

        const $horasClase = Number(document.querySelector('#horas-clase-' + i).value);
        const $minutosClase = Number(document.querySelector('#minutos-clase-' + i).value);
        const $segundosClase = Number(document.querySelector('#segundos-clase-' + i).value);

        totalSegundos += $segundosClase;
        totalMinutos += $minutosClase;
        totalHoras += $horasClase;

        if (totalSegundos > 59) {
            totalMinutos += 1;
            totalSegundos = totalSegundos - 60;
        }

        if (totalMinutos > 59) {
            totalHoras += 1;
            totalMinutos = totalMinutos - 60;
        }

    }


    
    titulo.innerText = 'Wow! cuanto tiempo estudiando!!!';
    resultado.innerText = 'Llevas ' + totalHoras + ' horas, ' + totalMinutos + ' minutos, y ' + totalSegundos + ' segundos.';

    return false;
}