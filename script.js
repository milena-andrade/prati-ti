const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
toggle?.addEventListener('click', () => {
  const opened = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Abrir menu');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('[data-placeholder-email]')?.addEventListener('click', (event) => {
  event.preventDefault();
  alert('Este site é uma demonstração. Substitua contato@exemplo.com pelo e-mail oficial da PraTI no arquivo index.html.');
});
