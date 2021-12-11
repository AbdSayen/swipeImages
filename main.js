let slides = document.querySelectorAll('.slide');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');

let index = 0;
let slideSelector = document.querySelector('.slide-selector');
let slidesSelectors;

const SelectSlide = id => {
    console.log(id);

    index = id;

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slidesSelectors.forEach((slidesSelectors) => {
        slidesSelectors.classList.remove('active');
    });

    slides[index].classList.add('active');
    slidesSelectors[index].classList.add('active');
}

const createSelector = () => {
    for (let index = 0; index < slides.length; index++) {
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.setAttribute('data-id', index);

        slideSelector.appendChild(circle);
    }
    slidesSelectors = document.querySelectorAll('.circle');
    slidesSelectors[0].classList.add('active');
}

const swipeNext = () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slidesSelectors.forEach((slidesSelectors) => {
        slidesSelectors.classList.remove('active');
    });


    slides[index].classList.add('active');
    slidesSelectors[index].classList.add('active');
}

const swipePrev = () => {
    index--;
    if (index == -1) {
        index = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slidesSelectors.forEach((slidesSelectors) => {
        slidesSelectors.classList.remove('active');
    });


    slides[index].classList.add('active');
    slidesSelectors[index].classList.add('active');
}

createSelector();

slidesSelectors.forEach(circle => {
    circle.addEventListener('click', () => SelectSlide(circle.getAttribute('data-id')));
});

nextBtn.addEventListener('click', swipeNext);
prevBtn.addEventListener('click', swipePrev);