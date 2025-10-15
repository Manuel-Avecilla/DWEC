let myArray=[]
console.log(myArray);
myArray.push('hola1','hola2','hola3')
console.log(myArray);

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
myArray.forEach(logArrayElements);
myArray.forEach((valor,indice,array)=>console.log(`valor ${valor} indice ${indice} array ${array}`))

myArray = new Array()
console.log(myArray);

let myArray2 = new Array(3)
console.log(myArray2);

console.log([]===[])
console.log(''==="")
console.log([].toString()===[].toString())

const mySet = new Set()
mySet.add([])
mySet.add([])
console.log(mySet);

mySet.delete([])
console.log(mySet);


let myMap = [
    [1,'hola'],
    [2,'hola'],
    [3,'hola'],
]
console.table(myMap)