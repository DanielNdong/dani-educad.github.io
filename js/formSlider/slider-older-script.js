
let moveRight = 0;
let moveLeft = 0;
const SCROLL = document.querySelector('.register__form__scroll')
let CURRENT_WIDTH_SCREEN = 0;
window.addEventListener('resize', () => {
    CURRENT_WIDTH_SCREEN = window.innerWidth;
    console.log('Esta variable esta dentro',CURRENT_WIDTH_SCREEN)
})
console.log('Esta variable esta fuera',CURRENT_WIDTH_SCREEN)




/* Las distancias a las que se hará scroll dependiendo del width del dispositivo */
const SCROLL_DISTANCE = {
    xsMobile: 301,
    Mobile: 310,
    smMobile: 323,
    mdMobile: 362,
    lgMobile: 417,
    iphone12: 345 - 12,/* el 12 el del padding que tiene el sections */
    xsTablet: 480,
    smTablet: 560,
    ipadMini: 718,
    mdTablet: 418,
    ipadAir: 730,
    ipadPro: 749,
    ipad: 726,
    lgTablet: 418,
    tablet: 682,
    xsDesktop: 761,
};
/* Los tamaños de pantalla que capturamos para el responsive */
const WINDOW_WIDTH = {
    xsMobile: 350,
    Mobile: 360,
    smMobile: 380,
    mdMobile: 430,
    lgMobile: 490,
    iphone12: 390,
    xsTablet: 500,
    smTablet: 600,
    ipadMini: 768,
    mdTablet: 800,
    ipad: 810,
    ipadAir: 820,
    ipadPro: 834,
    lgTablet: 835,
    xsDesktop: 1060,
 };
 
let prevBtn = document.querySelectorAll('.prev')
prevBtn.forEach((prev) => {
    prev.addEventListener('click', function () {
         if (window.innerWidth <= WINDOW_WIDTH.xsMobile) {
            if (moveRight < 0) {
                console.log('Pantalla de <= WINDOW_WIDTH.xsMobile', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.xsMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.Mobile) {
            if (moveRight < 0) {
                console.log('Pantalla de <= WINDOW_WIDTH.Mobilepx', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.Mobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.smMobile) {
            if (moveRight < 0) {
                console.log('Pantalla de <= WINDOW_WIDTH.smMobilepx', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.smMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.iphone12) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.iphone12')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.iphone12)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.mdMobile) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.mdMobilepx')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.mdMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.lgMobile) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.lgMobilepx')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.lgMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.xsTablet) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.xsTablet')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.xsTablet)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.smTablet) {
            if (moveRight < 0) {
                 console.log('Pantalla de <=  WINDOW_WIDTH.smTablet')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.smTablet)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipadMini) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.ipadMini')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.ipadMini)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.mdTablet) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= 594')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.mdTablet)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipad) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.ipad')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.ipad)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipadAir) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.ipadAir')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.ipadAir)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipadPro) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= WINDOW_WIDTH.ipadAir')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.ipadPro)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.lgTablet) {
            if (moveRight < 0) {
                 console.log('Pantalla de <= 594')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.lgTablet)}px)`;
            }
        }
        else if (window.innerWidth <= 767) {
            if (moveRight < 0) {
                console.log('Pantalla de <= 767px')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.mobileMd)}px)`;
            }
        }
        else if (window.innerWidth >= WINDOW_WIDTH.xsDesktop) {
            if (moveRight < 0) {
                 console.log('Pantalla de >= WINDOW_WIDTH.xsDesktop')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.xsDesktop)}px)`;
            }
        }
       /*  else if (window.innerWidth >= WINDOW_WIDTH.xsDesktop) {
            if (moveRight < 0) {
                 console.log('Pantalla de >= WINDOW_WIDTH.xsDesktop')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.xsDesktop)}px)`;
            }
        }
        else if (window.innerWidth >= WINDOW_WIDTH.xsDesktop) {
            if (moveRight < 0) {
                 console.log('Pantalla de >= WINDOW_WIDTH.xsDesktop')
                SCROLL.style.transform = `translateX(${moveRight += (SCROLL_DISTANCE.xsDesktop)}px)`;
            }
        } */
    })

})

let nextBtn = document.querySelectorAll('.next')
nextBtn.forEach((next) => {
    next.addEventListener('click', function () {
        console.log(window.innerWidth)
        if (window.innerWidth <= WINDOW_WIDTH.xsMobile) {
            if (moveRight > -(SCROLL_DISTANCE.xsMobile * 4)) {
                console.log('Pantalla de <= WINDOW_WIDTH.xsMobile', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.xsMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.Mobile) {
            if (moveRight > -(SCROLL_DISTANCE.Mobile * 4)) {
                console.log('Pantalla de <= WINDOW_WIDTH.Mobile', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.Mobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.smMobile) {
            if (moveRight > -(SCROLL_DISTANCE.smMobile * 4)) {
                console.log('Pantalla de <= WINDOW_WIDTH.smMobile', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.smMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.iphone12) {
            if (moveRight > -(SCROLL_DISTANCE.iphone12 * 4)) {
                console.log('Pantalla de < WINDOW_WIDTH.iphone12',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.iphone12)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.mdMobile) {
            if (moveRight > -(SCROLL_DISTANCE.mdMobile * 4)) {
                console.log('Pantalla de <= WINDOW_WIDTH.mdMobile', window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.mdMobile)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.lgMobile) {
            if (moveRight > -(SCROLL_DISTANCE.lgMobile * 4)) {
                console.log('Pantalla de <= WINDOW_WIDTH.lgMobile',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.lgMobile)}px)`;
            }
        }
        else if (window.innerWidth <=  WINDOW_WIDTH.xsTablet) {
            if (moveRight > -(SCROLL_DISTANCE.xsTablet * 4)) {
                console.log('Pantalla de < WINDOW_WIDTH.xsTablet',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.xsTablet)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.smTablet) {
            if (moveRight > -(SCROLL_DISTANCE.smTablet * 4)) {
                console.log('Pantalla de <=  WINDOW_WIDTH.smTablet',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.smTablet)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipadMini) {
            if (moveRight > -(SCROLL_DISTANCE.ipadMini * 4)) {
                console.log('Pantalla de <=  WINDOW_WIDTH.ipadMini',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.ipadMini)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.mdTablet) {
            if (moveRight > -(SCROLL_DISTANCE.mdTablet * 4)) {
                 console.log('Pantalla de < WINDOW_WIDTH.mdTablet',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.mdTablet)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipad) {
            if (moveRight > -(SCROLL_DISTANCE.ipad * 4)) {
                 console.log('Pantalla de < WINDOW_WIDTH.ipad',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.ipad)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipadAir) {
            if (moveRight > -(SCROLL_DISTANCE.ipadAir * 4)) {
                 console.log('Pantalla de < WINDOW_WIDTH.ipadAir',window.innerWidth,moveRight)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.ipadAir)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.ipadPro) {
            if (moveRight > -(SCROLL_DISTANCE.ipadPro * 4)) {
                 console.log('Pantalla de < WINDOW_WIDTH.ipadAir',window.innerWidth,moveRight)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.ipadPro)}px)`;
            }
        }
        else if (window.innerWidth <= WINDOW_WIDTH.lgTablet) {
            if (moveRight > -(SCROLL_DISTANCE.lgTablet * 4)) {
                console.log('Pantalla de < WINDOW_WIDTH.lgTablet',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.lgTablet)}px)`;
            }
        }
        else if (window.innerWidth >= WINDOW_WIDTH.xsDesktop) {
            if (moveRight > -(SCROLL_DISTANCE.xsDesktop * 4)) {
                console.log('Pantalla de >= 1024px',window.innerWidth)
                SCROLL.style.transform = `translateX(${moveRight -= (SCROLL_DISTANCE.xsDesktop)}px)`;
            }
        }
    })
})
