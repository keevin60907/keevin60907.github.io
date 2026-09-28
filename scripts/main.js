// Animations are optional so the rest of the page remains functional if they fail to load.
if (window.AOS) {
  AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
  });
}

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

if (systemTheme.addEventListener) {
  systemTheme.addEventListener('change', () => {
    if (!document.documentElement.dataset.theme) window.updateThemeToggle();
  });
}

window.updateThemeToggle();
