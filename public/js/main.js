"use strict";

const ROTAS = {
    'docs': 'https://doc-convert-seven.vercel.app/',
    'img': 'https://removebrasilia.vercel.app/',
    'video': 'https://converte-brasil-ia.vercel.app/',
    'senha': 'https://geradorsenha-eight.vercel.app/'
};

function abrirServico(tipo) {
    const url = ROTAS[tipo];
    const container = document.getElementById('container-servico');
    const iframe = document.getElementById('frame-servico');

    if (url) {
        iframe.src = url;
        // Mostra o container ( fixed e ocupa a tela toda)
        container.style.display = 'flex';
        // Bloqueia o scroll do fundo
        document.body.style.overflow = 'hidden';
    }
}

function fecharServico() {
    const container = document.getElementById('container-servico');
    const iframe = document.getElementById('frame-servico');

    container.style.display = 'none';
    iframe.src = "";
    // Devolve o scroll
    document.body.style.overflow = 'auto';
}