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

        if (num < 0) {
            alert("El valor tiene que se mayor que 0.")
            esValido = false
        }

    } while (!esValido);
    return num
}

const year = pedirNumero("Introduce un año: ")
let esBisiesto = ( (year%400===0) || ((year%4===0) && (year%100!==0)) )

if (esBisiesto){
    alert(`El año ${year} es bisiesto`)
} else {
    alert(`El año ${year} NO es bisiesto`)
}

