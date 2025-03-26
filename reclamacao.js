
/* Consts */

let nome = document.querySelector('#inome')
let validNome = false

let cpf = document.querySelector('#icpf')
let validCpf = false

let endereco = document.querySelector('#iendereco')
let validEndereco = false

let bairro = document.querySelector('#ibairro')
let validBairro = false

let celular = document.querySelector('#icelular')
let validCelular = false

let email = document.querySelector('#iemail')
let validEmail = false

let turma = document.querySelector('#iturma')
let validTurma = true

let reclamacao = document.querySelector('#ireclamacao')
let validReclamacao = false

let msgError = document.querySelector('#msgError')
let msgSucesso = document.querySelector('#msgSucesso')

/* Eventos */

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4){
        nome.setAttribute('style', 'background-color:lightcoral')
        validNome = false
    } else{
        nome.setAttribute('style', 'background-color:white')
        validNome = true 
    }
})
cpf.addEventListener('keyup', () => {
    if(cpf.value.length <= 13){
        cpf.setAttribute('style', 'background-color:lightcoral')
        validCpf = false
    } else{
        cpf.setAttribute('style', 'background-color:white')
        validCpf = true 
    }
})
email.addEventListener('keyup', () => {
    if(email.value.length <= 4){
        email.setAttribute('style', 'background-color:lightcoral')
        validEmail = false
    } else{
        email.setAttribute('style', 'background-color:white')
        validEmail = true 
    }
})
celular.addEventListener('keyup', () => {
    if(celular.value.length <= 13){
        celular.setAttribute('style', 'background-color:lightcoral')
        validCelular = false
    } else{
        celular.setAttribute('style', 'background-color:white')
        validCelular = true 
    }
})
endereco.addEventListener('keyup', () => {
    if(endereco.value.length <= 4){
        endereco.setAttribute('style', 'background-color:lightcoral')
        validEndereco = false
    } else{
        endereco.setAttribute('style', 'background-color:white')
        validEndereco = true 
    }
})
bairro.addEventListener('keyup', () => {
    if(bairro.value.length <= 4){
        bairro.setAttribute('style', 'background-color:lightcoral')
        validBairro = false
    } else{
        bairro.setAttribute('style', 'background-color:white')
        validBairro = true 
    }
})
reclamacao.addEventListener('keyup', () => {
    if(reclamacao.value.length <= 4){
        reclamacao.setAttribute('style', 'background-color:lightcoral')
        validReclamacao = false
    } else{
        reclamacao.setAttribute('style', 'background-color:white')
        validReclamacao = true 
    }
})

/* Máscara de CPF */

cpf.addEventListener('keypress', () => {
    let CpfMasc = cpf.value.length

    if (CpfMasc === 3 || CpfMasc ===7) {
        cpf.value += '.'
    }else if(CpfMasc === 11) {
        cpf.value += '-'
    }
})

/* Máscara de celular */

celular.addEventListener('keypress', () => {
    let CelMasc = celular.value.length

    if (CelMasc === 0) {
        celular.value += '('
    }else if(CelMasc === 3) {
        celular.value += ')'
    }else if(CelMasc === 9) {
        celular.value += '-'
    }
})

function cadastro(){
    event.preventDefault();

    if(validNome && validCpf && validEndereco && validBairro && validCelular && validEmail && validTurma && validReclamacao){
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

        listUser.push(
            {
                NomeCad: nome.value,
                CpfCad: cpf.value,
                EnderecoCad: endereco.value,
                BairroCad: bairro.value,
                CelularCad: celular.value,
                EmailCad: email.value,
                TurmaCad: turma.value,
                ReclamacaoCad: reclamacao.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.innerHTML = ''
        msgError.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href = "/index.html"
        }, 3000);

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucesso.innerHTML = ''
        msgSucesso.setAttribute('style', 'display: none')
    }
}