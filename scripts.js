/* Mostrar y cerrar el menu del header */
document.querySelector("#menu-button").addEventListener("click", () => {
    document.querySelector(".menu__header").classList.toggle("show");
})


document.querySelectorAll(".faq__header").forEach(item => {
        item.addEventListener("click", () => {
            if(item.classList.contains("active")) return item.classList.remove("active")
            document.querySelectorAll(".faq__header").forEach(item => {
                if(item.classList.contains("active")) {
                    item.classList.remove("active")
                }
            })
            item.classList.add("active")
        })

    }) 
   
