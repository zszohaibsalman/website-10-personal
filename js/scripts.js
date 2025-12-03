// Efficient Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    // Toggle icon
    if(menu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Sticky Nav Optimization with Throttling for Performance
const nav = document.querySelector('nav');
let lastScrollY = window.scrollY;
let ticking = false;

function updateNav() {
    if (window.scrollY > 10) {
        nav.classList.add('shadow-lg', 'bg-white/95');
        nav.classList.remove('bg-white/90');
    } else {
        nav.classList.remove('shadow-lg', 'bg-white/95');
        nav.classList.add('bg-white/90');
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
    }
});