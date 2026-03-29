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
        container.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function fecharServico() {
    const container = document.getElementById('container-servico');
    const iframe = document.getElementById('frame-servico');

    container.style.display = 'none';
    iframe.src = "";
    document.body.style.overflow = 'auto';
}