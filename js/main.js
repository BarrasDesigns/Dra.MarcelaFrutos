function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    let mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+528115028945';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    Swal.fire({
        title: '¡Gracias, en breve te comunicamos para agendar tu cita!',
        text: 'Mensaje para el cliente al agendar una cita',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombreCompleto = document.querySelector('#nombreCompleto').value
        let email = document.querySelector('#email').value
        let mensaje = 'send?phone=' + telefono + '&text=*Cita agenda*%0A*Hola, quiero agendar una cita, mi nombre es*%0A' + nombreCompleto + '%0A*Mi correo es*%0A' + email + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});