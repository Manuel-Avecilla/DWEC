function pedirFecha() {
    let fecha;
    let dia, mes, año;
    let esValido;

    do {
        esValido = true;

        año = parseInt(prompt("Introduce el año:"));
        mes = parseInt(prompt("Introduce el mes (1-12):"));
        dia = parseInt(prompt("Introduce el día (1-31):"));

        // Validar que sean numeros
        if (isNaN(año) || isNaN(mes) || isNaN(dia)) {
            alert("ERROR: Todos los valores deben ser números.");
            esValido = false;
        }

        // Crear fecha (mes - 1 porque enero es 0)
        fecha = new Date(año, mes - 1, dia);

        // Validar que la fecha sea valida (no 31/02 etc.)
        if (
            fecha.getFullYear() !== año ||
            fecha.getMonth() !== mes - 1 ||
            fecha.getDate() !== dia
        ) {
            alert("La fecha introducida no es valida.");
            esValido = false;
        }

    } while (!esValido);

    return fecha;
}

const fecha_1 = pedirFecha()
const fecha_2 = pedirFecha()

if (fecha_1.getTime() < fecha_2.getTime()) {
    
    alert("La primera fecha es ANTERIOR a la segunda.");

} else if (fecha_1.getTime() > fecha_2.getTime()) {

    alert("La segunda fecha es ANTERIOR a la primera.");

} else {

    alert("Ambas fechas son IGUALES.");

}