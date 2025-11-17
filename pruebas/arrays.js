myArray = new Array(1,2,3,4,5,6,7)
myArray2 = new Array()

myArray.forEach(valor => {console.log(`valor: ${valor} | valor al cuadrado: ${valor**2}`);});
myArray.forEach(valor => {myArray2.push((valor**2))});

console.log(myArray);
console.log(myArray2);

let numeros = [1,2,3,4,5,6]

// filter
let resultado = numeros.filter(n => {
    let esPositivo = n > 0;
    let menorQue100 = n < 100;
    let noEs10 = n !== 10;
    let esPar = n % 2 === 0;

    return (
        esPositivo &&
        menorQue100 &&
        noEs10 &&
        esPar
        // ...y así con el resto
    );
});

// flat - elimina dimensiones de un array
let noflatArray = [1,[2,[3,4]]]
console.log(noflatArray)
console.log(noflatArray.flat());
console.log(noflatArray.flat(2));

noflatArray = [[[1,2],3],4]
console.log(noflatArray)
console.log(noflatArray.flat());
console.log(noflatArray.flat(2));

// flatMap
let frase = ["hola esto","es una frase"]

let palabras = frase.flatMap(p => p.split(" "))
console.log(palabras)

// ordenacion

let noOrden = ["a","e","d","c","b"]
// sort --> no retorna un array, modifica el existente
console.log(noOrden.sort());
console.log(noOrden);

// reverse --> no retorna un array, modifica el existente
console.log(noOrden.reverse());
console.log(noOrden);

//busqueda

// include
console.log(noOrden.includes("a"));
console.log(noOrden.includes("5"));

// find
let numeros3 = [1,2,3,4,5,6]
console.log(numeros3.find(n=>n%2===0));
console.log(numeros3.findIndex(n=>n%2===0));
console.log(numeros3.findLast(n=>n%2===0));
console.log(numeros3.findLastIndex(n=>n%2===0));

