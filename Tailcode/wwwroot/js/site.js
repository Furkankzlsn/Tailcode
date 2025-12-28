// Tailcode - Site JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle with Overlay
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');
    const navbarOverlay = document.getElementById('navbarOverlay');

    function openMobileMenu() {
        navbarNav.classList.add('active');
        navbarToggle.classList.add('active');
        if (navbarOverlay) navbarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        navbarNav.classList.remove('active');
        navbarToggle.classList.remove('active');
        if (navbarOverlay) navbarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (navbarToggle && navbarNav) {
        navbarToggle.addEventListener('click', function () {
            if (navbarNav.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close menu when clicking overlay
    if (navbarOverlay) {
        navbarOverlay.addEventListener('click', closeMobileMenu);
    }

    // Close menu when clicking a nav link (for same-page navigation)
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Form validation feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>Gönderiliyor...</span>';
            }
        });
    });

    // Handle window resize - close menu if resized to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Escape key to close menu
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navbarNav && navbarNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
