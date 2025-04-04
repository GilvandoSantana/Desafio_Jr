const btn = document.querySelector("#eye")

btn.addEventListener('click', ()=>{
    const inputSenha = document.querySelector('#input_password')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function administrador() {
    let loginStyle = document.querySelector('#ilogin');
    let senhaStyle = document.querySelector('#input_password');
    const login = loginStyle.value;
    const senha = senhaStyle.value;
    let msgFalha = document.querySelector('#msgFalha');
    let msgEntrar = document.querySelector('#msgEntrar');

    let userValid = {
        Vlogin: "gilvando2014@gmail.com",
        Vsenha: "12345678"
    };

    if (login === userValid.Vlogin && senha === userValid.Vsenha) {
        msgEntrar.style.display = 'block';
        msgEntrar.innerHTML = '<strong>Entrando...</strong>';
        msgFalha.style.display = 'none';
        msgFalha.innerHTML = '';

        setTimeout(() => {
            window.location.href = "/dados.html";
        }, 2000);

        let token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
    } else {
        loginStyle.style.borderColor = "#ff0000";
        senhaStyle.style.borderColor = "#ff0000";
        msgFalha.style.display = 'block';
        msgFalha.innerHTML = 'Usuário ou senha incorretos';
        msgEntrar.style.display = 'none';
        msgEntrar.innerHTML = '';
    }
}
