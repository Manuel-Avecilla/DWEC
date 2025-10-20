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
        if (num<=0){
            alert("El valor introducido debe ser mayor a 0.");
            esValido = false
        }

    } while (!esValido);

    return Number(num.toFixed(2))
}

function menu(){
    let opcion;
    let mensaje = `Elige la moneda a la que deseas convertir:
        1. Dólares (USD)
        2. Libras Esterlinas (GBP)
        3. Yenes Japoneses (JPY)
        4. Franco Suizo (CHF)
        5. Corona Noruega (NOK)

    Introduce una opcion: 
    `
    do {
        opcion = pedirNumero(mensaje)

        if (opcion < 1 || opcion > 5) {
            alert("ERROR: Opcion invalida.")
        }
    } while (opcion < 1 || opcion > 5)
    
    return opcion
}

function convertirEuros(euros, opcion) {
    const tasas = {
        1: 1.07,   // Dolar estadounidense
        2: 0.85,   // Libra esterlina
        3: 158.75, // Yen japones
        4: 0.95,   // Franco suizo
        5: 11.52   // Corona noruega
    };
    return euros * tasas[opcion];
}

let repetir;

do {
    const euros = pedirNumero("Introduce la cantidad en euros:");
    const opcion = menu();
    const resultado = convertirEuros(euros, opcion);

    const nombres = ["", "Dólares", "Libras", "Yenes", "Francos Suizos", "Coronas Noruegas"];

    alert(`${euros.toFixed(2)}€ equivalen a ${resultado.toFixed(2)} ${nombres[opcion]}.`);

    repetir = prompt("¿Deseas realizar otra conversión? (s/n)").toLowerCase();
} while (repetir === "s");

alert("Gracias por usar el conversor de monedas.");