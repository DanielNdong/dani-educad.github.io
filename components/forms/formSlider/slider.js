
let moveRight = 0;
let moveLeft = 0;
const rootCSS = document.documentElement
const SCROLL = document.querySelector('.register__form__scroll')
const CURRENT_WIDTH_SCREEN = window.innerWidth;
const SCROLL_DISTANCE = {
    smMobile: 309,
    mobile: 460,
    tablet: 682,
    desktop: 722,
}
let linkNext = document.querySelectorAll('.prev')
linkNext.forEach((link)=> {
    link.addEventListener('click', function(){
        if(CURRENT_WIDTH_SCREEN < 380) {
            if(moveRight < 0){
                SCROLL.style.transform=`translateX(${ moveRight += (SCROLL_DISTANCE.smMobile) }px)`;
            }
        }
      else if(CURRENT_WIDTH_SCREEN < 500) {
       if(moveRight < 0){
        SCROLL.style.transform=`translateX(${ moveRight += (SCROLL_DISTANCE.mobile) }px)`;
       }
    }
     else if(CURRENT_WIDTH_SCREEN < 767) {
        if(moveRight < 0){
            SCROLL.style.transform=`translateX(${ moveRight += (SCROLL_DISTANCE.tablet) }px)`;
           }
    }
      else if(CURRENT_WIDTH_SCREEN >= 1024) {
        if(moveRight < 0){
            SCROLL.style.transform=`translateX(${ moveRight += (SCROLL_DISTANCE.desktop) }px)`;
           }
    }
    })
   
})
console.log(CURRENT_WIDTH_SCREEN)
let linkLeft = document.querySelectorAll('.next')
linkLeft.forEach((link)=> {
    link.addEventListener('click', function(){
        console.log(CURRENT_WIDTH_SCREEN)
        if(CURRENT_WIDTH_SCREEN < 380) {
            if(moveRight > -(SCROLL_DISTANCE.smMobile * 4)){
             SCROLL.style.transform=`translateX(${ moveRight -= (SCROLL_DISTANCE.smMobile) }px)`;
            }
        }
        else if(CURRENT_WIDTH_SCREEN < 500) {
            if(moveRight > -(SCROLL_DISTANCE.mobile * 4)){
             SCROLL.style.transform=`translateX(${ moveRight -= (SCROLL_DISTANCE.mobile) }px)`;
            }
        }
        else if(CURRENT_WIDTH_SCREEN < 767) {
            if(moveRight > -(SCROLL_DISTANCE.tablet * 4)){
             SCROLL.style.transform=`translateX(${ moveRight -= (SCROLL_DISTANCE.tablet) }px)`;
            }
        }
        else if(CURRENT_WIDTH_SCREEN >= 1024) {
            if(moveRight > -(SCROLL_DISTANCE.desktop * 4)){
             SCROLL.style.transform=`translateX(${ moveRight -= (SCROLL_DISTANCE.desktop) }px)`;
            }
        }
    })
})