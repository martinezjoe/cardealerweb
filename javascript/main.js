
// Mostrar menu 

const navMenu = document.getElementById('nav-menu');

const navClose = document.getElementById('nav-close'); 

const navToggle = document.getElementById('nav-toggle');

    

// Usamos el condicional para validar si la constante existe 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
};

// Para esconder el menú 

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
};

//----------------------------------------------------

// Eliminamos el menu en movil, esto es que cuando le damos click a un enlace, automaticamente el menu se cierra

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link=> link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));


// -------------------------------------------------

// Cambiar el color del backgroud de la barra de navegacion

const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Cuando la vista supere 50 vh, entonces se cambia el color del background de la barra de nav.
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
};


window.addEventListener('scroll', scrollHeader);



//---------------------------------------------------------
// Popular Swiper 

let swiperPopular = new Swiper (".popular__container", {
    loop: true,
    spaceBetween:24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
    },
});


// ----------------------------------------------

// Mixitup Filter Featured

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card '
    },
    animation: {
        duration: 300
    }
});

// Link active featured

const linkFeatured = document.querySelectorAll('.featured__item');

function activeWork() {
    linkFeatured.forEach(link => {
        link.classList.remove('active-featured');
    });
    this.classList.add('active-featured');
};

linkFeatured.forEach((link) => {
    link.addEventListener('click', activeWork);
});

// ---------------------------------------------------------

// Mostrar el Scroll Up

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
    // Cuando el scroll sea mayor a 350 vh se mostrara el Scroll Up
	this.scrollY >= 250 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


//------------------------------------------------

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};

window.addEventListener('scroll', scrollActive);

// ------------------------------------------------------

// Animacion Scroll Reveal

const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home__title, .popular__container, .features__img, .featured__filters');
sr.reveal('.home__subtitle', {delay:500});
sr.reveal('.home__elect', {delay:600});
sr.reveal('.home__img', {delay:800});
sr.reveal('.home__car-data', {delay:900, interval: 100, origin: 'bottom'});
sr.reveal('.home__button', {delay:1000, origin: 'bottom'});
sr.reveal('.about__group, .offer__data', {origin: 'left'});
sr.reveal('.about__data, .offer__img', {origin: 'right'});
sr.reveal('.features__map', {delay: 600, origin: 'bottom'});
sr.reveal('.features__card', {interval: 300});
sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100});



