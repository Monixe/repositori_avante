// let formulario = {
//     nombre: "Ana López",
//     edad: "",
//     esActivo: true,
//     materias: ["HTML", "CSS", "JavaScript"]

// };

// let alumno2 = {
//     nombre: "Carlos Ruiz",
//     edad: 22,
//     esActivo: false,
//     materias: ["Python", "SQL"]

// };

// let alumno3 = {
//     nombre: "María García",
//     edad: 19,
//     esActivo: true,
//     materias: ["React", "Node.js"]

// };
// console.log(alumno1.nombre);

// for (let propiedad in alumno1) {
//     console.log(propiedad + ":" + alumno1[propiedad]);

//Validar formulaio

// let formulario = {
//     nombre: "Ana López",
//     edad: "1",
//     esActivo: true,
//     materias: ["HTML", "CSS", "JavaScript"]

// };

// let camposVacios = [];
// let totalCampos = 0;

// for (let campo in formulario) {
//     totalCampos++;

//     if (formulario[campo] === "" || formulario[campo] === null) {
//         camposVacios.push(campo);
//         console.log("❌ " + campo + ":VACÍO");
//     } else {
//         console.log("✅ " + campo + ": " + formulario[campo]);

//     }
// }

// console.log(`\n📊 RESUMEN: ${totalCampos - camposVacios.length}/${totalCampos} campos completos`);

// if (camposVacios.length > 0) {
//     console.log("⚠️ Faltan: " + camposVacios.join(", "));
// } else {
//     console.log("🎉 ¡Formulario completo!");
// }

// const coche = {
//     marca: "Toyota",
//     color: "Rojo"
// };

// // Ahora el objeto PUEDE HACER COSAS (tiene métodos)
// const cocheConMetodos = {
//     marca: "Toyota",
//     color: "Rojo",

//     // ¡ESTE ES UN MÉTODO! (función dentro del objeto)
//     arrancar: function() {
//         console.log("¡El coche está arrancando!");
//     }
// };
// cocheConMetodos.arrancar();

// const estudiante1 = {
//     nombre: "Ana",
//     saludar: function() {
//         // ✅ this.nombre = "Ana" (porque this = estudiante1)
//         console.log("¡Hola! Soy " + this.nombre);
//     }
// };

// const estudiante2 = {
//     nombre: "Carlos",
//     saludar: function() {
//         // ✅ this.nombre = "Carlos" (porque this = estudiante2)
//         console.log("¡Hola! Soy " + this.nombre);
//     }
// };

// // Ahora cada uno sabe quién es:
// estudiante1.saludar();  // "¡Hola! Soy Ana"
// estudiante2.saludar();  // "¡Hola! Soy Carlos"

const estudiante = {
    nombre: "Ana",
    edad: 20,
    notas: [8.5, 9.0, 7.5],

    // MÉTODO 1: Saludar (sintaxis clásica con 'function')
    saludar: function () {
        // this = estudiante (el objeto que está ejecutando este método)
        // this.nombre = estudiante.nombre = "Ana"
        console.log("¡Hola! Soy " + this.nombre);
    },

    // MÉTODO 2: Calcular promedio
    calcularPromedio: function () {
        let suma = 0;

        // this.notas = estudiante.notas = [8.5, 9.0, 7.5]
        for (let i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }

        return ((suma / this.notas.length).toFixed(2));
    },

    // MÉTODO 3: Información completa
    obtenerInfo: function () {
        // Puedo usar otros métodos del mismo objeto con this
        const promedio = this.calcularPromedio();

        // this.nombre = "Ana", this.edad = 20
        return `${this.nombre}, ${this.edad} años, promedio: ${promedio}`;
    }
};

// ¡Ahora usamos los métodos!
estudiante.saludar();                      // "¡Hola! Soy Ana"
console.log(estudiante.calcularPromedio());  // 8.33
console.log(estudiante.obtenerInfo());       // "Ana, 20 años, promedio: 8.33"