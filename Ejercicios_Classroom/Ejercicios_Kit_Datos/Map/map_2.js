// =======================
//      Nivel Básico
// =======================

// 1. Creación y Establecimiento
// Crea un Map llamado 'traducciones'.
// Asocia la clave 'hello' al valor 'hola' y 'bye' al valor 'adiós' usando set().



// 2. Obtención y Tamaño
// Usa get() para obtener el valor asociado a 'hello'.
// Imprime el tamaño del Map con size.



// =======================
//    Nivel Intermedio
// =======================

// 3. Clave de Número
// Añade una nueva entrada donde la clave sea un número (1) y el valor sea 'Primer Nivel'.
// Demuestra que puedes acceder a ella con get(1).



// 4. Clave de Objeto
// Crea un objeto: config = {version: 1.0}
// Usa este objeto 'config' como clave en 'traducciones' y asocia el valor 'Configuración Global'.
// Muestra el valor que obtienes al buscar con la clave 'config'.



// 5. Iteración de Claves
// Utiliza el método keys() junto con un bucle for...of para imprimir solo las claves del Map.



// 6. Iteración de Pares
// Utiliza el método entries() para recorrer el Map e imprimir cada par en el formato:
// Clave: [clave], Valor: [valor]



// =======================
//     Nivel Avanzado
// =======================

// 7. Búsqueda Condicional
// Escribe una función 'buscarTraduccion(clave)' que busque la clave en 'traducciones'.
// Si la encuentra, devuelve el valor; si no, devuelve 'Traducción no disponible'.



// 8. Conversión bidireccional
// Convierte el Map 'traducciones' a un Array de Pares usando el operador spread (...).
// Luego, crea un nuevo Map a partir de ese Array.



// 9. Map como Contador de Frecuencia
// Dado un array de palabras:
// frase = ['a', 'b', 'a', 'c', 'b', 'a']
// Usa un Map para contar la frecuencia de cada palabra y almacena el resultado como:
// {'a': 3, 'b': 2, 'c': 1} (clave = palabra, valor = cuenta)



// 10. Simulación de Base de Datos
// Crea una clase 'DBManager' con un Map privado para almacenar datos.
// Implementa los métodos:
// - guardar(id, dato)
// - obtener(id)
// - eliminar(id)
// Asegúrate de que los métodos manejen el caso de que el id no exista, devolviendo null o un mensaje apropiado.


