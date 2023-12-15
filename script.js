const sections = document.querySelectorAll('section');
const imgs = document.querySelectorAll('img');
const backTopBtn = document.getElementById('back-to-top-btn');
const image1 = document.querySelector('.image1');


// backTopBtn.addEventListener('click', function() {
//     imgs.forEach(img => {
//         img.classList.remove('active');
//     });
//     image1.classList.add('active');
//     section.getAttribute('id') === 'section0';
//     rainOverlay.style.opacity = '0';
//     whiteBg.style.opacity="0";
//     pulse.style.opacity = "0";
//     heatOverlay.style.opacity = '0';
// });

function checkVisibility() {
    sections.forEach(section => {
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY;
                const pulse = document.querySelector('.pulse');
                const heatOverlay = document.querySelector('.heat-overlay-image');
                const roofOverlay = document.querySelector('.roof-overlay-image');
                const rainOverlay = document.querySelector('.rain-overlay');
                const image1 = document.querySelector('.image1');
                const whiteBg =document.querySelector('.white-bg');
                const transitionOffset = 100;
                
        
                if (scrollPosition + transitionOffset >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            
                    imgs.forEach(img => {
                        img.classList.remove('active');
                        if (section.getAttribute('id') === img.getAttribute('href').substring(1)) {
                            img.classList.add('active');
                        }
                        if (section.getAttribute('id') === 'section0'){
                            backTopBtn.style.opacity = "0";
                        }else{
                            backTopBtn.style.opacity = "1";
                        }
                         if (section.getAttribute('id') === 'section1'){
                            rainOverlay.style.opacity = '1';
                        } else{
                            rainOverlay.style.opacity = '0';
                        }

                        if (section.getAttribute('id') === 'section3') {
                            heatOverlay.style.opacity = '1';
                        } else {
                            heatOverlay.style.opacity = '0';
                        }
                        if (section.getAttribute('id') === 'section4' || section.getAttribute('id') === 'section5') {
                            pulse.style.opacity = '1';
                        } else {
                            pulse.style.opacity = "0";
                        }
                        if (section.getAttribute('id') === 'section7' || section.getAttribute('id') === 'section8') {
                            roofOverlay.style.opacity = '.8';
                            image1.style.opacity="0";
                            whiteBg.style.opacity="1";
                        } else {
                            roofOverlay.style.opacity = '0';
                            image1.style.opacity="1";
                            whiteBg.style.opacity="0";
                        }

                    });
                }
            });
        });
    });
}

window.addEventListener('scroll', checkVisibility);

checkVisibility();
