// JavaScript source code
function ValidarRespuestas() {

    let total = 5;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestas = ["b", "b", "b", "c", "b"];

    for (let i = 1; i <= total; i++) {
        if (myForm["pregunta" + i].value == null || myForm["pregunta" + i].value == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe responder todas las preguntas',
            });
            return false;
        } else {
            if (myForm["pregunta" + i].value == respuestas[i - 1]) {
                ++puntos;
            }
        }
    }

    Swal.fire({
        icon: 'success',
        title: '¡Respuestas enviadas!',
        text: 'Obtuviste ' + puntos + ' de ' + total + ' puntos posibles'
    });

    return false;
}