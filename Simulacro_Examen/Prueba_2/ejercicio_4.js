class Empleado {
    // propiedades: nombre, categoria
    // método: describir()
    constructor(nombre, categoria, horas){
        this.nombre = nombre
        this.categoria = categoria
        this.horas = horas
    }

    describir(){
        let mensaje = `Nombre: ${this.nombre}, Categoria: ${this.categoria}, Horas: ${this.horas}`
        return mensaje
    }

    get descripcion() {
        let mensaje = this.describir()
        return mensaje
    }

    static compararHoras(e1, e2) {
        try {
            
            if ((!e1 || !e2)||(typeof e1 !== "Empleado" || typeof e2 !== "Empleado")) {
                throw new Error("Los parametros no son correctos");
            }
            if (typeof e1.horas !== "number" || typeof e2.horas !== "number" ) {
                throw new Error("Los parametros no son correctos");
            }

            if (e1.horas < e2.horas) {return e2}
            else if (e1.horas > e2.horas) {return e1}
            else {
                console.info("Ambos tienen las mismas horas");
                return null
            }
            
        } catch (error) {
            console.error("ERROR: ", error.message)
            return null;
        } 
    }
}

class Desarrollador extends Empleado {
    // propiedad adicional: lenguaje
    // sobrescribe describir() para incluir el lenguaje
    constructor(nombre, categoria, horas, lenguaje){
        super(nombre,categoria,horas)
        this.lenguaje = lenguaje
    }

    describir(){
        let mensaje = super.describir()
        mensaje += `, Lenguaje: ${this.lenguaje}`
        return mensaje
    }

    get descripcion() {
        let mensaje = this.describir()
        return mensaje
    }
}

let e1 = new Empleado("Nombre 1","Categoria 1",20)
let e2 = new Empleado("Nombre 2","Categoria 2",30)
let e3 = new Empleado("Nombre 3","Categoria 3",50)
let e4 = new Empleado("Nombre 4","Categoria 4",60)

let d1 = new Desarrollador("Nombre 5","Categoria 5",60,"Java")
let d2 = new Desarrollador("Nombre 6","Categoria 6",90,"JavaScript")
let d3 = new Desarrollador("Nombre 7","Categoria 7",40,"Python")
let d4 = new Desarrollador("Nombre 8","Categoria 8",10,"JavaScript")

const empleados = new Array()
empleados.push(e1)
empleados.push(e2)
empleados.push(e3)
empleados.push(e4)
empleados.push(d1)
empleados.push(d2)
empleados.push(d3)
empleados.push(d4)

console.log("------LISTA-EMPLEADOS--------");
console.log(empleados);
console.log("-----------------------------");

console.log("------USAN-JS--------");
let usanJS = empleados.filter((e) => e.lenguaje == "JavaScript")
console.log(usanJS);
console.log("-----------------------------");

// export default Empleado {...};

// import Empleado from './Empleado.js';
// let e1 = new Empleado(...)

//SOLUCION
/*
class Empleado {
  constructor(nombre, categoria, horas) {
    if (typeof horas !== "number" || horas < 0) {
      throw new Error("Horas inválidas");
    }
    this.nombre = nombre;
    this.categoria = categoria;
    this.horas = horas;
  }

  describir() {
    return `Nombre: ${this.nombre}, Categoría: ${this.categoria}, Horas: ${this.horas}`;
  }

  get descripcion() {
    return this.describir();
  }

  static compararHoras(e1, e2) {
    try {
      if (!(e1 instanceof Empleado) || !(e2 instanceof Empleado)) {
        throw new Error("Los parámetros deben ser instancias de Empleado");
      }

      if (typeof e1.horas !== "number" || typeof e2.horas !== "number") {
        throw new Error("Propiedad 'horas' inválida");
      }

      if (e1.horas < e2.horas) return e2;
      else if (e1.horas > e2.horas) return e1;

      console.info("Ambos tienen las mismas horas");
      return null;
    } catch (error) {
      console.error("ERROR:", error.message);
      return null;
    }
  }
}

class Desarrollador extends Empleado {
  constructor(nombre, categoria, horas, lenguaje) {
    super(nombre, categoria, horas);
    this.lenguaje = lenguaje;
  }

  describir() {
    return `${super.describir()}, Lenguaje: ${this.lenguaje}`;
  }

  get descripcion() {
    return this.describir();
  }
}

// --- Ejemplo de uso ---
const empleados = [
  new Empleado("Nombre 1", "Categoria 1", 20),
  new Empleado("Nombre 2", "Categoria 2", 30),
  new Empleado("Nombre 3", "Categoria 3", 50),
  new Empleado("Nombre 4", "Categoria 4", 60),
  new Desarrollador("Nombre 5", "Categoria 5", 60, "Java"),
  new Desarrollador("Nombre 6", "Categoria 6", 90, "JavaScript"),
  new Desarrollador("Nombre 7", "Categoria 7", 40, "Python"),
  new Desarrollador("Nombre 8", "Categoria 8", 10, "JavaScript"),
];

console.info("------ LISTA DE EMPLEADOS ------");
console.table(
  empleados.map(e => ({
    nombre: e.nombre,
    categoria: e.categoria,
    horas: e.horas,
    lenguaje: e.lenguaje || "-"
  }))
);

console.info("------ DESARROLLADORES JS ------");
console.table(
  empleados.filter(e => e.lenguaje === "JavaScript")
);

// export default Empleado;
// import Empleado from './Empleado.js';

*/