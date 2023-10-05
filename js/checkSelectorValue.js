const selectElement = document.querySelector(".nivelAcademico");

const selectLabel = document.querySelector(".labelNivelAcademico");
const cursoLabel = document.querySelector(".cursoLabel");
const materiaLabel = document.querySelector(".materiaLabel");
const ramaBach = document.querySelector(".ramaBach");

/* Ocultamos o mostramos el select en caso de que la rama elegida sea 'bachillerato' */
selectElement.addEventListener("change", ()=> {
  const selectValue = document.querySelector(".nivelAcademico").value;
      ramaBach.style.display = selectValue === "bachillerato" ? 'initial' : 'none';
})

const addNewSubjectButton = document.querySelector(".appendSubject");
addNewSubjectButton.addEventListener("click", ()=> {
 appendNewsElements();
});

  /* Añadir mas materias que puede impartir el profesor */
function appendNewsElements() {
  let contenedor = document.querySelector(".otherSubjects");
  
  let selectClone = selectLabel.cloneNode(true);
  let cursoClone = cursoLabel.cloneNode(true);
  let materiaClone = materiaLabel.cloneNode(true);
  let ramaClone = ramaBach.cloneNode(true);
  
  
  contenedor.appendChild(selectClone);
  contenedor.appendChild(cursoClone);
  contenedor.appendChild(materiaClone);
  contenedor.appendChild(ramaClone);
}
