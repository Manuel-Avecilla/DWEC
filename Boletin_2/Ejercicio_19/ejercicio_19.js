function pedirNumero(mensaje) {
    
    let num;
    let esValido;
    
    do {
        esValido = true

        num = parseInt(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false
        }
        if (num<1 || num>3){
            alert("El valor introducido debe estar entre (1 - 3).");
            esValido = false
        }

    } while (!esValido);

    return num
}

let trilero = []
let trilero_1 = ""
let trilero_2 = ""
let trilero_3 = ""

trilero_1 = `
    .___.
    |___|   .___.   .___.
    |___|   |___|   |___|
      ●     |___|   |___|
`
trilero_2 = `
               .___.
    .___.   |___|   .___.
    |___|   |___|   |___|
    |___|     ●     |___|
`
trilero_3 = `
                          .___.
    .___.   .___.   |___|
    |___|   |___|   |___|
    |___|   |___|     ●
`
trilero = [trilero_1,trilero_2,trilero_3]

let trilero_mezcla = `Mezclando...
    .___.   .___.   .___.
    |___|   |___|   |___|   
    |___|   |___|   |___|   
`
let trilero_eleccion = `¿Donde esta la bolita?
    .___.   .___.   .___.
    |_1_|   |_2_|   |_3_|
    |___|   |___|   |___|
`
num_premio = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let trilero_premio = trilero[num_premio-1]

alert(trilero_1)
alert(trilero_mezcla)
numero = pedirNumero(trilero_eleccion)

if (numero === num_premio){
    alert(trilero_premio + "\n CORRECTO")
} else {
    alert(trilero_premio + "\n INCORRECTO")
}





