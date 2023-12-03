document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.parallax-section');

    sections.forEach((section, index) => {
        const nextSection = sections[index + 1];
        const rect = section.getBoundingClientRect();

        // Adding a console.log to see the top value of the current section
        console.log('Current section top:', rect.top);

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Parallax effect for image
            section.querySelector('img').style.transform = `translateY(${rect.top * 0.5}px)`;

            // Text animation
            if (nextSection) {
                const nextText = nextSection.querySelector('p');
                nextText.style.top = `${100 - (rect.bottom / window.innerHeight) * 100}%`;

                // Optional: Log the top value of the next text
                console.log('Next text top:', nextText.style.top);
            }
        }
    });
});