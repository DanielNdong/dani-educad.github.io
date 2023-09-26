(function(){
    const REGISTER_SECTION = [...document.querySelectorAll('.register_section')]
    const nextBtn = document.querySelectorAll('.next') 
    const prevBtn = document.querySelectorAll('.prev') 

    nextBtn.forEach( (item) => {
        item.addEventListener('click', ()=> changeView(1))
    })
    prevBtn.forEach((item) =>{
        item.addEventListener('click', ()=> changeView(-1))
    })

    /* Muestra el boton de submit y oculta el de next */
    function showButtonSubmit() {
      const currentElement = document.querySelector('.esta') 
          /* document.querySelector('#next').remove(); */
        const sumbitButton = document.createElement('button');
        console.log(sumbitButton);
        sumbitButton.classList.add('boton_enviar');
        sumbitButton.innerText = 'Regístrate';
        currentElement.appendChild(sumbitButton);
    }

     function changeView(change) {
        const currentElement = Number(document.querySelector('.register_section--show').dataset.id)
        
        value = currentElement;
        value += change;
        console.log(REGISTER_SECTION)
        if(value === 0  || value === REGISTER_SECTION.length+1) {
            value = value === 0 ? 1 : REGISTER_SECTION.length;
        }
        console.log(currentElement-1)
        REGISTER_SECTION[currentElement - 1].classList.toggle('register_section--show')
        REGISTER_SECTION[value - 1].classList.toggle('register_section--show')
    }
})()