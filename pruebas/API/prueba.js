fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        // Comprobamos si la respuesta es correcta
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Convertimos la respuesta a JSON
    })
    .then((json) => {
        console.log(json); // Mostramos el JSON
    })
    .catch((error) => {
        console.log("Error:", error);
    });


async function getAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error:", error);
    }
}



async function getUsuarioID(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data; // Devolvemos los datos

    } catch (error) {
        console.log("Error:", error);
    }
}

const usuario = await getUsuarioID(9); // Llamamos a la función con un ID válido
console.log(usuario.name); // Mostramos el resultado


