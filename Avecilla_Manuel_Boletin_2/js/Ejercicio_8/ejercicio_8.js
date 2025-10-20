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

    return num
}

const n = pedirNumero("Introduce un numero:")
let suma = 0
let texto = ""

for (let i = 0; i <= n; i++) {
    suma += i
    texto += `Numero: ${i} | Cuadrado: ${Math.pow(i,2)} | Cubo: ${Math.pow(i,3)} \n`
}
texto += `Suma de todos los numeros: ${suma}`
alert(texto) 