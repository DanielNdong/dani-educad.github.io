const selectorElement = document.querySelector(".nivelAcademico");
const ramaBach = document.querySelector(".ramaBach");

selectorElement.addEventListener("change", ()=> {
  const selectValue = document.querySelector(".nivelAcademico").value;
  if(selectValue === "bachillerato") {
      ramaBach.style.display = "initial";
  }
})
