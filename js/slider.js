// export const initTestimonialCarousel = () => {
//     const left_arrow = document.getElementById('left-arrow');
//     const right_arrow = document.getElementById('right-arrow');
//     const tst = document.querySelector('.tst');


//     left_arrow.addEventListener('click', () => {
//         tst.scrollBy({ left: -300, behavior: "smooth" });
//     });


//     right_arrow.addEventListener('click',  () => {
//         tst.scrollBy({ left: 300, behavior: "smooth"});
//     });
// };



export const initTestimonialCarousel = () => {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const track = document.querySelector('.testimonial-cards');
    const cards = document.querySelectorAll('.testimonial-card');
    const navStars = document.querySelectorAll('.nav-stars img');

    let currentIndex = 0;

    const updateCarousel = () => {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(track).gap) || 0;

        const offset = -(currentIndex * (cardWidth + gap));

        track.style.transform = `translateX(${offset}px)`;

        navStars.forEach((star, idx) => {
            star.src = idx === currentIndex
                ? 'images/select_star.png'
                : 'images/unselect_star.png';
        });
    };

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % navStars.length;
        updateCarousel();
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + navStars.length) % navStars.length;
        updateCarousel();
    });

    navStars.forEach((star, idx) => {
        star.style.cursor = "pointer";
        star.addEventListener('click', () => {
            currentIndex = idx;
            updateCarousel();
        });
    });

    updateCarousel();
};
