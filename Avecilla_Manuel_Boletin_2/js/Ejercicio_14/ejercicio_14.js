function pedirSalario(mensaje) {
    let num;
    let esValido;

    do {
        esValido = true;
        num = parseFloat(prompt(mensaje));

        if (isNaN(num)) {
            alert("El valor introducido no es un numero.");
            esValido = false;
        } else if (num < 1000 || num > 2000) {
            alert("El valor tiene que estar entre 1000 y 2000.");
            esValido = false;
        }

    } while (!esValido);

    return num;
}

function pedirDocumento() {
    let documento = [];
    let sexo;
    let salario;
    let esValido;

    do {
        esValido = true;
        sexo = prompt("Se trata de un hombre (H) o mujer (M). Escribe * para salir:").toUpperCase();

        if (sexo === "*") return null;

        if (sexo !== "M" && sexo !== "H") {
            alert("El valor introducido no es valido.");
            esValido = false;
        }

    } while (!esValido);

    salario = pedirSalario("Introduce el salario (1000-2000): ");
    documento = [sexo, salario];
    return documento;
}

let documentos = [];
let documento;
let texto = "";

do {
    documento = pedirDocumento();

    if (documento !== null) {
        texto += `${documento.toString()}\n`;
        documentos.push(documento);
    }

} while (documento !== null);

alert(texto);
