//Esta clase no se usa, se usa moments en su lugar
export function initCarousel(){
  let index = 0;
  const images = document.querySelectorAll('.carousel img');

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000);
}
