// form recebe id formulario
const form = document.querySelector('.formulario')
// evento de submit(apos o click do botao acontecera um evento)
form.addEventListener('submit', evento => {
    // evento pra n recarregar pagina
    evento.preventDefault();

    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirmPassword')
    // validando as senhas
    if (password.value !== confirmPassword.value){
        alert('Inválido, senha incorreta')
        return
    }
    alert("Formulário enviado")
})

