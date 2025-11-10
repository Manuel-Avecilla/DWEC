function evaluarEmpleado(nombre, horas, categoria) {

    const hora = Number(horas)

    if (isNaN(hora)){
        console.error("ERROR: horas debe ser un numero")
        return false
    } else if (hora<0) {
        console.error("ERROR: horas debe ser un numero positivo")
        return false
    }

    let productividad = ""
    if (hora>40){productividad="Alta"}
    else if (hora<20){productividad="Baja"}
    else {productividad="Media"}

    const categ = categoria.toLowerCase().trim()
    const tipoCategoria = new Set(["junior","senior","manager"])
    if (!tipoCategoria.has(categ)){
        console.error("ERROR: Categoria incorrecta")
        return false
    }

    return `Empleado ${nombre} (${categ}) tiene productividad ${productividad}`
}

// SOLUCION
/*
function evaluarEmpleado(nombre, horas, categoria) {
    try {
        const hora = Number(horas);
        if (isNaN(hora)) throw new Error("Horas debe ser un número");
        if (hora < 0) throw new Error("Horas debe ser un número positivo");

        const categ = categoria.toLowerCase().trim();
        const tipoCategoria = new Set(["junior", "senior", "manager"]);
        if (!tipoCategoria.has(categ)) throw new Error("Categoría incorrecta");

        let productividad = "";
        if (hora > 40 && (categ === "senior" || categ === "manager")) productividad = "Alta";
        else if (hora < 20) productividad = "Baja";
        else productividad = "Media";

        const mensaje = `Empleado ${nombre} (${categ}) tiene productividad ${productividad}`;
        console.info(mensaje);
        return mensaje;

    } catch (error) {
        console.error("ERROR:", error.message);
        return null;
    }
}
*/