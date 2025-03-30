if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}

/* Código abaixo serve para mostrar os cadastros*/

let dados = JSON.parse(localStorage.getItem('listUser'))

let div = document.querySelector('#dados')

div.innerHTML = JSON.stringify(dados)


