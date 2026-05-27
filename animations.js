document.addEventListener("DOMContentLoaded", () => {
    initStickyHeader();
    initScrollReveal();
    initCardHoverEffects();
});

function initStickyHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    header.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-md', 'backdrop-blur-md', 'bg-white/90');
            header.style.paddingTop = '8px';
            header.style.paddingBottom = '8px';
        } else {
            header.classList.remove('shadow-md', 'backdrop-blur-md', 'bg-white/90');
            header.style.paddingTop = '';
            header.style.paddingBottom = '';
        }
    });
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.bento-grid > div, section, footer');
    if (revealElements.length === 0) return;

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.02,
        rootMargin: "0px 0px -10px 0px"
    });

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(15px)";
        element.style.transition = "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
        revealObserver.observe(element);
    });
}

function initCardHoverEffects() {
    const interactiveElements = document.querySelectorAll('.bento-grid > div, .grid-cols-2 > div, button, .cursor-pointer');

    interactiveElements.forEach(el => {
        if (el.classList.contains('md:col-span-4') || el.querySelector('input')) return;

        el.style.transition = "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1)";

        el.addEventListener('mouseenter', () => {
            if (el.tagName === 'BUTTON') {
                el.style.transform = "translateY(-1.5px)";
            } else {
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 12px 30px rgba(0, 85, 112, 0.05)";
            }
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "";
        });
    });
}