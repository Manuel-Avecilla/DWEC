export default class Usuario {
    constructor(nombre="Desconocido", correo="Desconocido", numSocio=0){
        this.nombre = nombre
        this.correo = correo
        this.numSocio = numSocio
    }

    detallesUsuario(){
        console.group("---------Usuario---------");
        console.log("Nombre: " + this.nombre);
        console.log("Correo: " + this.correo);
        console.log("Numero de socio: "+ this.numSocio);
        console.groupEnd();
        console.log("--------------------------");
    }

}
