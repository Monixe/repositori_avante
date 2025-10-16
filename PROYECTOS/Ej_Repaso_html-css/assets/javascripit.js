document.addEventListener('DOMContentLoaded', () => {
  const aside1 = document.getElementById('aside1');
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  document.querySelectorAll('nav > ul > li').forEach(li => {
    const submenu = li.querySelector('.submenu');
    if(submenu){
      const ajustarSubmenu = () => {
        const headerHeight = header.offsetHeight;
        const asideHeight = aside1.offsetHeight;
        const asideWidth = aside1.offsetWidth;

        submenu.style.width = asideWidth + 'px';
        submenu.style.height = asideHeight + 'px';
        submenu.style.top = headerHeight + 'px';
      };

      ajustarSubmenu();
      window.addEventListener('resize', ajustarSubmenu);

      li.addEventListener('mouseenter', () => {
        submenu.style.left = '0'; // entra desde la izquierda
      });
      li.addEventListener('mouseleave', () => {
        submenu.style.left = `-${aside1.offsetWidth}px`; // vuelve fuera de pantalla
      });
    }
  });
});
document.querySelector('.icono-header[alt="Favoritos"]').addEventListener('click', () => {
  alert("Has añadido un favorito!");
});

document.querySelector('.icono-header[alt="Carrito"]').addEventListener('click', () => {
  alert("Has añadido un producto al carrito!");
});
