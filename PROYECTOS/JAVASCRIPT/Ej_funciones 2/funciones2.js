// 1) Pares del 2 al 30 (sin filtrar)



// function pares2_30(){
//     for (let i = 2; i <= 30; i+=2) {
//         console.log(i);
//     }
// }
// pares2_30();



// 2) Cuenta atrás del 10 al 1

// const cuentaAtras = [];
// for (let i = 10; i >= 1; i--) {

//     cuentaAtras.push(i);
// }
// console.log(cuentaAtras);

// 3) Mostrar 10 animales (solo recorrer)

// const animales10 =["cerdo","oveja","perro","gato","burro","caracol","tortuga","gusano","vaca","gallo"];
// console.log(animales10);

// 4) Números en posiciones pares del array (0,2,4,...)

// const pares2_30 = [];
// for (let i = 2; i <= 30; i++) {
//     if (i % 2 === 0) {
//         pares2_30.push(i);
//     }
// }
// console.log(pares2_30);

// 5) Sumar todos los elementos de un array

// const sumaArray = [1, 2, 3, 4, 5];
// let total = 0;
// for (let i = 0; i < sumaArray.length; i++) {
//     // total += sumaArray[i];
//     total=total+sumaArray[i];
// }
// console.log(total);

// console.log(suma);

// 6) Promedio de notas (decisión FUERA del bucle)

function promedioNotas() {
    let notas = [5, 6, 8, 9.9, 2];
    let total = 0;

    for (let i = 0; i < notas.length; i++) {

        total += notas[i];

    }
    let promedio = total / notas.length;
    console.log(promedio);
}
promedioNotas();



// 7) Tabla de multiplicar (sin condicionales)


// 8) Invertir un array (recorrer hacia atrás)


// 9) Generar los primeros 10 múltiplos de 3


// 10) Buscar un elemento (decisión fuera; el bucle solo imprime)


// 11) Mostrar solo los 5 primeros elementos (límite decidido antes)


// 12) Serie de pares hasta N (elige dirección antes del bucle)