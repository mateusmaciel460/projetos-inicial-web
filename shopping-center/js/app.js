let elementoInformacao = document.querySelector('#elemento-informacao');

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

exibirListaInformacoes();