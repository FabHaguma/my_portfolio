// Simple script for active navigation link highlighting on scroll

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]'); // Select sections with IDs
    const navLinks = document.querySelectorAll('header nav ul li a');

    const activateLink = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches the section id
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    };

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.4 // Percentage of section visible (adjust as needed)
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When a section is intersecting (visible enough)
                activateLink(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Optional: Handle initial load - activate link for the section in view
    // Find the first visible section on load more accurately if needed,
    // or just default to 'home' if the top is visible.
    setTimeout(() => { // Use timeout to ensure layout is stable
         let currentSectionId = 'home'; // Default
         for (let section of sections) {
             const rect = section.getBoundingClientRect();
             // Check if section top is within a reasonable range from viewport top
             if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
                  currentSectionId = section.id;
                  break;
             }
         }
         activateLink(currentSectionId);
    }, 100);


    // --- Contact Form Handling (Placeholder) ---
    // const contactForm = document.getElementById('contact-form');
    // if (contactForm) {
    //     contactForm.addEventListener('submit', (event) => {
    //         event.preventDefault(); // Prevent the default form submission

            // --- IMPORTANT ---
            // This is where you would typically send the form data.
            // Since we are only using HTML/CSS/JS without a backend,
            // we will just log it to the console and show an alert.
            // For a real site, replace this with an AJAX call to your backend
            // or a service like Formspree.
            // -----------------

            // const formData = new FormData(contactForm);
            // const name = formData.get('name');
            // const email = formData.get('email');
            // const message = formData.get('message');

            // console.log('Form Submitted (Not Sent):');
            // console.log('Name:', name);
            // console.log('Email:', email);
            // console.log('Message:', message);

            // alert('Thank you for your message, ' + name + '! (Note: This form is currently a demo and did not send an email.)');

            // Optional: Clear the form fields after "submission"
            // contactForm.reset();
        // });
    // }

});