// 1. Crea una clase que reciba dos propiedades
console.log("\n"+"-----------------------EJERCICIO-1-----------------------"+"\n");
class Persona {
    constructor(nombre="Desconocido", apellido="Desconocido") {
        this.nombre = nombre
        this.apellido = apellido
    }
}

let p1 = new Persona("Pepe","Ruiz")
let p2 = new Persona()

console.log(p1);
console.log(p2);


// 2. Añade un método a la clase que utilice las propiedades
console.log("\n"+"-----------------------EJERCICIO-2-----------------------"+"\n");
class Persona2 extends Persona {
    presentarse() {
        console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }
}

let p3 = new Persona2("Pepe","Ruiz")
p3.presentarse()

// 3. Muestra los valores de las propiedades e invoca a la función
console.log("\n"+"-----------------------EJERCICIO-3-----------------------"+"\n");
let p4 = new Persona2("Pepe","Ruiz")
console.log(p4);
p4.presentarse()

// 4. Añade un método estático a la primera clase
console.log("\n"+"-----------------------EJERCICIO-4-----------------------"+"\n");
class Persona3 extends Persona {
    static metodoEstatico(){
        console.log("Metodo Estatico");
    }
}

// 5. Haz uso del método estático
console.log("\n"+"-----------------------EJERCICIO-5-----------------------"+"\n");
Persona3.metodoEstatico()

// 6. Crea una clase que haga uso de herencia
console.log("\n"+"-----------------------EJERCICIO-6-----------------------"+"\n");
class Jugador extends Persona {
    constructor (nombre, apellido, dorsal=0, equipo="Sin Equipo") {
        super(nombre,apellido)
        this.dorsal = dorsal
        this.equipo = equipo
    }
}

let j1 = new Jugador("Pepe")
console.log(j1);

// 7. Crea una clase que haga uso de getters y setters
console.log("\n"+"-----------------------EJERCICIO-7-----------------------"+"\n");
class Administrador extends Persona {
    alias = "admin"
    fechaCreacion = ""

    constructor(nombre,apellido){
        super(nombre,apellido)
        this.fechaCreacion = new Date().toLocaleDateString()
    }
    get alias() { return this._alias; }
    set alias(nuevoAlias) { this._alias = nuevoAlias; }
}

let ad1 = new Administrador()
console.log(ad1.alias);
ad1.alias = "Pepe";
console.log(ad1.alias);


// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log("\n"+"-----------------------EJERCICIO-8-----------------------"+"\n");
class CEO extends Administrador {
    #password = ""
    constructor(nombre,apellido,password="1234"){
        super(nombre,apellido)
        this.#password = password
    }
    getPassword(){ // Get de prueba
        return this.#password
    }
}
let ceo = new CEO("Juan","Ruiz","password-1234")
ceo.setAlias("El Jefe")
console.log(ceo);

console.log(ceo.password);
console.log(ceo.getPassword());

// 9. Utiliza los get y set y muestra sus valores
console.log("\n"+"-----------------------EJERCICIO-9-----------------------"+"\n");

let ad2 = new Administrador()
console.log(ad2.alias);
ad2.alias = "Pepe";
console.log(ad2.alias);

// 10. Sobrescribe un método de una clase que utilice herencia
console.log("\n"+"-----------------------EJERCICIO-10-----------------------"+"\n");

class Policia extends Persona2 {
    constructor(nombre,apellido){
        super(nombre,apellido)
    }
    presentarse(){
        super.presentarse()
        console.log("Y soy Policia");
    }
}

policia = new Policia("Pablo","Ruiz")
policia.presentarse()