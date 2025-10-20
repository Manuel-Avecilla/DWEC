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
        if (num<0 || num>10){
            alert("El valor introducido debe ser entre 0 y 10.");
            esValido = false
        }

    } while (!esValido);

    return Number(num.toFixed(2))
}

const nota = pedirNumero("Introduce una nota entre 0 y 10")
let text = "Tu nota es: "
if (nota < 5) { text += "SUSPENSO"}
else if (nota >= 5 && nota < 6) { text += "APROBADO" }
else if (nota >= 6 && nota < 7) { text += "BIEN" }
else if (nota >= 7 && nota < 9) { text += "NOTABLE" }
else if (nota >= 9 && nota <= 10) { text += "SOBRESALIENTE" }
alert(text)
