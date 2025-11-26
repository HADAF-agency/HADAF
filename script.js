document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        });
    }

    // Fade-in animation for sections
    const sections = document.querySelectorAll('#pourquoi-chine, #about, #services, #programmes, #temoignages, #tarifs, #contact-cta, #contact, .about, .services, .testimonials, .contact');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Slide-in animations for elements
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    slideLeftElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        slideObserver.observe(el);
    });

    slideRightElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        slideObserver.observe(el);
    });

    // Page transition animations
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Fade out on link click
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.href !== window.location.href && !link.href.startsWith('#')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = link.href;
                }, 500);
            }
        });
    });
});
