                // Adicionar efeito de rolagem suave ao clicar nos links do menu
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });

// carrosel
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const totalItems = carouselItems.length;
  let currentIndex = 0;
  let startX = 0;

  function moveToSlide(index) {
      currentIndex = index;
      const translateValue = -index * 100 + '%';
      carousel.style.transform = `translateX(${translateValue})`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      moveToSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      moveToSlide(currentIndex);
  }

  function startTouch(e) {
      startX = e.touches[0].clientX;
  }

  function endTouch(e) {
      const endX = e.changedTouches[0].clientX;
      const difference = startX - endX;
      if (difference > 50) {
          nextSlide();
      } else if (difference < -50) {
          prevSlide();
      }
  }

  setInterval(nextSlide, 3000);

  document.querySelector('.prev').addEventListener('click', prevSlide);
  document.querySelector('.next').addEventListener('click', nextSlide);
  carousel.addEventListener('touchstart', startTouch);
  carousel.addEventListener('touchend', endTouch);
});