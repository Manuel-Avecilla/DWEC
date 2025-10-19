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
