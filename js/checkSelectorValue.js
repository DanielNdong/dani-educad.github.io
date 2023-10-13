const selectElement = document.querySelectorAll(".nivelAcademico");
const ramaBach = [...document.querySelectorAll(".ramaBach")];

const selectLabel = document.querySelector(".labelNivelAcademico");
const cursoLabel = document.querySelector(".cursoLabel");
const materiaLabel = document.querySelector(".materiaLabel");

/* Ocultamos o mostramos el select en caso de que la rama elegida sea 'bachillerato' */
[...selectElement].forEach((item, index)=>{
  console.log("elemento: "+item.value+" con indice: "+index)
  item.addEventListener("change", changeDisplayRama(index))
})

/* Cambiar la visualizacion del campo de rama de bachillerato */
const changeDisplayRama = (index)=>{
      selectValue = this.value;
      [...document.querySelectorAll(".ramaBach")][index].style.display = selectValue === "bachillerato" ? 'initial' : 'none';
}

                           
const addNewSubjectButton = document.querySelector(".appendSubject");
addNewSubjectButton.addEventListener("click", ()=> {
 appendNewsElements();
});

  /* Añadir mas materias que puede impartir el profesor */
function appendNewsElements() {
  let containerWrapper = document.querySelector(".otherSubjects");
  let wrapper = document.createElement("div");
  let sections = document.createElement("div");
                                        
  wrapper.classList.add("otherSubject__wrapper");
  sections.classList.add("sections");                                    
  
  let selectClone = selectLabel.cloneNode(true);
  let cursoClone = cursoLabel.cloneNode(true);
  let materiaClone = materiaLabel.cloneNode(true);
  let ramaClone = ramaBach[0].cloneNode(true);

  sections.appendChild(selectClone);
  sections.appendChild(ramaClone);
  sections.appendChild(cursoClone);
  
  wrapper.appendChild(sections);
  wrapper.appendChild(materiaClone);

  containerWrapper.appendChild(wrapper);
}
