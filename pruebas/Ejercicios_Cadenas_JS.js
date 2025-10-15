// 1. Concatena dos cadenas de texto
let cadena_1 = "Hola"
let cadena_2 = " mundo"
let cadena = cadena_1 + cadena_2
console.log(cadena)

// 2. Muestra la longitud de una cadena de texto
let longitud = cadena.length
console.log("Longitud de la cadena es: "+longitud)

// 3. Muestra el primer y último carácter de un string
let primer_char = "primer caracter = "+cadena[0]+"\n"
let ultimo_char = "ultimo caracter = "+cadena[cadena.length-1]
console.log(primer_char + ultimo_char)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let texto = `Hola.
Esata es una cadena
en vaias lineas`
console.log(texto)

// 6. Interpola el valor de una variable en un string
let num = 10
console.log(typeof(num))
num = num.toString()
console.log(typeof(num))

// 7. Reemplaza todos los espacios en blanco de un string por guiones
cadena = "Espacios en blanco de un string por guiones."
cadena = cadena.replace(/ /g,`-`)
console.log(cadena)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
cadena = "Espacios en blanco de un string por guiones."
let palabra = "blanco"
console.log(cadena.includes(palabra));

// 9. Comprueba si dos strings son iguales
cadena = "Hola"
texto = "Mundo"
console.log(cadena==texto ? "Es igual":"No es igual");

// 10. Comprueba si dos strings tienen la misma longitud
cadena = "Hola"
texto = "hola"
console.log(cadena.length==texto.length ? "tienen la misma longitud":"No tienen la misma longitud");