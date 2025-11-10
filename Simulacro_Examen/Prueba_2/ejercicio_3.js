function analizarProyecto(proyecto) {
    try {
        if (!proyecto || !Array.isArray(proyecto.tareas)){
            throw new Error("Datos inválidos en el proyecto")
        }
        if (!proyecto.nombre || proyecto.nombre.trim() === "") {
            throw new Error("Datos inválidos en el proyecto")
        }

        const tareasValidas = proyecto.tareas.every(tarea => {
            if (typeof tarea !== "object" || tarea === null) return false;
            const tieneTitulo = typeof tarea.titulo === "string" && tarea.titulo.trim() !== "";
            const tieneHoras = typeof tarea.horas === "number" && tarea.horas >= 0;
            return tieneTitulo && tieneHoras
        })
        if (!tareasValidas) {
            throw new Error("Datos inválidos en el proyecto")
        }
        let numTareas = proyecto.tareas.length
        let sumaHoras = proyecto.tareas.map((tarea)=> tarea.horas).reduce((acumulador, horas) => acumulador + horas, 0)
        
        const mensaje = `El proyecto ${proyecto.nombre} tiene ${numTareas} tareas y un total de ${sumaHoras} horas.`
        console.info(mensaje)
        return mensaje

    } catch (error) {
        console.error("ERROR: " + error.message)
        return false
    }
}

//SOLUCION
/*
function analizarProyecto(proyecto) {
    console.time("Tiempo de análisis");
    try {
        if (!proyecto || !Array.isArray(proyecto.tareas)) {
            throw new Error("Estructura del proyecto inválida");
        }
        if (!proyecto.nombre || proyecto.nombre.trim() === "") {
            throw new Error("Nombre del proyecto inválido");
        }

        const tareasValidas = proyecto.tareas.every(tarea => {
            if (typeof tarea !== "object" || tarea === null) return false;
            const tieneTitulo = typeof tarea.titulo === "string" && tarea.titulo.trim() !== "";
            const tieneHoras = typeof tarea.horas === "number" && tarea.horas >= 0;
            return tieneTitulo && tieneHoras;
        });
        if (!tareasValidas) {
            throw new Error("Datos de tareas inválidos");
        }

        const numTareas = proyecto.tareas.length;
        const sumaHoras = proyecto.tareas.reduce((acc, tarea) => acc + tarea.horas, 0);

        const mensaje = `El proyecto ${proyecto.nombre} tiene ${numTareas} tareas y un total de ${sumaHoras} horas.`;
        console.info(mensaje);

        console.timeEnd("Tiempo de análisis");
        return mensaje;

    } catch (error) {
        console.error("ERROR:", error.message);
        console.timeEnd("Tiempo de análisis");
        return null;
    }
}

*/

const proyectoEjemplo = {
    nombre: "Web interna",
    tareas: [
        { titulo: "Diseño", horas: 10 },
        { titulo: "Frontend", horas: 25 },
        { titulo: "Backend", horas: 30 },
    ],
};

analizarProyecto(proyectoEjemplo)