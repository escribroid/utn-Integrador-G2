const movPag = document.querySelector(".movPag");
const pagina = document.querySelector(".pagina");
const pagina2 = document.querySelector(".pagina2");
const pagina3 = document.querySelector(".pagina3");

const BotonAvance1 = document.querySelector(".avanzarpag1");
const BotonVolver0 = document.querySelector(".retrocederpag0");
const BotonVolver1 = document.querySelector(".retrocederpag1");
const BotonAvance2 = document.querySelector(".avanzarpag2");

// const step1 = document.querySelector("#pagina");
// const step2 = document.querySelector("#pagina-2");
// const summary = document.querySelector("#summary");

BotonAvance1.addEventListener("click", function () {
    // recopilar datos del primer paso
    // alert("Hola su empresa es " + name);
    // let tipo_web = document.querySelector("#web").value;
    // alert("Ya agendamos el tipo de desarrollo que desea y la fecha");
    movPag.style.display = "none";
    pagina2.style.display = "block";
});

BotonAvance2.addEventListener("click", function () {
    // tomo info de los input
    let nombreEmpresa = document.getElementById("nombreEmpresa").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;
    let nombreyapellido = document.getElementById("nombreyapellido").value;
    let mail = document.getElementById("email").value;
    movPag.style.display = "none";
    pagina.style.display = "none";
    pagina2.style.display = "none";
    pagina3.style.display = "block";
    document.querySelector(".span1").innerHTML = nombreEmpresa;
    document.querySelector(".span2").innerHTML = fechaEntrega;
    document.querySelector(".span3").innerHTML = nombreyapellido;
    document.querySelector(".span4").innerHTML = mail;
});

BotonVolver0.addEventListener("click", function () {
    // tomo info de los input
    pagina2.style.display = "none";
    movPag.style.display = "block";

    // ocultar primer pagina y mostrar la segunda
});
BotonVolver1.addEventListener("click", function () {
    // tomo info de los input
    pagina2.style.display = "block";
    pagina3.style.display = "none";

    // ocultar primer pagina y mostrar la segunda
});