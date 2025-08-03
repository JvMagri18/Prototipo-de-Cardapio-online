const darkModeToggle = document.getElementById("darkModeToggle");

function showCategory(id) {
  const categorias = document.querySelectorAll('.categoria');

  categorias.forEach(sec => {
    sec.classList.remove('ativa');
    sec.classList.remove('fade-in'); // remove classe de animação anterior
  });

  // Aguarda transição de opacidade antes de aplicar a nova
  setTimeout(() => {
    const ativa = document.getElementById(id);
    if (ativa) {
      ativa.classList.add('ativa');
      // Gatilho para animação de entrada
      requestAnimationFrame(() => {
        ativa.classList.add('fade-in');
      });
    }
  }, 50);
}

// Modo escuro
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  updateDarkModeButton();
});

function updateDarkModeButton() {
  const isDark = document.body.classList.contains("dark-mode");
  darkModeToggle.innerHTML = isDark ? '<span>☀️</span>' : '<span>🌑</span>';
  darkModeToggle.classList.toggle('light-mode', !isDark);
}

// Início
updateDarkModeButton();
showCategory("quentes");

function ajustarAlturaBody() {
  const main = document.querySelector('main');
  if (!main) return;
  const mainHeight = main.offsetHeight;
  document.body.style.minHeight = (mainHeight + 150) + 'px';
}
window.addEventListener('load', ajustarAlturaBody);
window.addEventListener('resize', ajustarAlturaBody);
