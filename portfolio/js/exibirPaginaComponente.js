let elementoPrincipal = document.querySelector('#elemento-principal');

let listaTopicos = [
    { id: 'exibirVisaoGeral', icone: 'book', titulo: 'Visão geral' }, 
    { id: 'exibirProjetos', icone: 'folder-open', titulo: 'Projetos' },
    { id: 'exibirFormacao', icone: 'graduation-cap', titulo: 'Formação' },
    { id: 'exibirCertificacao', icone: 'certificate', titulo: 'Certificações' },
    { id: 'exibirContato', icone: 'phone', titulo: 'Contato' }
];

function executarComponente(componenteEscolhido, identificador) {
    let listaSelecionada = document.querySelector(`#${identificador}`);

    listaTopicos.forEach((topico) => {
        if (topico.id != identificador) {
            
            let topicaAusente = document.querySelector(`#${topico.id}`);

            topicaAusente.classList.remove('conteudo__menu-selecionado');
        } else {
            listaSelecionada.classList.add('conteudo__menu-selecionado');
        }
    });

    componenteEscolhido();
}

function exibirVisaoGeral() {
    elementoPrincipal.innerHTML = `
        <div class="conteudo__visao-geral modelo__centralizado modelo__vertical">
            <h2 class="conteudo__subtitulo">Visão Geral</h2>

            <ul class="conteudo__etiqueta-menu modelo__espacamento modelo__horizontal modelo__centralizado">
                <li class="conteudo__etiqueta-item">Ciência</li>
                <li class="conteudo__etiqueta-item">Engenharia</li>
                <li class="conteudo__etiqueta-item">Computação</li>
                <li class="conteudo__etiqueta-item">Futebol</li>
            </ul>

            <div class="conteudo__imagens modelo__horizontal modelo__espacamento modelo__centralizado">
                <img src="https://images.icon-icons.com/2415/PNG/96/html_original_wordmark_logo_icon_146478.png"/>
                <img src="https://images.icon-icons.com/2415/PNG/96/css_original_wordmark_logo_icon_146576.png"/>
                <img src="https://images.icon-icons.com/2415/PNG/96/javascript_original_logo_icon_146455.png"/>
            </div>

            <p class="conteudo__texto modelo__destaque-bloco">
                Vamos deixar tudo pra trás, mas nossos sonhos jamais, Biquini Cavadão.
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