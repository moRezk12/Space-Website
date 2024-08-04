/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),  
        navClose = document.getElementById('nav-close');  
        

/* Menu Show */
if(navToggle){
    navToggle.addEventListener('click' , () => {
        navMenu.classList.add('show-menu');
        
    })
}

/* Menu Hidden */
if(navToggle){
    navClose.addEventListener('click' , () => {
        navMenu.classList.remove('show-menu');
    })
}  

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () => {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click' , linkAction ));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    this.scrollY > 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')  
}
window.addEventListener('scroll' , blurHeader );

/*=============== SWIPER PLANETS ===============*/ 
const swiperTravel = new Swiper('.travel-swiper' , {
    // direction: 'vertical' ,
    // navigation : {
    //     nextEl: 'swiper-button-next',
    //     prevEl: 'swiper-button-prev',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    loop : true ,
    spaceBetween: '32' ,
    grapCursor: true,
    slidesPerView: 'auto' ,
    centeredSlider: 'auto',
    pagination: {
        el : '.swiper-pagination' ,
        clickable: true ,
    },
    breakpoints: {
        600 : {
            slidesPerView : 2 ,
        },
        900 : {
            slidesPerView : 3 ,
        },
    }
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') :
                            scrollup.classList.remove('show-scroll');
}
window.addEventListener('scroll' , scrollUp) ;
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight ,
                sectionTop = current.offsetTop - 58 ,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']' );
        if(scrollDown > sectionTop && scrollDown <= screenTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else {
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll' , scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin : 'top',
    distance: '80px',
    duration : 2500 ,
    delay : 300 ,
    reset : true
})

sr.reveal(`.home-data , .travel-swiper , .contact-form` )
sr.reveal(`.home-img` , {origin : 'bottom'})
sr.reveal(`.home-ovni` , {delay : 800})
sr.reveal(`.explore-img` , {origin : 'left'})
sr.reveal(`.explore-data` , {origin : 'right'})
sr.reveal(`.explore-planet` , {origin : 'right' , delay : 800})
sr.reveal(`.history-card` , {interval : 800})
sr.reveal(`.history-planet-1` , {origin : 'left' , delay : 1000})
sr.reveal(`.history-planet-2` , {origin : 'right' , delay : 1200})
sr.reveal(`.footer-planet-1` , {origin : 'bottom' , delay : 600} )
sr.reveal(`.footer-planet-2` , { delay : 800} )