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

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 650,
    reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 100 });
sr.reveal('.home__subtitle', { delay: 150 });
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 300 });
sr.reveal('.home__social-icon', { interval: 150 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 100 });
sr.reveal('.about__subtitle', { delay: 300 });
sr.reveal('.about__text', { delay: 300 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { delay: 100 });
sr.reveal('.skills__text', { delay: 100 });
sr.reveal('.skills__data', { interval: 30 });
sr.reveal('.skills__img', { delay: 5 });

/*SCROLL PROJECTS*/
sr.reveal('.project-content', { interval: 30 });
sr.reveal('.project-grid', { interval: 30 });
sr.reveal('.pro__img', { interval: 70 });
sr.reveal('.pro__text', { interval: 30 });
sr.reveal('.stack', { interval: 5 });
sr.reveal('.links', { interval: 5 });

/*SCROLL CONTACT*/
sr.reveal('.contact__box', { interval: 30 });