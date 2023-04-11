
const movPag = document.querySelector(".movPag");
const pagina2 = document.querySelector(".pagina2");
const BotonAvance1 = document.querySelector(".avanzarpag1");
const BotonVolver0 = document.querySelector(".retrocederpag0");
const BotonAvance2 = document.querySelector(".avanzarpag2");

// const step1 = document.querySelector("#pagina");
// const step2 = document.querySelector("#pagina-2");
// const summary = document.querySelector("#summary");

BotonAvance1.addEventListener("click", function() {
  // recopilar datos del primer paso
  let name = document.getElementById("nombre-empresa").value;
    alert ("Hola su empresa es "+name);
  let tipo_web = document.querySelector("#web").value;
  let fechaentrega= document.getElementById("fecha_entrega").value;
  alert("Ya agendamos el tipo de desarrollo que desea y la fecha");
  movPag.style.display= "none"; 
  pagina2.style.display="block";  
});

BotonAvance2.addEventListener("click", function() {
    // tomo info de los input
    let nombreyapellido = document.getElementById("nombreyapellido").value;
    alert ("Le responderemos a la brevedad. gracias a ud: "+nombreyapellido);
   let mail= document.getElementById("email").value;
   alert ("Le esceibiremos a este mail "+mail);
   pagina2.style.display="none";
  
    //falta mostrar resumen en el segundo paso
    // ver.....summary.innerHTML = `Nombre: ${nombreyapellido}<br>Email: ${email}`;
  });
  
  BotonVolver0.addEventListener("click", function() {
    // tomo info de los input
    pagina2.style.display= "none"; 
    movPag.style.display="block";
  
    // ocultar primer pagina y mostrar la segunda 
  });
  