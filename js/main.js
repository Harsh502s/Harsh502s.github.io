/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach((n) => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        
        if(navItem) {
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive, { passive: true });

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 800,
    delay: 200,
    reset: false,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
});

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 100, origin: 'top' });
sr.reveal('.home__subtitle', { delay: 200, origin: 'top' });
sr.reveal('.home__actions .btn--primary', { delay: 300 });
sr.reveal('.social-icon', { interval: 100, delay: 400 });

/*SCROLL ABOUT*/
sr.reveal('.about__img-wrapper', { origin: 'left' });
sr.reveal('.about__text', { interval: 150, origin: 'right' });
sr.reveal('.section-title', { origin: 'top', delay: 100 });

/*SCROLL SKILLS*/
sr.reveal('.skill-tile', { interval: 100 });

/*SCROLL PROJECTS*/
sr.reveal('.projects-grid > .project-card', { interval: 150 });

/*SCROLL CONTACT*/
sr.reveal('.contact-card', { interval: 150 });

/*===== SHOW MORE PROJECTS =====*/
const showMoreBtn = document.getElementById('showMoreBtn');
const extraCards = document.querySelectorAll('.project-card--hidden');

if (showMoreBtn && extraCards.length) {
    showMoreBtn.addEventListener('click', () => {
        const isOpen = extraCards[0].classList.contains('show');

        extraCards.forEach(card => {
            card.classList.toggle('show');
        });

        showMoreBtn.textContent = isOpen ? 'Show More' : 'Show Less';
    });
}

