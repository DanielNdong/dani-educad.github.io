const selectorElement = document.querySelector(".nivelAcademico");
const selectorElement = document.querySelector(".nivelAcademico");
const selectorElement = document.querySelector(".nivelAcademico");
const selectorElement = document.querySelector(".nivelAcademico");
const selectorElement = document.querySelector(".nivelAcademico");

const ramaBach = document.querySelector(".ramaBach");
/* Ocultamos o mostramos el select en caso de que la rama elegida sea 'bachillerato' */
selectorElement.addEventListener("change", ()=> {
  const selectValue = document.querySelector(".nivelAcademico").value;
      ramaBach.style.display = selectValue === "bachillerato" ? 'initial' : 'none';
})

/* Añadir mas materias que puede impartir el profesor */
