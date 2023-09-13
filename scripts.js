/* Mostrar y cerrar el menu del header */
document.querySelector("#menu-button").addEventListener("click", () => {
    document.querySelector(".menu__header").classList.toggle("show");
    document.querySelector("#menu-button").classList.toggle("is-active");
})


/* Accordeon script to open o close faq's */
document.querySelectorAll(".faq__header").forEach(item => {
    item.addEventListener("click", () => {
        if (item.classList.contains("active")) return item.classList.remove("active")
        document.querySelectorAll(".faq__header").forEach(item => {
            if (item.classList.contains("active")) {
                item.classList.remove("active")
            }
        })
        item.classList.add("active")
    })

})



/* Mostrar y cerrar el menu del la infomacion del miembro de equipo "About" */

document.querySelectorAll(".menu__member").forEach((item,index_ele) => {
    item.addEventListener("click", () => {
       /*  if (item.classList.contains("show__member")) return item.classList.remove("show__member")
        document.querySelectorAll(".member__content").forEach(item => {
            item.classList.add("show__member")
        }) */
        if (item.classList.contains("show__member")) return item.classList.remove("show__member")
        document.querySelectorAll(".member__content").forEach((items,index) => {

            if (items.classList.contains("show__member")) {
                items.classList.remove("show__member")
            }
        })
        item.classList.add("show__member")
    })

})


/* Animacion del slider de la seccion de 'Collaborate' */
let scrollDirection = 0;
let scrollCount = 0;
let scrollInterval = null;

function scrollCollaborate(option) {
  const scrollElement = document.querySelector(".collaborate__scroll");
  const scrollDesktopElement = document.querySelector(".collaborate__collaborate");
  option === "left"
    ? (scrollElement.scrollLeft -= 365)
    : (scrollElement.scrollLeft += 365);

  option === "left"
    ? (scrollDesktopElement.scrollLeft -= 830)
    : (scrollDesktopElement.scrollLeft += 830);

    clearInterval(scrollInterval)
    scrollInterval = setInterval(automaticScroll, 10000)
}

function automaticScroll() {
  const scrollElement = document.querySelector(".collaborate__scroll");
  const scrollDesktopElement = document.querySelector(".collaborate__collaborate");

  if (scrollDirection === 0) {
    scrollElement.scrollLeft += 365;
    scrollDesktopElement.scrollLeft += 830;
    scrollCount++;
    if (scrollCount === 6) {
      scrollDirection = 1;
      scrollCount = 0;
    }
  } else {
    scrollElement.scrollLeft -= 365;
    scrollDesktopElement.scrollLeft -= 830;
    scrollCount++;
    if (scrollCount === 6) {
      scrollDirection = 0;
      scrollCount = 0;
    }
  }
}

scrollInterval = setInterval(automaticScroll, 10000);


/* cambiar estilos del header al hacer scroll */
const header = document.querySelector('.header');
header.addEventListener('scroll', () => {
    console.log("scrolleado")
    if(window.scrollY >= 63) {
        header.style.boxShadow = "3px 5px 11px 0px #0000000";
    }

})