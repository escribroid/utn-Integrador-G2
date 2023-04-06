$(function() {
    $("form[name='contacto']").validate({
      rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 50,
          },
        correo: {
          required: true,
          presence: true,
          email: true,
          minlength: 3,
          maxlength: 50,
        },
        telefono: {
          required: true,
          minlength: 5,
          maxlength: 15,
          digits: true,

        }
      },
      messages: {
        nombre: {
            required: "Por favor, introduzca su nombre y apellido",
            minlength: "Su contraseña debe tener entre 3 y 50 caracteres.",
            maxlength: "Su contraseña debe tener entre 3 y 50 caracteres.",
          },
        telefono: {
          required: "Por favor proporcione un telefono",
          minlength: "El número debe tener entre 5 y 15 caracteres.",
          maxlength: "El número debe tener entre 5 y 15 caracteres.",
          digits: "Ingrese solo numeros",

        },
        correo: {
            required: "Por favor ingrese un correo electronico",
            email: "Introduce correo electrónico válido de hasta 50 caracteres",
            length: "Su contraseña debe tener al menos 55 caracteres."
          },
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });