const productos = [
    { id: 1, nombre: "Smartphone", precio: 599.99, categoria: "Electrónicos", enStock: true },
    { id: 2, nombre: "Auriculares", precio: 79.99, categoria: "Electrónicos", enStock: false },
    { id: 3, nombre: "Libro JavaScript", precio: 29.99, categoria: "Libros", enStock: true }
];

const lista = document.getElementById("lista-productos");

// Función para mostrar productos
function mostrarProductos(arr) {
  lista.innerHTML = ""; // limpiar antes de renderizar
  arr.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${prod.nombre}</h3>
      <p><strong>Precio:</strong> ${prod.precio}€</p>
      <p><strong>Categoría:</strong> ${prod.categoria}</p>
      <p class="${prod.enStock ? 'enStock' : 'noStock'}">
        ${prod.enStock ? "Disponible" : "Agotado"}
      </p>
    `;
    lista.appendChild(card);
  });
}

// Mostrar todos al inicio
mostrarProductos(productos);

// Filtros
document.getElementById("btnDisponibles").addEventListener("click", () => {
  const disponibles = productos.filter(p => p.enStock);
  mostrarProductos(disponibles);
});

document.getElementById("btnBaratos").addEventListener("click", () => {
  const baratos = productos.filter(p => p.precio < 50);
  mostrarProductos(baratos);
});

document.getElementById("btnTodos").addEventListener("click", () => {
  mostrarProductos(productos);
});