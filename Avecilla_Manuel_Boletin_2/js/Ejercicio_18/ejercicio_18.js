function pedirNumero(mensaje) {
    let num;
    let esValido;

    do {
        esValido = true;

        num = parseInt(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un número.");
            esValido = false;
        }

        if (num < 0) {
            alert("El valor tiene que ser positivo.");
            esValido = false;
        }

    } while (!esValido);

    return num;
}

const segundos = pedirNumero("Introduce un tiempo en segundos");

let tiempo = new Date(0,0,0,0,0,0,0);
tiempo.setSeconds(segundos);

alert(`${tiempo.getHours()} horas, ${tiempo.getMinutes()} minutos, ${tiempo.getSeconds()} segundos`);




