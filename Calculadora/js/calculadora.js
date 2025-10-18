document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "0";

    // --- Clicks con los botones ---
    buttons.forEach(button => {
        const valor = button.getAttribute("valor");

        if (valor !== null) {
            button.addEventListener( "click", () => { agregarValor(valor); } );
        }
    });

    document.getElementById("igual").addEventListener("click", calcular);
    document.getElementById("borrar").addEventListener("click", limpiarTodo);
    document.getElementById("atras").addEventListener("click", limpiarUno);

    // --- Teclado ---
    document.addEventListener("keydown", (event) => {
        const tecla = event.key;

        // Si la tecla es un número o un operador válido y no es ningun F1,F2...
        if (/[0-9+\-*/.]/.test(tecla) && tecla.charAt(0)!=="F") {
            agregarValor(tecla);
        }
        // Enter → calcular
        else if (tecla === "Enter") {
            event.preventDefault(); // evita que el Enter recargue la página
            calcular();
        }
        // Escape o Backspace → limpiar
        else if (tecla === "Escape" || tecla === "Backspace") {
            limpiarTodo();
        }
    });

    // --- Agregar valor ---
    function agregarValor(valor) {
        if (display.value === "0" && (!isNaN(valor) || "(√π".includes(valor))) {
            currentInput = valor;
            display.value = currentInput;

        } else if (display.value === "Error"){
            limpiarTodo()
        }
        else {
            currentInput += valor;
            display.value = currentInput;
        }
        
    }

    // --- Calcular Operacion ---
    function calcular() {
        try {
            let expresion = currentInput;
            
            if (expresion.includes("x")){
                expresion = expresion.replace(/x/g, "*");
            }
            if (expresion.includes("π")){
                expresion = expresion.replace(/π/g, "Math.PI");
            }
            if (expresion.includes("√")) {
                expresion = expresion.replace(/√/g, "Math.sqrt(");
                expresion += ")"
            }
            
            let result = eval(expresion);

            if (isNaN(result)){ result = "Error" }
            else if (result === Infinity || result === -Infinity){ result = "Error"}

            display.value = result;
            currentInput = result.toString();

        } catch {
            display.value = "Error";
            currentInput = "0";
        }
    }

    // --- Limpiar Pantalla ---
    function limpiarTodo() {
        currentInput = "0";
        display.value = "0";
    }

    // --- Limpiar Uno ---
    function limpiarUno() {
        if(display.value.length !== 1 && display.value !== "Error"){
            currentInput = currentInput.slice(0,-1)
            display.value = currentInput
        } else {
            limpiarTodo()
        }
        
    }
});
