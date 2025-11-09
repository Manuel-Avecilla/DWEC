export function sumar(a=0,b=0){
    const num1 = Number(a)
    const num2 = Number(b)

    if (isNaN(num1)||isNaN(num2)){
        return 0
    } else {
        return num1 + num2
    }
}