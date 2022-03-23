const botaoPesquisa = document.querySelector('.cabecalho_pesquisa-icone')
const pesquisaCampo = document.querySelector('.cabecalho_pesquisa-campo')
const pesquisaBarra = document.querySelector('.cabecalho_pesquisa')
const botaoLogin = document.querySelector('.botao')
const header = document.querySelector('.cabecalho')

botaoPesquisa.addEventListener('click', () => {
    pesquisaCampo.classList.toggle('cabecalho_pesquisa-campo-ativo')
    botaoPesquisa.classList.toggle('cabecalho_pesquisa-icone-desativado')
    pesquisaBarra.classList.toggle('cabecalho_pesquisa-ativa')
    document.getElementById('cabecalho_botao-login').style.display = 'none';
    document.documentElement.onclick = function(event){
        if (event.target !== pesquisaBarra & event.target !== pesquisaCampo & event.target !== botaoPesquisa) {
            document.getElementById('cabecalho_botao-login').style.display = 'block';
            pesquisaBarra.classList.replace('cabecalho_pesquisa-ativa', 'cabecalho_pesquisa')
            botaoPesquisa.classList.replace('cabecalho_pesquisa-icone-desativado', 'cabecalho_pesquisa-icone')
            pesquisaCampo.classList.replace('cabecalho_pesquisa-campo-ativo', 'cabecalho_pesquisa-campo')
        }
    }
})