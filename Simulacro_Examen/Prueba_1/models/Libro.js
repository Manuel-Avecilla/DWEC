export default class Libro {

    prestado = false
    numVecesPrestado = 0

    constructor(titulo="Sin Titulo", autor="Desconocido", genero="Sin Genero", fecha=new Date("1/1/2000"), numCopias=0){
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.fecha = fecha
        this.numCopias = numCopias
    }

    detallesLibro(){
        console.group("---------Libro---------");
        console.log("Titulo: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Genero: "+ this.genero);
        console.log("Fecha Publicacion: "+ this.fecha.toLocaleDateString());
        console.log("Numero de Copias: "+this.numCopias);
        console.log("Prestado: "+this.prestado);
        console.groupEnd();
        console.log("--------------------------");
    }
}
