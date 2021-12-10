let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

let index = 0;

const swipeNext = () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add('active');
    showSlide();
}

const swipePrev = () => {
    index--;
    if (index == -1) {
        index = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add('active');
    showSlide();
}

nextBtn.addEventListener('click', swipeNext);
prevBtn.addEventListener('click', swipePrev);