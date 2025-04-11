let elementoLinksSociais = document.querySelector('#elemento-links-sociais');
let elementoTopicos = document.querySelector('#elemento-topicos');

function exibirLinksSociaisNaTela() {
    let listaLinksSociais = [
        { icone: 'map-marker', titulo: 'Fortaleza, Ceará' },
        { icone: 'linkedin', titulo: 'in/mateusmaciel460' },
        { icone: 'youtube', titulo: '@mateusmaciel460' }
    ];    
    
    listaLinksSociais.forEach((rede) => {
        elementoLinksSociais.innerHTML += `
            <li class="conteudo__menu-item">
                <i class="fa fa-${rede.icone}"></i>
                ${rede.titulo}
            </li>
        `;
    });
}

function exibirTopicos() {
    let listaTopicos = [
        { id: 'exibirVisaoGeral', icone: 'book', titulo: 'Visão geral' }, 
        { id: 'exibirProjetos', icone: 'folder-open', titulo: 'Projetos' },
        { id: 'exibirFormacao', icone: 'graduation-cap', titulo: 'Formação' },
        { id: 'exibirCertificacao', icone: 'certificate', titulo: 'Certificações' },
        { id: 'exibirContato', icone: 'phone', titulo: 'Contato' }
    ];

    listaTopicos.forEach((topico) => {
        elementoTopicos.innerHTML += `
            <li class="conteudo__menu-item modelo__horizontal" id="${topico.id}">
                <i class="fa fa-${topico.icone}"></i>
                <a 
                    id="${topico.id}-link"
                    href="#${topico.id}" 
                    class="conteudo__link" 
                    onclick="executarComponente(${topico.id}, '${topico.id}')">${topico.titulo}</a>
            </li>
        `;
    });
}

exibirLinksSociaisNaTela();
exibirTopicos();