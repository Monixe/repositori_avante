// Base de datos de estudiantes
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

// Selección de elementos del DOM
const lista = document.getElementById("lista-estudiantes");
const resultados = document.getElementById("resultados");

// Función para mostrar estudiantes en tarjetas
function mostrarEstudiantes(arr) {
  lista.innerHTML = ""; // limpiar antes de mostrar
  arr.forEach(est => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${est.nombre}</h3>
      <p><strong>Edad:</strong> ${est.edad} años</p>
      <p><strong>Curso:</strong> ${est.curso}</p>
      <p><strong>Email:</strong> ${est.email}</p>
      <p class="${est.activo ? "activo" : "inactivo"}">
        ${est.activo ? "Activo" : "Inactivo"}
      </p>
    `;
    lista.appendChild(card);
  });
}

// Mostrar todos los estudiantes al inicio
mostrarEstudiantes(estudiantes);

// Botón: Promedios
document.getElementById("btnPromedios").addEventListener("click", () => {
  resultados.innerHTML = "<h2>📊 Promedios</h2>";
  estudiantes.forEach(est => {
    const promedio = est.notas.reduce((a, b) => a + b, 0) / est.notas.length;
    resultados.innerHTML += `<p>${est.nombre}: <strong>${promedio.toFixed(2)}</strong></p>`;
  });
});

// Botón: Mejor estudiante
document.getElementById("btnMejor").addEventListener("click", () => {
  let mejorEst = null;
  let mejorProm = 0;

  estudiantes.forEach(est => {
    const prom = est.notas.reduce((a, b) => a + b, 0) / est.notas.length;
    if (prom > mejorProm) {
      mejorProm = prom;
      mejorEst = est;
    }
  });

  resultados.innerHTML = `
    <h2>🏆 Mejor Estudiante</h2>
    <p>🌟 ${mejorEst.nombre} con promedio de <strong>${mejorProm.toFixed(2)}</strong></p>
  `;
});

// Botón: Estudiantes activos
document.getElementById("btnActivos").addEventListener("click", () => {
  const activos = estudiantes.filter(est => est.activo);
  mostrarEstudiantes(activos);
  resultados.innerHTML = `<h2>✅ Estudiantes Activos</h2><p>Total: ${activos.length}</p>`;
});

// Botón: Ver todos
document.getElementById("btnTodos").addEventListener("click", () => {
  mostrarEstudiantes(estudiantes);
  resultados.innerHTML = "";
});