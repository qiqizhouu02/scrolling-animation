const sections = document.querySelectorAll('section');
const imgs = document.querySelectorAll('img');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            imgs.forEach(img => {
                img.classList.remove('active');
                if (section.getAttribute('id') === img.getAttribute('href').substring(1)) {
                    img.classList.add('active');
                }
            });
        }
    });
});

