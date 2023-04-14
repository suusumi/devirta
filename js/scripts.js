// Получение элемента, на котором будет происходить параллакс-эффект
const parallax = document.querySelector('.parallax');

window.addEventListener('mousemove', (e) => {
  // Координаты мыши в процентах по горизонтали и вертикали
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  // Вычисление координаты смещения изображения
  let offsetX = -x * 20;
  let offsetY = -y * 20;

  // Плавное перемещение изображения с помощью transition
  parallax.style.transition = 'transform 0.2s';
  parallax.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Добавление обработчика события mouseout для возврата изображения в исходное положение
parallax.addEventListener('mouseout', () => {
  parallax.style.transform = 'translate(0, 0)';
});

// OLD FAST VERSION
// const parallax = document.querySelector('.parallax');

// window.addEventListener('mousemove', (e) => {
//   let x = e.clientX / window.innerWidth;
//   let y = e.clientY / window.innerHeight;
//   parallax.style.transform = 'translate3d(' + (-x * 50) + 'px,' + (-y * 50) + 'px,0)';
// });

const fadeInElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  for (let i = 0; i < fadeInElements.length; i++) {
    const element = fadeInElements[i];
    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      element.classList.add('fade-in-show');
    }
  }
}

window.addEventListener('scroll', checkFadeIn);


const cardHeaders = document.querySelectorAll('.card-header');

cardHeaders.forEach(cardHeader => {
  cardHeader.addEventListener('click', () => {
    const cardBody = cardHeader.nextElementSibling;
    cardBody.style.display = cardBody.style.display === 'block' ? 'none' : 'block';
  });
});



