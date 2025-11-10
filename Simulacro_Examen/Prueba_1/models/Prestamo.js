export default class Prestamo{
    enVigor = false
    constructor(libro,usuario,fechaInicio,fechaFinal){
        this.libro = libro
        
        this.usuario = usuario
        this.fechaInicio = fechaInicio
        this.fechaFinal = fechaFinal
        this.enVigor = (Date.now() < fechaFinal)
    }

    detallesPrestamo(){
        console.group("---------Prestamo---------");
        console.log("Fecha Inicio: " + this.fechaInicio.toLocaleDateString());
        console.log("Fecha Final: " + this.fechaFinal.toLocaleDateString());
        console.log("Usuario: "+ this.usuario.nombre);
        console.log("Libro: "+ this.libro.titulo);
        console.log("Prestamo en vigor: "+this.enVigor);
        console.groupEnd();
        console.log("--------------------------");
    }

    cancelarPrestamo(){
        this.enVigor=false
    }
}