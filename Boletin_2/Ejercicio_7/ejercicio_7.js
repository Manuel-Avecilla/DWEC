function pedirPrecio(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = parseFloat(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }
        if (num < 0) {
            alert("El valor introducido debe ser positivo.");
            esValido = false
        }

    } while (!esValido);

    return num.toFixed(2)
}

const precio = pedirPrecio("Introduce el precio del producto:");
const pago = pedirPrecio("Introduce la cantidad pagada:");
let cambio = (pago - precio).toFixed(2);

if (pago < precio) {
    alert("El pago no es suficiente.");
} else if (cambio === 0) {
    alert("No hay cambio que devolver.");
} else {

    const dinero = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    const resultado = {};

    for (let valor of dinero) {
        let cantidad = Math.trunc(cambio / valor);
        if (cantidad > 0) {
            resultado[valor.toFixed(2)] = cantidad; //guardamos en resultado la cantidad utilizada
            cambio = +(cambio - cantidad * valor).toFixed(2); // evita errores de decimales
        }
    }

    let mensaje = `Cambio a devolver: ${(pago - precio).toFixed(2)} \n`;
    for (let valor in resultado) {
        mensaje += `${resultado[valor]} × ${valor} €\n`;
    }

    alert(mensaje);
}

