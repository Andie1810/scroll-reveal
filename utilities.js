window.onload = function() {
    ScrollReveal().reveal('.photo1', {
    delay: 500,
    distance: '80px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
    origin: 'bottom',
    });

    ScrollReveal().reveal('.photo2', {
    delay: 1500,
    distance: '120px',
    duration: 600,
    opacity: 0,
    origin: 'left',
    });

    ScrollReveal().reveal('.photo3', {
    delay: 500,
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    opacity: 0,
    scale: 0.7,
    viewFactor: 0.3,
    });

    ScrollReveal().reveal('.photo4', {
    delay: 750,
    distance: '100px',
    duration: 900,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 10,
    }
    });

    ScrollReveal().reveal('.photo5', {
    delay: 500,
    distance: '150px',
    duration: 1000,
    opacity: 0,
    origin: 'right',
    useDelay: 'always',
    viewFactor: 0.4
    });
};