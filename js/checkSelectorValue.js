const selectElement = document.querySelector(".nivelAcademico");

const selectLabel = document.querySelector(".labelNivelAcademico");
const cursoLabel = document.querySelector(".cursoLabel");
const materiaLabel = document.querySelector(".materiaLabel");
const ramaBach = document.querySelector(".ramaBach");

/* Ocultamos o mostramos el select en caso de que la rama elegida sea 'bachillerato' */
selectElement.addEventListener("change", ()=> {
  const selectValue = document.querySelector(".nivelAcademico").value;
      ramaBach.style.display = selectValue === "bachillerato" ? 'initial' : 'none';
      appendNewsElements();
})


  /* Añadir mas materias que puede impartir el profesor */
function appendNewsElements() {
  let contenedor = document.querySelector(".otherSubjects");
  
  let selectClone = selectLabel.cloneNode();
  let cursoClone = cursoLabel.cloneNode();
  let materiaClone = materiaLabel.cloneNode();
  let ramaClone = ramaBach.cloneNode();
  
  
  contenedor.appendChild(selectClone);
  contenedor.appendChild(cursoClone);
  contenedor.appendChild(materiaClone);
  contenedor.appendChild(ramaClone);
}
