const sections = document.querySelectorAll('section');
const imgs = document.querySelectorAll('img');


window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        const pulse = document.querySelector('.pulse');
        const heatOverlay = document.querySelector('.overlay-image');
        const transitionOffset = 100;

        if (scrollPosition + transitionOffset >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            imgs.forEach(img => {
                img.classList.remove('active');
                if (section.getAttribute('id') === img.getAttribute('href').substring(1)) {
                    img.classList.add('active');
                }
                if (section.getAttribute('id') === 'section3'){
                    heatOverlay.style.opacity = '1';
                }else{
                    heatOverlay.style.opacity = '0';
                }
                if (section.getAttribute('id') === 'section4' || section.getAttribute('id') === 'section5') {
                    pulse.style.opacity = '1';
                }else{
                    pulse.style.opacity = "0";
                }
            });
        }
    });
});


// window.addEventListener('scroll', () => {
//     sections.forEach((section, index) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const scrollPosition = window.scrollY;

//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//             imgs.forEach(img => img.classList.remove('active'));
//             imgs[index].classList.add('active');
//         }
//     });
// });
