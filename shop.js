// Image slider
window.onload = function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showslide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(-${index * 100}%)`;
        }
        index = (index + 1) % slides.length;
    }

    setInterval(showslide, 3000);
};