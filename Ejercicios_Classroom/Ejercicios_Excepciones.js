// 1. Captura una excepción utilizando try-catch
let objeto

try {
    objeto.hola() //error
} catch (error) {
    console.log("Termina con error: "+error);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    objeto.hola() // error
    console.log("Sin errores");
} catch (error) {
    console.log("Capturo el error");
} finally {
    console.log("Simpre termino aqui");
}

// 3. Lanza una excepción genérica

function lanzarError() {
    throw new TypeError()
}
try {
    lanzarError()
} catch (error) {
    console.log("Capturo el error: \n"+error)
}


// 4. Crea una excepción personalizada

function lanzarMiError() {
    throw new TypeError("Mi error")
}

// 5. Lanza una excepción personalizada

try {
    lanzarMiError()
} catch (error) {
    console.log("Capturo el error: \n"+error)
}

// 6. Lanza varias excepciones según una lógica definida

function sumar(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        throw new TypeError("ERROR: Los parametros deben ser numeros validos.");
    }
    if (numA === 0 || numB === 0) {
        throw new RangeError("ERROR: Los numeros no pueden ser 0.");
    }
    if (numA < 0 || numB < 0) {
        throw new RangeError("ERROR: Los numeros no pueden ser negativos.");
    }

    return numA + numB;
}

// 7. Captura varias excepciones en un mismo try-catch

try {

    console.log(sumar("4", "5"));
    //console.log(sumar("4a", 5));
    console.log(sumar(-4, 5));
    console.log(sumar(0, 5));

} catch (error) {
    if (error instanceof TypeError) {
        console.error("Error de tipo:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Error de rango:", error.message);
    } else {
        console.error("Error desconocido:", error);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

function pasarFloat(value) {
    const num = parseFloat(value)
    if(isNaN(num)){
        throw new TypeError("ERROR: No se puede convertir a numero.")
    } else {
        return num
    }
}

let valores = [1,2.43,"2,12","12.01","k1ajgd2","4","hola"]

for (value of valores) {
    try {
        console.log(pasarFloat(value));
    } catch (error) {
        console.log("Error: "+error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new Error(`La propiedad "${propiedad}" no existe en el objeto.`);
    }
    console.log(`La propiedad "${propiedad}" existe y su valor es:`, objeto[propiedad]);
    return true;
}

const persona = { nombre: "Pepe" };

try {
    verificarPropiedad(persona, "nombre"); // existe
    verificarPropiedad(persona, "DNI");    // lanza error
} catch (error) {
    console.error(error.message);
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

let intentos = 1
let conError = true
while (intentos <= 10 && conError) {
    try {
        console.log("Intentos: "+intentos);
        objeto.hola() // error
        conError = false
    } catch (error) {
        console.log("Capturo el error: \n"+error)
        intentos++
    }
}