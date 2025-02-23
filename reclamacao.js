function cadastro() {
    const nome = document.getElementById('inome').value
    const cpf = document.getElementById('icpf').value
    const endereco = document.getElementById('iendereco').value
    const bairro = document.getElementById('ibairro').value
    const celular = document.getElementById('icelular').value
    const email = document.getElementById('iemail').value
    const opcoes = document.getElementById('iturma').value
    const reclamacao = document.getElementById('ireclamacao').value
    const dados = {nome,cpf,endereco,bairro,celular,email,opcoes,reclamacao}
    localStorage.setItem("dadosUsuario", JSON.stringify(dados))
}