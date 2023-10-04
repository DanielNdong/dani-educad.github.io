const selectorElement = document.querySelector(".nivelAcademico");
const ramaBach = document.querySelector(".ramaBach");

selectorElement.addEventListener("change", ()=> {
  const selectValue = document.querySelector(".nivelAcademico").value;
      ramaBach.style.display = selectValue === "bachillerato" ? 'initial' : 'none';
})
