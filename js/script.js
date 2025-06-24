// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
            
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
                
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
            
    // Simple form validation and submission
    const formData = new FormData(this);
            
    // Show success message
    const button = this.querySelector('.submit-button');
    const originalText = button.textContent;
    button.textContent = 'Message Sent!';
    button.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
            
    // Reset form
    this.reset();
            
    // Reset button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
        }, 3000);
});

// Add dynamic typing effect to hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
            
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
            
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
});

// Add floating animation to skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.style.animation = 'fadeInUp 0.8s ease-out forwards';
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
            
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});
