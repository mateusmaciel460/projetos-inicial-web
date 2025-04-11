let listaDadosUsuario = [{ nome: 'Mateus Maciel', usuario: 'mateusmaciel460' }];

let elementoPerfil = document.querySelector('#elemento-perfil');
let nomePerfil = document.querySelector('#nome-perfil');
let usuarioPerfil = document.querySelector('#usuario-perfil');
let botao = document.querySelector('#botao');

function exibirUsuarioNaTela() {
    listaDadosUsuario.forEach((perfil) => {
        nomePerfil.textContent = perfil.nome;
        usuarioPerfil.textContent = perfil.usuario;
    });
}
 
exibirUsuarioNaTela();