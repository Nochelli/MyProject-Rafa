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
  
  setInterval(nextSlide, 3000);
  
  document.querySelector('.prev').addEventListener('click', prevSlide);
 document.querySelector('.next').addEventListener('click', nextSlide);
  });