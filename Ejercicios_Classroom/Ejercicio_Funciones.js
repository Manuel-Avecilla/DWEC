// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a=0,b=0) {
    return a + b
}
console.log(suma(1,3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function elMayor(array=[]) {
    return Math.max(...array);
}
let miArray = [1,2,8,4,5,6]

console.log(elMayor(miArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numVocales(string=""){
    string = string.toLowerCase().trim()
    const vocales = "aeiou"
    let contador = 0

    for (value of string){
        if (vocales.includes(value)){
            contador++
        }
    }

    return contador
}

console.log(numVocales("Hola me llamo pepe"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function arrayMayus(array=[]){
    return array.map(str => str.toUpperCase())
}

let miArray2 = ["Hola","me","llamo","pepe"]

console.log(arrayMayus(miArray2));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const limite = Math.sqrt(num);

    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(esPrimo(7));
console.log(esPrimo(4));


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(array1=[], array2=[]){
    let set1 = new Set(array1)
    let set2 = new Set(array2)
    let elementosComunes = new Set([...set1].filter(value => set2.has(value)))
    return [...elementosComunes]
}

let miArray3 = [1,2,5,7,0,6,3]
let miArray4 = [1,4,6,8,9,3,7]

console.log(elementosComunes(miArray3,miArray4));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPar(array=[]){
    return array.filter(value => value%2===0).reduce((sum,value) => sum + value ,0)
}

let numeros = [1,1,1,3,4,4,1,1]

console.log(sumaPar(numeros));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function arrayCuadrado(array=[]){
    return array.map(value => value**2)
}

let numeros2 = [1,3,4,4]

console.log(arrayCuadrado(numeros2));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function palabrasInversas(string=""){
    return string.trim().split(" ").reverse().join(" ");
}

let frase = "Hola me llamo pepe"
console.log(palabrasInversas(frase));

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num=0){
    let factorial = 1
    for (let i = 1; i <= num; i++) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(5));