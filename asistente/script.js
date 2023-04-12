const movPag = document.querySelector(".movPag");
const pagina = document.querySelector(".pagina");
const pagina2 = document.querySelector(".pagina2");
const pagina3 = document.querySelector(".pagina3");

const BotonAvance1 = document.querySelector(".avanzarpag1");
const BotonVolver0 = document.querySelector(".retrocederpag0");
const BotonVolver1 = document.querySelector(".retrocederpag1");
const BotonAvance2 = document.querySelector(".avanzarpag2");

BotonAvance1.addEventListener("click", function (event) {
  event.preventDefault();
  movPag.style.display = "none";
  pagina2.style.display = "block";
});

BotonAvance2.addEventListener("click", function (event) {
  event.preventDefault();
  let nombreEmpresa = document.getElementById("nombreEmpresa").textContent;
  let fechaEntrega = document.getElementById("fechaEntrega").textContent;
  let nombreyapellido = document.getElementById("nombreyapellido").textContent;
  let mail = document.getElementById("email").textContent;
  movPag.style.display = "none";
  pagina.style.display = "none";
  pagina2.style.display = "none";
  pagina3.style.display = "block";
  document.querySelector(".span1").innerHTML = nombreEmpresa;
  document.querySelector(".span2").innerHTML = fechaEntrega;
  document.querySelector(".span3").innerHTML = nombreyapellido;
  document.querySelector(".span4").innerHTML = mail;
});

BotonVolver0.addEventListener("click", function (event) {
  event.preventDefault();
  pagina2.style.display = "none";
  movPag.style.display = "block";
});
BotonVolver1.addEventListener("click", function (event) {
  event.preventDefault();
  pagina2.style.display = "block";
  pagina3.style.display = "none";
});