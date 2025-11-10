import { Biblioteca, Libro, Usuario, Prestamo } from "./models/index.js";

// Creamos la biblioteca
const biblioteca = new Biblioteca("Biblioteca Central", "España", "Madrid");

// Creamos varios libros
const libro1 = new Libro("El Quijote", "Cervantes", "Novela", new Date("1605-01-01"), 5);
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez", "Realismo mágico", new Date("1967-06-05"), 3);
const libro3 = new Libro("1984", "George Orwell", "Distopía", new Date("1949-06-08"), 4);
const libro4 = new Libro("La sombra del viento", "Carlos Ruiz Zafón", "Novela", new Date("2001-04-12"), 6);
const libro5 = new Libro("Orgullo y prejuicio", "Jane Austen", "Romántica", new Date("1813-01-28"), 2);
const libro6 = new Libro("Don Juan Tenorio", "José Zorrilla", "Teatro", new Date("1844-01-01"), 3);
const libro7 = new Libro("El Principito", "Antoine de Saint-Exupéry", "Infantil", new Date("1943-04-06"), 5);
const libro8 = new Libro("Fahrenheit 451", "Ray Bradbury", "Ciencia ficción", new Date("1953-10-19"), 4);
const libro9 = new Libro("Crimen y castigo", "Fiódor Dostoyevski", "Novela", new Date("1866-01-01"), 3);
const libro10 = new Libro("La metamorfosis", "Franz Kafka", "Novela corta", new Date("1915-01-01"), 2);
const libro11 = new Libro("La casa de los espíritus", "Isabel Allende", "Novela", new Date("1982-01-01"), 4);
const libro12 = new Libro("El nombre de la rosa", "Umberto Eco", "Misterio", new Date("1980-01-01"), 3);
const libro13 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", "Fantasía", new Date("1997-06-26"), 6);

// Registramos los libros en la biblioteca
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.agregarLibro(libro4);
biblioteca.agregarLibro(libro5);
biblioteca.agregarLibro(libro6);
biblioteca.agregarLibro(libro7);
biblioteca.agregarLibro(libro8);
biblioteca.agregarLibro(libro9);
biblioteca.agregarLibro(libro10);
biblioteca.agregarLibro(libro11);
biblioteca.agregarLibro(libro12);
biblioteca.agregarLibro(libro13);

// Creamos varios usuarios
const usuario1 = new Usuario("Juan Pérez", "juan.perez@email.com", 1);
const usuario2 = new Usuario("María López", "maria.lopez@email.com", 2);
const usuario3 = new Usuario("Carlos García", "carlos.garcia@email.com", 3);
const usuario4 = new Usuario("Ana Martínez", "ana.martinez@email.com", 4);
const usuario5 = new Usuario("Luis Fernández", "luis.fernandez@email.com", 5);
const usuario6 = new Usuario("Sofía Gómez", "sofia.gomez@email.com", 6);
const usuario7 = new Usuario("Diego Ramírez", "diego.ramirez@email.com", 7);
const usuario8 = new Usuario("Lucía Torres", "lucia.torres@email.com", 8);
const usuario9 = new Usuario("Javier Sánchez", "javier.sanchez@email.com", 9);
const usuario10 = new Usuario("Marta Díaz", "marta.diaz@email.com", 10);
const usuario11 = new Usuario("Alberto Ruiz", "alberto.ruiz@email.com", 11);
const usuario12 = new Usuario("Carolina Morales", "carolina.morales@email.com", 12);
const usuario13 = new Usuario("Fernando Herrera", "fernando.herrera@email.com", 13);


// Creamos varios préstamos
const prestamo1 = new Prestamo(
    libro1,
    usuario1,
    new Date("2025-11-10"),
    new Date("2025-11-20")
);
const prestamo2 = new Prestamo(
    libro2,
    usuario2,
    new Date("2025-11-12"),
    new Date("2025-11-22")
);
const prestamo3 = new Prestamo(
    libro3,
    usuario3,
    new Date("2025-11-14"),
    new Date("2025-11-24")
);
const prestamo4 = new Prestamo(
    libro4,
    usuario4,
    new Date("2025-11-16"),
    new Date("2025-11-26")
);
const prestamo5 = new Prestamo(
    libro5,
    usuario5,
    new Date("2025-11-18"),
    new Date("2025-11-28")
);
const prestamo6 = new Prestamo(
    libro6,
    usuario6,
    new Date("2024-11-20"),
    new Date("2024-11-30")
);
const prestamo7 = new Prestamo(
    libro8,
    usuario7,
    new Date("2025-11-22"),
    new Date("2027-12-02")
);
const prestamo8 = new Prestamo(
    libro8,
    usuario8,
    new Date("2025-11-24"),
    new Date("2027-12-04")
);
const prestamo9 = new Prestamo(
    libro9,
    usuario9,
    new Date("2025-11-26"),
    new Date("2025-12-06")
);
const prestamo10 = new Prestamo(
    libro10,
    usuario10,
    new Date("2023-11-28"),
    new Date("2023-12-08")
);
const prestamo11 = new Prestamo(
    libro10,
    usuario11,
    new Date("2025-11-30"),
    new Date("2025-12-10")
);


// Registramos los préstamos en la biblioteca
biblioteca.agregarPrestamo(prestamo1);
biblioteca.agregarPrestamo(prestamo2);
biblioteca.agregarPrestamo(prestamo3);
biblioteca.agregarPrestamo(prestamo4);
biblioteca.agregarPrestamo(prestamo5);
biblioteca.agregarPrestamo(prestamo6);
biblioteca.agregarPrestamo(prestamo7);
biblioteca.agregarPrestamo(prestamo8);
biblioteca.agregarPrestamo(prestamo9);
biblioteca.agregarPrestamo(prestamo10);
biblioteca.agregarPrestamo(prestamo11);

biblioteca.agregarPrestamo(prestamo10);


// Mostrar información
biblioteca.detallesBiblioteca();
biblioteca.mostrarLibros();
biblioteca.mostrarHistorial();
biblioteca.libroConMasPrestamos();
biblioteca.mostrarGeneros();
