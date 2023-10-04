const selectorElement = document.querySelector(".nivelAcademico");
const ramaBach = document.querySelector(".ramaBach");

selectorElement.addEventListener("change", ()=> {
  const selectValue = document.querySelector(".nivelAcademico").value;
  console.log("Cambio");
  if(selectValue !== "bachillerato") {
      ramaBach.style.display = "initial";
  }
})
