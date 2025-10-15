let myArray=[]
console.log(myArray);
myArray.push('1','2','3')
console.log(myArray);

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