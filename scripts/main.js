// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

const themeToggle = document.querySelector('#theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function activeTheme() {
  return document.documentElement.dataset.theme || (systemTheme.matches ? 'dark' : 'light');
}

function updateThemeToggle() {
  const isDark = activeTheme() === 'dark';
  const icon = themeToggle.querySelector('i');

  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
  const nextTheme = activeTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeToggle();
});

systemTheme.addEventListener('change', updateThemeToggle);
updateThemeToggle();
