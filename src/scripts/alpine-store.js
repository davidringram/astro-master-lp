// src/scripts/alpine-store.js

document.addEventListener('alpine:init', () => {
    Alpine.store('ui', {
        mobileMenuOpen: false,
        scrolled: false,
        
        // Toast State
        toast: {
            show: false,
            message: '',
            display(msg) {
                console.log("Toaster received:", msg); // Add this line to debug!
                this.message = msg;
                this.show = true;
                setTimeout(() => { this.show = false }, 3000);
            }
        },

        // Menu Actions
        toggleMenu() { 
            this.mobileMenuOpen = !this.mobileMenuOpen;
            document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : 'auto';
        },
        
        closeMenu() { 
            this.mobileMenuOpen = false;
            document.body.style.overflow = 'auto';
        },

        // Scroll Logic
        updateScroll() {
            this.scrolled = window.pageYOffset > 50;
        },

        // Intersection Observer for Animations
        intersect(el) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.classList.add('reveal-visible');
                        observer.unobserve(el);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(el);
        }   
    });
});