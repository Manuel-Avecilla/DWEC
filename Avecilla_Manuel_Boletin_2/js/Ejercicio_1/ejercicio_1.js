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

        if (num <= 0) {
            alert("El valor introducido debe ser un numero positivo.");
            esValido = false
        }

    } while (!esValido);
    return num
}

const radio = pedirNumero("Introduce el radio de la esfera:");

const area = 4 * Math.PI * Math.pow(radio, 2);
const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

alert(`El area de la esfera es ${area.toFixed(2)} y el volumen es ${volumen.toFixed(2)}`);
