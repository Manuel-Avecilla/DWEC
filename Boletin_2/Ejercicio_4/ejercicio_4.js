function pedirHora() {
    let horaTexto;
    let hora, minutos;
    let esValido;
    let fechaHora = [];

    do {
        esValido = true;

        // Pedir hora en formato HH:MM
        horaTexto = prompt("Introduce la hora (HH:MM):");

        if (!horaTexto || !horaTexto.includes(":")) {
            alert("Formato incorrecto. Debe ser HH:MM.");
            esValido = false;
        }

        const partes = horaTexto.split(":");

        if (partes.length !== 2) {
            alert("Formato incorrecto. Debe ser HH:MM.");
            esValido = false;
        }

        hora = parseInt(partes[0], 10);//Formato decimal (10)
        minutos = parseInt(partes[1], 10);

        // Validaciones
        if (isNaN(hora) || isNaN(minutos)) {
            alert("Las horas y minutos deben ser números.");
            esValido = false;
        }
        if (hora < 0 || hora > 23 || minutos < 0 || minutos > 59) {
            alert("La hora debe estar entre 00:00 y 23:59.");
            esValido = false;
        }

        fechaHora = [hora, minutos]

    } while (!esValido);

    return fechaHora;
}

const hora = pedirHora()
const totalMin = hora[0] * 60 + hora[1];

if (totalMin >= 450 && totalMin <= 840) {
    mensaje = "Buenos días"; // 07:30 - 14:00
}
else if (totalMin >= 841 && totalMin <= 1230){
    mensaje = "Buenas tardes"; // 14:01 - 20:30
}
else {
    mensaje = "Buenas noches"; 
}

alert(mensaje)


