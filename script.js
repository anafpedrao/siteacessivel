document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoBase = 18; // Tamanho inicial do corpo do texto
    let fatorTitulos = 1.5; // Os títulos serão sempre 1.5x maiores que o texto normal

    function alterarTamanhoFonte(novoTamanho) {
        // Ajusta o tamanho dos parágrafos e textos normais
        document.querySelectorAll('p, a, button, label, input, textarea').forEach(elemento => {
            elemento.style.fontSize = `${novoTamanho}px`;
        });

        // Ajusta os títulos proporcionalmente
        document.querySelectorAll('h1').forEach(elemento => {
            elemento.style.fontSize = `${novoTamanho * (fatorTitulos + 0.5)}px`;
        });

        document.querySelectorAll('h2').forEach(elemento => {
            elemento.style.fontSize = `${novoTamanho * fatorTitulos}px`;
        });

        document.querySelectorAll('h3, h4, h5, h6').forEach(elemento => {
            elemento.style.fontSize = `${novoTamanho * (fatorTitulos - 0.2)}px`;
        });
    }

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoBase += 2; // Aumenta em 2px
        alterarTamanhoFonte(tamanhoBase);
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoBase > 10) { // Evita que a fonte fique muito pequena
            tamanhoBase -= 2; // Diminui em 2px
            alterarTamanhoFonte(tamanhoBase);
        }
    });

    // Aplicar os tamanhos iniciais ao carregar a página
    alterarTamanhoFonte(tamanhoBase);

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })
});

ScrollReveal().reveal('#home', { delay: 500 });
ScrollReveal().reveal('#about', { delay: 500 });
ScrollReveal().reveal('#contact', { delay: 500 });