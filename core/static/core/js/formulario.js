$(document).ready(function () {
    console.log("jQuery Funcionando")

    $("#formularioContacto").validate({
        rules: {
            txtNombre: {
                required: true,
            },

            txtEmail: {
                required: true,
                email: true,
            },

            comentario: {
                minlength: 50,
            },
            
            rut:{
                validRut: true,
                required: true,
            },

            tel: {
                required: true,
            },

            txtPasaporte: {
                required: true,
            }

        },

        messages: {
            txtNombre: {
                required: "El campo nombre es requerido.*"
            },
            txtEmail: {
                required: "El campo email es requerido.*",
                email: "El email ingresado debe tener un formato 'correo@example.com'"
            },
            comentario: "El comentario debe tener al menos 50 caracteres",

            tel: {
                required: "El campo teléfono es requerido"
            },

            rut: {
                required: "El campo rut es requerido",
            },

            txtPasaporte: {
                required: "El campo pasaporte es requerido",
            }
        }
    })

    // Desabilitar inputs (Rut y Pasaporte)
    $("#rut").prop("disabled", true)
    $("#pasaporte").prop("disabled", true)


    // Validacion Tipo Documento (Rut/Pasaporte)
    $("input[name=tipoDocumento]").click(function () {
        if ($('input:radio[name=tipoDocumento]:checked').val() == "isRut") {
            $("#rut").prop("disabled", false) && $("#pasaporte").prop("disabled", true)
        }
        if ($('input:radio[name=tipoDocumento]:checked').val() == "isPasaporte") {
            $("#rut").prop("disabled", true) && $("#pasaporte").prop("disabled", false)
        }

    })

    // Validacion telefono
    $("#telefono").keydown(function (event) {


        if (event.keyCode != 46 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 39)
            if ($(this).val().length >= 10)
                event.preventDefault();

        // Solo Numeros del 0 a 9 
        if (event.keyCode < 48 || event.keyCode > 57)
            //Solo Teclado Numerico 0 a 9
            if (event.keyCode < 96 || event.keyCode > 105)

                if (event.keyCode != 46 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 39)
                    event.preventDefault();

    })

    // Botón Limpiar campos
    $("#btnLimpiar").click(function (event) {
        $("#formularioContacto")[0].reset();
    })

})