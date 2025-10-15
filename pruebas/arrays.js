myArray = new Array(1,2,3,4,5,6,7)
myArray2 = new Array()

myArray.forEach(valor => {console.log(`valor: ${valor} | valor al cuadrado: ${valor**2}`);});
myArray.forEach(valor => {myArray2.push((valor**2))});

console.log(myArray);
console.log(myArray2);