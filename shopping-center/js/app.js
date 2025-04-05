let elementoInformacao = document.querySelector('#elemento-informacao');
let elementoIdentidade = document.querySelector('#elemento-identidade');

function exibirListaIdentidade() {  
    let listaIdentidade = [
        { icone: 'fa fa-3x fa-bullseye', titulo: 'Missão', texto: 'TEXTO COLOCAR AQUI' },
        { icone: 'fa fa-3x fa-eye', titulo: 'Visão', texto: 'TEXTO COLOCAR AQUI' },
        { icone: 'fa fa-3x fa-diamond', titulo: 'Valores', texto: 'TEXTO COLOCAR AQUI' }
    ];

    listaIdentidade.forEach((identidade) => {
        elementoIdentidade.innerHTML += `
            <div class="conteudo__bloco-transparente conteudo__bloco">
                <i class="${identidade.icone} conteudo__bloco-transparent--icone" aria-hidden="true"></i>
                <h3 class="conteudo__subtitulo-3">${identidade.titulo}</h3>
                <p class="conteudo__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem cum in laudantium optio! Illo, quisquam vero omnis porro laudantium reprehenderit aliquid.</p>
            </div>
        `;
    });
}

function exibirListaInformacoes() {
    let listaInformacoes = [
        { icone: 'fa-2x fa fa-home', titulo: '4.500 vagas de estacionamento' }
    ];

    for (let contador = 0; contador < 8; contador++) {
        listaInformacoes.forEach((informacao) => {
            elementoInformacao.innerHTML += `
                <li class="conteudo__informacao-item">
                    <i class="${informacao.icone}" aria-hidden="true"></i>
                    ${informacao.titulo}
                </li>
            `;
        }); 
    }
}

exibirListaIdentidade();
exibirListaInformacoes();