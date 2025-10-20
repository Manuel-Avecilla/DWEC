function pedirNumero(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = parseFloat(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }

    } while (!esValido);
    return num
}

const x = pedirNumero("Introduce la coordenada X: ")
const y = pedirNumero("Introduce la coordenada Y: ")
let mensaje

if (x === 0 && y === 0) mensaje = "El punto está en el origen.";
else if (x === 0) mensaje = "El punto está sobre el eje Y.";
else if (y === 0) mensaje = "El punto está sobre el eje X.";
else if (x > 0 && y > 0) mensaje = "El punto está en el Cuadrante I.";
else if (x < 0 && y > 0) mensaje = "El punto está en el Cuadrante II.";
else if (x < 0 && y < 0) mensaje = "El punto está en el Cuadrante III.";
else mensaje = "El punto está en el Cuadrante IV.";

alert(mensaje);
