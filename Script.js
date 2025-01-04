// Select all anchor links in navigation
const links = document.querySelectorAll('nav a');

// Attach click event to each link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Get the target section ID
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Add visible class when navigating directly
        setTimeout(() => {
            targetSection.classList.add('visible');
        }, 1100);  // Delay to ensure smooth scroll before animation triggers
    });
});




/* ---------------------------------------------------------------------------- */

/* About Section */
function typingEffect({ elementId, fullText, stopAt, speed, pause }) {
    const element = document.getElementById(elementId);
    let text = "";
    let isDeleting = false;
    let i = 0;

    function type() {
        if (isDeleting) {
            // Delete only up to the specified stopping point
            i = Math.max(stopAt, i - 1);
        } else {
            // Type until the full text is reached
            i = Math.min(fullText.length, i + 1);
        }

        text = fullText.substring(0, i);
        element.textContent = text;

        if (!isDeleting && i === fullText.length) {
            setTimeout(() => (isDeleting = true), pause);
        } else if (isDeleting && i === stopAt) {
            setTimeout(() => (isDeleting = false), pause);
        }

        setTimeout(type, speed);
    }

    type();
}

document.addEventListener("DOMContentLoaded", () => {
    typingEffect({
        elementId: "about-typing",
        fullText: "About Me...",
        stopAt: 1, // Stop deleting at "A"
        speed: 100,
        pause: 1000,
    });

    typingEffect({
        elementId: "skills-typing",
        fullText: "Skills",
        stopAt: 1, // Stop deleting at "S"
        speed: 100,
        pause: 1000,
    });
});   






/* ---------------------------------------------------------------------------- */

// JavaScript to detect scroll and apply animations
document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".skills-box, .about-text, #projects, .contact-info-container, .section__text__p1, .title");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.7 }); 

    elementsToAnimate.forEach((element) => {
        element.classList.add("hidden"); // Initially hidden
        observer.observe(element); // Observe the element
    });
});  





/* ---------------------------------------------------------------------------- */

// JavaScript to detect scroll and apply animations
document.addEventListener("DOMContentLoaded", function () {
    // Select the education section and timeline-related items
    const educationSection = document.getElementById('education');
    const timelineItems = document.querySelectorAll('.timeline, .timeline-item, .timeline-point');

    // Create an intersection observer to detect when the education section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the section becomes visible, start the animation for timeline items
                timelineItems.forEach(item => {
                    item.style.animationPlayState = 'running'; // Unpause animations
                });
            } else {
                // Pause the animation when the section is not in view
                timelineItems.forEach(item => {
                    item.style.animationPlayState = 'paused'; // Pause animations
                });
            }
        });
    }, { threshold: 0.2 }); // Trigger when 50% of the section is visible

    // Initially set the timeline items to be paused
    timelineItems.forEach((item) => {
        item.style.animationPlayState = 'paused'; // Pause animation initially
    });

    // Observe the education section
    observer.observe(educationSection);
});

