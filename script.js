document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Form submission (you'll need to add your own backend logic)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For now, we'll just log it to the console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show a success message (you can replace this with your own logic)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}); 