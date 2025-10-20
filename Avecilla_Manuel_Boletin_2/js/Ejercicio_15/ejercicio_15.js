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

let dinero = pedirPrecio("Introduce la cantidad de dinero en euros:");
const dinero_text = dinero

const efectivo = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const resultado = {};

for (let valor of efectivo) {
    let cantidad = Math.trunc(dinero / valor);
    if (cantidad > 0) {
        resultado[valor.toFixed(2)] = cantidad; //guardamos en resultado la cantidad utilizada
        dinero = +(dinero - cantidad * valor).toFixed(2); // evita errores de decimales
    }
}

let mensaje = `${dinero_text} en dinero en efectivo: \n`;
for (let valor in resultado) {
    mensaje += `${resultado[valor]} × ${valor} €\n`;
}

alert(mensaje);