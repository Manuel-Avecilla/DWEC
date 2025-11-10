export default class Biblioteca {
    
    #nextID = 0
    libros = new Map()
    historial = new Array()
    
    constructor(nombre="Desconocido",pais="Desconocido",ciudad="Desconocida"){
        this.nombre = nombre
        this.pais = pais
        this.ciudad = ciudad
    }

    agregarLibro(libro){
        this.libros.set(this.#nextID,libro)
        this.#nextID++
    }

    eliminarLibro(id){
        this.libros.delete(id)
    }

    agregarPrestamo(nuevoPrestamo){
        let agregar = true
        if (this.historial.length<1) {
            agregar = true
        } else {
            for (let prestamo of this.historial) {
                if ((prestamo.libro == nuevoPrestamo.libro) && prestamo.enVigor==true) {
                    agregar = false
                }
            }
        }
        if(agregar){this.historial.push(nuevoPrestamo)}
        else {console.log("Prestamo no agregado...");}
    }

    mostrarLibros() {
        console.group("---------Libros---------");
        for (let [id, libro] of this.libros.entries()) {
            console.log(`ID: [${id}], Titulo: [${libro.titulo}]`);
        }
        console.groupEnd();
        console.log("--------------------------");
    }

    mostrarGeneros() {
        console.group("---------Generos---------");
        let generos = new Set()
        for (let [id, libro] of this.libros.entries()) {
            generos.add(libro.genero)
        }
        console.log(generos);
        console.groupEnd();
        console.log("--------------------------");
    }

    mostrarHistorial() {
        console.group("---------Prestamos---------");
        if (this.historial.length<1) {
            console.log("Sin Prestamos");
        } else {
            for (let prestamo of this.historial) {
                prestamo.detallesPrestamo()
            }
        }
        console.groupEnd();
        console.log("--------------------------");
    }

    libroConMasPrestamos(){
        console.group("---------Libro-Con-Mas-Prestamos---------");
        if (this.historial.length<1) {
            console.log("Sin Prestamos");
        } else {
            let numMax = 0
            for (let [id, libro] of this.libros.entries()) {
                if (libro.numVecesPrestado > numMax) {
                    numMax = libro.numVecesPrestado
                }
            }
            for (let [id, libro] of this.libros.entries()) {
                if (libro.numVecesPrestado == numMax) {
                    console.log(`ID: [${id}], Titulo: [${libro.titulo}]`);
                }
            }
        }
        console.groupEnd();
        console.log("---------------------------------------");
    }
    
    detallesBiblioteca() {
        console.group("---------Biblioteca---------");
        console.log("Nombre: "+this.nombre);
        console.log("Ciudad: "+this.ciudad);
        console.log("Pais: "+this.pais);
        console.groupEnd();
        console.log("--------------------------");
    }
}