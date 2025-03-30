if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}

/* Código abaixo serve para mostrar os cadastros*/

/* Nome */

let nome_dados = localStorage.getItem('listUser');

nome = JSON.parse(nome_dados); 

let div_nome = document.querySelector('#div_nome');

div_nome.innerHTML = nome.map(user => `<p> Nome: ${user.Nome_Cadastro}</p>`).join('');

/* CPF */

let cpf_dados = localStorage.getItem('listUser');

cpf = JSON.parse(cpf_dados); 

let div_cpf = document.querySelector('#div_cpf');

div_cpf.innerHTML = cpf.map(user => `<p> CPF: ${user.Cpf_Cadastro}</p>`).join('');

/* E-mail */

let email_dados = localStorage.getItem('listUser');

email = JSON.parse(email_dados); 

let div_email = document.querySelector('#div_email');

div_email.innerHTML = email.map(user => `<p> E-mail: ${user.Email_Cadastro}</p>`).join('');

/* Celular */

let celular_dados = localStorage.getItem('listUser');

celular = JSON.parse(celular_dados); 

let div_celular = document.querySelector('#div_celular');

div_celular.innerHTML = celular.map(user => `<p> Celular: ${user.Celular_Cadastro}</p>`).join('');

/* Endereço */

let endereco_dados = localStorage.getItem('listUser');

endereco = JSON.parse(endereco_dados); 

let div_endereco = document.querySelector('#div_endereco');

div_endereco.innerHTML = endereco.map(user => `<p> Endereço: ${user.Endereco_Cadastro}</p>`).join('');

/* Bairro */

let bairro_dados = localStorage.getItem('listUser');

bairro = JSON.parse(bairro_dados); 

let div_bairro = document.querySelector('#div_bairro');

div_bairro.innerHTML = bairro.map(user => `<p> Bairro: ${user.Bairro_Cadastro}</p>`).join('');

/* Turma */

let turma_dados = localStorage.getItem('listUser');

turma = JSON.parse(turma_dados); 

let div_turma = document.querySelector('#div_turma');

div_turma.innerHTML = turma.map(user => `<p> Turma: ${user.Turma_Cadastro}</p>`).join('');

/* Reclamação */

let reclamacao_dados = localStorage.getItem('listUser');

reclamacao = JSON.parse(reclamacao_dados); 

let div_reclamacao = document.querySelector('#div_reclamacao');

div_reclamacao.innerHTML = reclamacao.map(user => `<p> Reclamação: ${user.Reclamacao_Cadastro}</p>`).join('');
