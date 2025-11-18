export const initSlider = () => {
    const left_arrow = document.getElementById('left-arrow');
    const right_arrow = document.getElementById('right-arrow');
    const tst = document.querySelector('.tst');


    left_arrow.addEventListener('click', () => {
        tst.scrollBy({ left: -300, behavior: "smooth" });
    });


    right_arrow.addEventListener('click',  () => {
        tst.scrollBy({ left: 300, behavior: "smooth"});
    });
};