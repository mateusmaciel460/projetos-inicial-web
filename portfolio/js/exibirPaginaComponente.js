let elementoPrincipal = document.querySelector('#elemento-principal');

function exibirVisaoGeral() {
    elementoPrincipal.innerHTML = `
        <div class="conteudo__visao-geral modelo__vertical">
            <h2 class="conteudo__subtitulo">Visão Geral</h2>

            <ul class="conteudo__etiqueta-menu modelo__horizontal modelo__centralizado">
                <li class="conteudo__etiqueta-item">Ciência</li>
                <li class="conteudo__etiqueta-item">Engenharia</li>
                <li class="conteudo__etiqueta-item">Computação</li>
                <li class="conteudo__etiqueta-item">Futebol</li>
            </ul>

            <p class="conteudo__texto">
                Seja bem-vindo ao "Visão geral" do @mateusmaciel460. Esse é meu primeiro portfólio feito integralmente com HTML5, CSS3 e JavaScript. Atualmente (Abril de 2025), estou com tecnologias limitadas, mas ao final desse ano, desejo mudar completamente esse cenário.
            </p>
        </div>
    `;
}

function exibirProjetos() {
    elementoPrincipal.innerHTML = `
        <h2 class="conteudo__subtitulo">Projetos</h2>
    `;
}

function exibirFormacao() {
    elementoPrincipal.innerHTML = `
        <h2 class="conteudo__subtitulo">Formação</h2>
    `;
}

function exibirCertificacao() {
    elementoPrincipal.innerHTML = `
        <h2 class="conteudo__subtitulo">Certificações</h2>
    `;
}

function exibirContato() {
    elementoPrincipal.innerHTML = `
        <h2 class="conteudo__subtitulo">Contato</h2>
    `;
}   

exibirVisaoGeral();