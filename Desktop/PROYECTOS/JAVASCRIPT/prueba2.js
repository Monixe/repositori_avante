// 👋 Construcción de mensajes
let nombre = "Ana";
let apellido = "García";
let edad = 16;

// Método 1: Concatenación con +
let mensaje1 = "Hola, soy " + nombre + " " + apellido;
console.log(mensaje1); // "Hola, soy Ana García"

// Método 2: Concatenación con +=
let mensaje2 = "Mi nombre es ";
mensaje2 += nombre;
mensaje2 += " y tengo ";
mensaje2 += edad;
mensaje2 += " años ";
console.log(mensaje2); // "Mi nombre es Ana y tengo 16 años"