function administrador() {
    const login = document.getElementById('ilogin').value
    const senha = document.getElementById('isenha').value

    if(login == "gilvando2014@gmail.com" && senha == "12345678"){
        location.href = "dados.html"
    }else{
        alert('Login ou senha incorreta!')
    }
}