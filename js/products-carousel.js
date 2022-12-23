(function () {

    const slides = [
        '<div class="slide"><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
        '<div class="slide"><img src="img/banana.svg" alt="Banana"></div>',
        '<div class="slide"><img src="img/girl.svg" alt="Girl"></div>',
        '<div class="slide"><img src="img/viking.svg" alt="Viking"></div>',
    ]

    let currentSlideIdx = 0;

    function renderSlide() {
        const slideContainer = document.querySelector('.main-products__carousel .carousel__slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function showSlide(idx) {
        currentSlideIdx = idx;
        renderSlide();
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlide();
    }

    function prevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlide();
    }

    setInterval(nextSlide, 3000);

    renderSlide();

    const btnNext = document.querySelector('.main-products__carousel .carousel__next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.main-products__carousel .carousel__prev');
    btnPrev.addEventListener('click', prevSlide);

    function createIndicators() {
        const indicatorsContainer = document.querySelector('.main-products__carousel .carousel__indicators');
        for (const slide of slides) {
            indicatorsContainer.innerHTML += '<button class="carousel__indicator">◉</button>';
        }
        const indicators = document.querySelectorAll('.main-products__carousel .carousel__indicator');
        for (let i = 0; i < slides.length; i++) {
            indicators[i].addEventListener('click', () => showSlide(i) )
        }
    }

    createIndicators();

    window.addEventListener('resize', renderSlide);
})();