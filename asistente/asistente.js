$(document).ready(function() {
    $("#wizard").validate(
      {
      rules: {
        nombreEmpresa: {
            required: true,
            minlength: 3,
            maxlength: 50,
          },
      
        nombreyapellido: {
          required: true,
          minlength: 3,
          maxlength: 50,
        },
        correo: {
          required: true,
          email: true,
          minlength: 3,
          maxlength: 50,
        },
      },
      messages: {
        nombreEmpresa: {
            required: "Introduzca el nombre de su Empresa",
            minlength: "Debe tener entre 3 y 50 caracteres.",
            maxlength: "Debe tener entre 3 y 50 caracteres.",
          },
        correo: {
            required: "Ingrese un correo electronico",
            email: "Ingrese un email de hasta 50 caracteres",
            minlength: "Debe tener entre 3 y 50 caracteres.",
            maxlength: "Debe tener entre 3 y 50 caracteres.",
          },
        nombreyapellido: {
            required: "Introduzca su Nombre y Apellido",
            minlength: "Debe tener entre 3 y 50 caracteres.",
            maxlength: "Debe tener entre 3 y 50 caracteres.",
          },
      }
    });    
  });

  function avance1() {
    let empresa = document.getElementById("nombreEmpresa");
    let fecha = document.getElementById("fechaEntrega");
    if (empresa.value.length >= 3 && fecha.value !== ""){
    document.querySelector(".movPag").style.display = "none";
    document.querySelector(".pagina2").style.display = "block";
    } else {
      document.getElementById("msgError1").innerHTML = "Complete todos los campos";
    }
  }

  function avance2() {
    let nombre = document.getElementById("nombreyapellido");
    let idmail = document.getElementById("correo").value.toString();
    let pattern = /@/;
    var arro = pattern.test(idmail);
        if (nombre.value.length >= 3 && arro){
        pagina.style.display = "none";
        pagina2.style.display = "none";
        pagina3.style.display = "block";       
        } else {
          document.getElementById("msgError2").innerHTML = "Complete todos los campos";
        }    
    let nombreEmpresa = document.getElementById("nombreEmpresa").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;
    let nombreyapellido = document.getElementById("nombreyapellido").value;
    let mail = document.getElementById("correo").value;
    document.querySelector(".span1").innerHTML = nombreEmpresa;
    document.querySelector(".span2").innerHTML = fechaEntrega;
    document.querySelector(".span3").innerHTML = nombreyapellido;
    document.querySelector(".span4").innerHTML = mail;  
  }

  function enviar() {
    pagina3.style.display = "none";
    pagina4.style.display = "block";
    document.getElementById("enviado").innerHTML = ("Formulario Enviado");

    setTimeout(function(){
      window.location.href = "/asistente.html" ;
  }, 3000);
  }
  
const movPag = document.querySelector(".movPag");
const pagina = document.querySelector(".pagina");
const pagina2 = document.querySelector(".pagina2");
const pagina3 = document.querySelector(".pagina3");
const pagina4 = document.querySelector(".pagina4");

const BotonAvance1 = document.querySelector(".avanzarpag1");
const BotonVolver0 = document.querySelector(".retrocederpag0");
const BotonVolver1 = document.querySelector(".retrocederpag1");
const BotonAvance2 = document.querySelector(".avanzarpag2");

BotonVolver0.addEventListener("click", function () {
  pagina2.style.display = "none";
  movPag.style.display = "block";
});

BotonVolver1.addEventListener("click", function () {
  pagina2.style.display = "block";
  pagina3.style.display = "none";
});