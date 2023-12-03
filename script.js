console.log("Script is running");

document.addEventListener("DOMContentLoaded", function() {
    const parallaxImages = document.querySelectorAll('.parallax-image');
    const parallaxTexts = document.querySelectorAll('.parallax-text');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        parallaxImages.forEach((image, index) => {
            const offset = index * 100; // Adjust the offset as needed
            const opacity = 1 - (scrollY - offset) / 800; // Adjust the divisor as needed

            image.style.opacity = opacity.toFixed(2);

            // Parallax effect for the image
            image.style.transform = `translateY(${-(scrollY - offset) * 0.2}px)`;
        });

        parallaxTexts.forEach((text, index) => {
            const textOffset = (scrollY - index * 800) * 0.2; // Adjust the multiplier as needed
            text.style.bottom = `${-100 + textOffset}px`;
        });
    });
});