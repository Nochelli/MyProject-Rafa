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

    function updateImageSource() {
        const isMobile = window.innerWidth <= 480;
        const pictureElements = document.querySelectorAll('.carousel-item picture');
    
        pictureElements.forEach(function(pictureElement) {
            const sourceElement = pictureElement.querySelector('source');
            const imgElement = pictureElement.querySelector('img');
    
            if (isMobile && sourceElement.getAttribute('data-mobile-srcset')) {
                imgElement.srcset = sourceElement.getAttribute('data-mobile-srcset');
            } else {
                imgElement.srcset = sourceElement.getAttribute('srcset');
            }
        });
    }

    // Atualizar as imagens na inicialização
    updateImageSource();

    // Atualizar as imagens sempre que a janela for redimensionada
    window.addEventListener('resize', updateImageSource);

    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
    carousel.addEventListener('touchstart', startTouch);
    carousel.addEventListener('touchend', endTouch);
});
// carrosel

// script hidden and show
const myObserver = new IntersectionObserver(  (entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
         } else {
            entry.target.classList.remove('show')
         }
        })
    })
    
    const elements = document.querySelectorAll('.hidden')
    
    elements.forEach( (element) => myObserver.observe(element))
    // script hidden and show




    function updateCarousel() {
        const isMobile = window.innerWidth <= 480;
        const images = document.querySelectorAll('.carousel-item img');
    
        images.forEach(image => {
            const src = isMobile ? image.dataset.mobileSrc : image.dataset.src;
            if (src) {
                image.src = src;
            }
        });
    }
    
    // Chama a função para atualizar o carousel quando a largura da tela é alterada
    window.addEventListener('resize', updateCarousel);
    
    // Chama a função para atualizar o carousel quando a página é carregada
    window.addEventListener('load', updateCarousel);