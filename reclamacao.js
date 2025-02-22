function cadfastro() {
    const nome = document.getElementById('inome')
    const cpf = document.getElementById('icpf')
    const endereco = document.getElementById('iendereco')
    const bairro = document.getElementById('ibairro')
    const celular = document.getElementById('icelular')
    const email = document.getElementById('iemail')
    const dados = {nome, cpf, enderco, bairro, celular, email}
    localStorage.getItem(dadosUsuario, JSON.stringify(dados))
}