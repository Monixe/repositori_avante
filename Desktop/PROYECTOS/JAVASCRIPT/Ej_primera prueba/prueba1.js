// let frutas =["manzana","naranja"];
// console.log(frutas);

// frutas.unshift("plátano");
// frutas.push("fresas");
// console.log(frutas);

// frutas.pop();
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// let animales = ["leon", "leon", "ardilla", "avestruz", "pingüino", "elefante", "ardilla"];
// console.log(animales);
// let primerAnimal = animales.shift();
// console.log('El animal que se han llevado ha sido el ' + primerAnimal);
// console.log(animales.indexOf("leon"));
// console.log(animales.indexOf("ardilla"));
// let animalBuscado = "leon";
// if (animales.indexOf(animalBuscado) !== -1) {
//     console.log(`✅ ${animalBuscado} está en la lista`);
// } else {
//     console.log(`❌ ${animalBuscado} no está en la lista`);
// }

// array.splice(dóndeEmpezar, cuántosEliminar, quéAgregar)


// console.log(animales);
// let miLista;
// animales.splice(1,0,"jirafa");
// console.log(animales);
// miLista=animales.splice(1,4);
// console.log(miLista);
// console.log(animales);

// miLista.array.forEach(element => {


// });




// let posicion = 0;


// while (posicion < animales.length) {
//     console.log(`Animal ${posicion + 1}: ${animales[posicion]}`);
//     posicion++; // Avanzamos a la siguiente posición
// }
// let nombre = "Ana";
// let edad = 25;
// console.log(`Hola ${nombre}, tienes ${edad} años`);
// let numero = 1;
// let suma = 0;
// while (suma<20){
//     suma=suma+numero;
//     console.log(`Sumamos ${numero}, total:${suma}`);
//     numero++;
// }
// console.log(`¡Hemos llegado a ${suma}!`);

// let contador = 10;
// while (contador>=1){
//     contador--;
//     console.log(contador+1);
// }

// let colores = ["rojo", "verde", "azul", "amarillo", "morado"];
// let posicion=0;
// while (posicion < colores.length) {

//     console.log(`Color ${posicion+1} : ${colores[posicion]}`);
//    posicion++;

// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// let i = 0;                // Declaramos fuera
// for (i = 0; i < 3; i++) { // Solo asignamos dentro
//     console.log(i);
// }
// console.log("i final:", i);

// let animales = ["perro", "gato", "pájaro"];
// for (i = 0; i < animales.length; i++) {
//     console.log(`Animal ${i + 1} : ${animales[i]} `);
// }

let numeros = [10, 20, 30, 40, 50];
let suma = 0;
for (i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
    console.log(`Suma parcial: ${suma}`);

}
console.log(`La suma total es: ${suma}`);