function mayorSalarioAnual(salarios) {
    let mayorSalarioAnual = 0;
    for (i=0; salarios.length > i; i++) {
        if (salarios[i] > mayorSalarioAnual) {
            mayorSalarioAnual = salarios[i];
        }
    }
    return mayorSalarioAnual;
}

function menorSalarioAnual(salarios) {
    let menorSalarioAnual;
    for (i=0; salarios.length > i; i++) {
        if (menorSalarioAnual === undefined) {
            menorSalarioAnual = salarios[i];
        } else if (salarios[i] < menorSalarioAnual) {
            menorSalarioAnual = salarios[i];
        }
    }
    return menorSalarioAnual;
}

function promedioSalarioAnual(salarios) {
    let total = 0;
    let promedioSalarioAnual = 0;
    let cantidadSalarios = 0;
    for (i=0; salarios.length > i; i++) {
        total += salarios[i];
        cantidadSalarios++;
    }
    promedioSalarioAnual = total / cantidadSalarios;
    return promedioSalarioAnual.toFixed(2);
}

function promedioSalarioMensual(salarios) {
    let total = 0;
    let promedioSalarioMensual = 0;
    for (i=0; salarios.length > i; i++) {
        total += salarios[i];
    }
    promedioSalarioMensual = total / 12;
    return promedioSalarioMensual.toFixed(2);
}
