//Esta clase no se usa, se usa albúm en su lugar
export function initBook() {
  const pages = document.querySelectorAll('.page');

  pages.forEach((page, i) => {
    page.addEventListener('click', () => {
      page.classList.toggle('flipped');
    });
  });
}
