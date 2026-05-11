export function initScroll(){
  const elements = document.querySelectorAll('.card');

  function showOnScroll() {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', showOnScroll);
}
