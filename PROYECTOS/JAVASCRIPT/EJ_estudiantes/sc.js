
const estudiantes = [
    {
        id: 1,
        nombre: "Ana López",
        edad: 20,
        curso: "JavaScript",
        notas: [8.5, 9.0, 7.5],
        activo: true,
        email: "ana@email.com"
    },
    {
        id: 2,
        nombre: "Carlos Martín",
        edad: 22,
        curso: "JavaScript",
        notas: [7.0, 8.5, 9.0],
        activo: true,
        email: "carlos@email.com"
    },
    {
        id: 3,
        nombre: "Elena García",
        edad: 19,
        curso: "JavaScript",
        notas: [9.5, 9.0, 9.5],
        activo: false,
        email: "elena@email.com"
    }
];


console.log("=== LISTA DE ESTUDIANTES ===");
for (let i = 0; i < estudiantes.length; i++) {

    const est = estudiantes[i];



    console.log("👤 " + est.nombre + " (" + est.edad + " años) - " + est.email);

}
console.log("\n=== PROMEDIOS ===");
for (let i = 0; i < estudiantes.length; i++) {
    const est = estudiantes[i];
    let suma = 0;


    for (let j = 0; j < est.notas.length; j++) {
        suma += est.notas[j];
    }

    const promedio = suma / est.notas.length;
    console.log("📊 " + est.nombre + ": " + promedio.toFixed(2));

}

let mejorEstudiante = estudiantes[0];
let mejorPromedio = 0;

for (let i = 0; i < estudiantes.length; i++) {
    const est = estudiantes[i];
    let suma = 0;


    for (let j = 0; j < est.notas.length; j++) {
        suma += est.notas[j];
    }

    const promedio = suma / est.notas.length;


    if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        mejorEstudiante = est;
    }
}

console.log("\n🏆 MEJOR ESTUDIANTE:");
console.log("🌟 " + mejorEstudiante.nombre + " con promedio de " + mejorPromedio.toFixed(2));

console.log("\n=== ESTUDIANTES ACTIVOS ===");
for (let i = 0; i < estudiantes.length; i++) {


    if (estudiantes[i].activo === true) {
        console.log("✅ " + estudiantes[i].nombre);
    }

}
