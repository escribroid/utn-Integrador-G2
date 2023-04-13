$(function() {
    $("form[name='wizard']").validate({
      rules: {
        nombreEmpresa: {
            required: true,
            minlength: 3,
            maxlength: 50,
          },
        fechaEntrega: {
          required: true,
          minlength: 5,
          maxlength: 15,
          digits: true,

        },
        nombreyapellido: {
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

      },
      messages: {
        nombreEmpresa: {
            required: "Por favor, introduzca su nombre y apellido",
            minlength: "Su nombre debe tener entre 3 y 50 caracteres.",
            maxlength: "Su nombre debe tener entre 3 y 50 caracteres.",
          },
        fechaEntrega: {
            required: "Por favor proporcione un telefono",
            minlength: "El número debe tener entre 5 y 15 caracteres.",
            maxlength: "El número debe tener entre 5 y 15 caracteres.",
            digits: "Ingrese solo numeros",

          },
        correo: {
            required: "Por favor ingrese un correo electronico",
            email: "Introduce correo electrónico válido de hasta 50 caracteres",
            length: "Su contraseña debe tener al menos 55 caracteres.",
          },
        nombreyapellido: {
            required: "Por favor, introduzca su nombre y apellido",
            minlength: "Su nombre debe tener entre 3 y 50 caracteres.",
            maxlength: "Su nombre debe tener entre 3 y 50 caracteres.",
          },
      },
      submitHandler: function(form) {
        form.submit();
      },
    });
  });