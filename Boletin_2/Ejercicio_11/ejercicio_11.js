function pedirMes(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = parseInt(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }
        if (num<1 || num>12){
            alert("El valor introducido debe ser un mes (1 - 12).");
            esValido = false
        }

    } while (!esValido);

    return num
}

let mes = pedirMes("Introduce el numero de un mes: ")
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
alert(`El mes numero ${mes} es: ${meses[mes]}`)
