                // Adicionar efeito de rolagem suave ao clicar nos links do menu
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                
                        document.querySelector(this.getAttribute('href')).scrollIntoView({
                            behavior: 'smooth'
                        });
                    });
                });
 //slide
                const slides = document.querySelectorAll('.slide');

                let currentSlide = 0;
                const slideInterval = setInterval(nextSlide, 3000); // Altere a duração do intervalo conforme necessário
                
                function nextSlide() {
                  slides[currentSlide].classList.remove('active');
                  currentSlide = (currentSlide + 1) % slides.length;
                  slides[currentSlide].classList.add('active');
                }
                
               
//slide