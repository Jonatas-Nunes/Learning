(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
     
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

const txtSenha = document.getElementById('txtSenha');
const txtConfSenha = document.getElementById('txtConfSenha');

txtSenha.addEventListener('input', validarSenhas);
txtConfSenha.addEventListener('input', validarSenhas);

function validarSenhas() {
    if (txtSenha.value != txtConfSenha.value) {
        txtConfSenha.setCustomValidity('As senhas não conferem');
    } else {
        txtConfSenha.setCustomValidity('');
    }
}