// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar nombres

let grupoDeAmigos = [];
let sorteados = [];
let amigosMaximos = 10; // Delimita el máximo de amigos

// Función que reinicia el juego cuando se agrega un nuevo participante
function condicionesIniciales()
{
    document.getElementById("resultado").innerHTML = ""; // Limpia el mensaje sorteado
    document.getElementById("amigo").value = ""; // Limpia el campo de texto
    sorteados = []; // Limpia el array sorteados cuando se agrega un nuevo nombre
    return;
}

// Función que permite agregar amigos
function agregarAmigo() 
{
    let nombre = document.getElementById("amigo").value; // Obtiene el nombre del amigo ingresado
    let resultado = document.getElementById("resultado"); // Referencia al resultado

    if (grupoDeAmigos.length >= amigosMaximos) // Limita el número de participantes
    {
        resultado.innerHTML = "No se pueden agregar más de " + amigosMaximos + " participantes.";
        return;
    }

    if (nombre === "") // Verifica si el campo está vacío
    {
        resultado.innerHTML = "Por favor, ingresa un nombre."; 
        return;
    } 
    else if (grupoDeAmigos.includes(nombre)) // Verifica que el nombre no esté repetido
    {
        resultado.innerHTML = "Este nombre ya ha sido agregado.";
        return;
    } 
    else 
    {
        grupoDeAmigos.push(nombre); // Agrega nombre a la lista de participantes
        condicionesIniciales();
        actualizarLista(); 
    }
}

// Función que actualiza la lista
function actualizarLista(i = 0, nombreEnLista = "") 
{
    let lista = document.getElementById("listaAmigos"); 

    if (i >= grupoDeAmigos.length) 
    { 
        lista.innerHTML = nombreEnLista; 
        return;
    }

    nombreEnLista += grupoDeAmigos[i] + "<br>"; // Agregar nombre y salto de línea
    actualizarLista(i + 1, nombreEnLista); 
}

// Función que sortea al amigo secreto
function sortearAmigo() 
{
    let resultado = document.getElementById("resultado");
    
    if (sorteados.length === grupoDeAmigos.length) // Verifica los amigos sorteados
    {
        resultado.innerHTML = "Todos los participantes han sido sorteados.";
        return;
    }

    if (grupoDeAmigos.length < 2) 
    {
        resultado.innerHTML = "Debe haber al menos dos participantes para el sorteo.";
        return;
    }

    let amigoSecreto;
    let indiceSorteado;
    let encontrado = false; // Variable de control para salir del bucle

    // Genera un número aleatorio hasta encontrar un nombre no sorteado
    while (!encontrado) 
    {
        indiceSorteado = Math.floor(Math.random() * grupoDeAmigos.length);
        amigoSecreto = grupoDeAmigos[indiceSorteado];

        if (!sorteados.includes(amigoSecreto)) 
        {
            encontrado = true; // Se cumple la condición y el bucle termina
        }
    }

    // Mostrar el nombre sorteado
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;

    // Guardar el nombre en la lista de sorteados
    sorteados.push(amigoSecreto);
}
