/* ENVIO DE DATOS DE FORMULARIO A EMAIL */

const contactForm = document.getElementById("contact_form");
const userName = document.getElementById("floating_name");
const userEmail = document.getElementById("floating_mail");
const userPhone = document.getElementById("floating_phone");
const comments = document.getElementById("floating_comments");

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body),
    }
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", settings);
    const data = await response.json();
    return data;
};

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const body = {
        service_id: "", // Ingresar datos entre las comillas
        template_id: "", // Ingresar datos entre las comillas
        user_id: "", // Ingresar datso entre las comillas
        template_params: {
            "from_name": userName.value,
            "email_id": userEmail.value,
            "phone_number": userPhone.value,
            "message": comments.value
        }
    };

    sendEmail(body)
        .then((response) => {
            console.log(response.text())
        })
        .catch((error) => {
            console.log(error)
        })
})

/* VALIDACION DE CAMPOS EN FORMULARIO Y AVISO MEDIANTE TOASTIFY QUE EL ENVIO FUE EXITOSO */

const name = document.getElementById("floating_name");
const email = document.getElementById("floating_mail");
const phone = document.getElementById("floating_phone");
const comment = document.getElementById("floating_comments");
const enviar = document.getElementById("enviar");
const form = document.getElementById("contact_form");


enviar.addEventListener('click', () => {
    if ((name.value.length == 0) || (email.value.length == 0) || (phone.value.length == 0) || (comment.value.length == 0)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos!',
        })
    } else {
        Toastify({
            text: 'Su consulta ha sido enviada!',
            duration: 3000,
            position: 'left',
            gravity: 'bottom',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();
        form.onsubmit();
    };
});


/* BORRAR FORMULARIO */

const borrarFormulario = document.getElementById('borrar');
borrarFormulario.addEventListener('click', () => {
    form.reset();
});