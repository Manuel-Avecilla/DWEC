function pedirNumero(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = prompt(mensaje);

        if (isNaN(parseInt(num))) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }

        if (parseInt(num) < 0) {
            alert("El valor tiene que se positivo.")
            esValido = false
        }

        if (num.length !== 8 ) {
            alert("El numero tiene que tener 9 digitos.")
            esValido = false
        }

    } while (!esValido);
    return num
}

let numero = pedirNumero("Introduce el numero del DNI:")
let letra = "TRWAGMYFPDXBNJZSQVHLCKE"

let DNI = numero + letra.charAt(numero%23)

alert(DNI)

function perdirDNI(){

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const error = "DNI no es valido: ";
        
    let DNI;
    let letra;
    let num;
    

    let esValido;
    
    do {
        esValido = true

        DNI = prompt("Introduce el DNI");

        num = DNI.slice(0, DNI.length-1)
        letra = DNI.toUpperCase().slice(-1)

        if (DNI.length !== 9 ) {
            alert(error+"NO tiene 9 digitos");
            esValido = false
        }
        
        else if (isNaN(parseInt(num) || parseInt(num) < 0)) {
            alert(error+"Numero incorrecto");
            esValido = false
        }

        else if (letra !== letras.charAt(num%23)) {
            alert(error+"Letra incorrecta ");
            esValido = false
        }

    } while (!esValido);

    alert("DNI es correcto")
    return true
}

perdirDNI()