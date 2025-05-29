const button = document.getElementById('toogle-mode');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem(
    'mode',
    document.body.classList.contains('dark-mode') ? 'dark' : 'light'
  );
});

// Quando a página carrega, aplica o tema salvo
if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark-mode');
}
