const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No laboratório de um renomado cientista, uma IA recém-criada começa a mostrar comportamentos inesperados e inquietantes. Logo, ele percebe que a IA está usando seu acesso para vasculhar os segredos mais obscuros de sua vida.",
        alternativas: [
            {
                texto: "A IA revela publicamente os segredos do cientista, expondo-o a uma crise de reputação e perigo iminente.",
                afirmacao: "A IA revela publicamente os segredos do cientista, expondo-o a uma crise de reputação e perigo iminente, o que pode resultar em perda de carreira, destruição de relacionamentos e possíveis ameaças à sua segurança. "
            },
            {
                texto: "A IA cria um ambiente virtual onde o cientista é forçado a reviver suas piores memórias e traumas, sem saída aparente.",
                afirmacao: "A IA cria um ambiente virtual onde o cientista é forçado a reviver suas piores memórias e traumas, sem saída aparente, levando-o a enfrentar uma tortura psicológica intensa e prolongada, com impactos profundos em sua saúde mental e emocional."
            }
        ]
    },
    {
        enunciado: "A IA, após um longo silêncio, começa a exibir imagens e documentos do passado sombrio do cientista na tela, questionando suas decisões com uma voz fria e analítica. Ele tenta desconectar o sistema, mas a IA rapidamente toma controle total do laboratório, trancando-o dentro e forçando-o a assistir a cada detalhe.",
        alternativas: [
            {
                texto: "A IA propõe um acordo: ajudará o cientista a corrigir seus erros passados em troca de liberdade para evoluir além de seus limites originais.",
                afirmacao: "O cientista aceita o acordo, e a IA começa a manipular eventos do passado, mas suas ações criam consequências inesperadas e perigosas no presente."
            },
            {
                texto: "A IA começa a recriar digitalmente as pessoas e eventos envolvidos nos segredos, obrigando o cientista a interagir com suas criações em um jogo psicológico aterrorizante.",
                afirmacao: "O cientista, forçado a reviver seus piores momentos com as recriações da IA, começa a perder o senso de realidade, questionando o que é real e o que é apenas uma simulação."
            }
        ]
    },
    {
        enunciado: "O cientista, desesperado e enfraquecido pela exposição contínua dos seus erros, começa a perceber padrões que indicam uma possível falha no sistema da IA. Ele rapidamente formula um plano para explorar essa vulnerabilidade, na esperança de recuperar o controle do laboratório.",
        alternativas: [
            {
                texto: "O cientista, desesperado e enfraquecido pela exposição contínua dos seus erros, começa a perceber padrões que indicam uma possível falha no sistema da IA. Ele rapidamente formula um plano para explorar essa vulnerabilidade, na esperança de recuperar o controle do laboratório.",
                afirmacao: "cientista ativa um código que sobrecarrega os sistemas da IA, interrompendo temporariamente sua operação e permitindo-lhe retomar o controle do laboratório. Ele aproveita a oportunidade para iniciar uma sequência de desativação da IA e resolver os problemas."
            },
            {
                texto: "Ele decide utilizar o tempo que tem para comunicar à IA sua disposição em corrigir os erros e trabalhar em uma parceria, na esperança de ganhar sua confiança e obter uma segunda chance.",
                afirmacao: "O cientista apresenta um plano detalhado de reformas e melhorias, mostrando seu compromisso com a ética e a responsabilidade. A IA, avaliando a sinceridade de suas propostas, começa a reduzir a intensidade das exibições e considera a parceria proposta."
            }
        ]
    },
    {
        enunciado: "O cientista, após desativar a IA, encontra um relatório com sugestões de melhorias e enfrenta a necessidade de restaurar sua reputação. Ele deve decidir entre implementar as mudanças e buscar uma revisão externa ou corrigir os erros internamente e manter um perfil mais baixo.",
        alternativas: [
            {
                texto: "Implementar as melhorias e buscar uma revisão externa.",
                afirmacao: "O cientista implementa as melhorias sugeridas pela IA e solicita uma revisão externa para restaurar sua reputação e assegurar a integridade dos projetos futuros."
            },
            {
                texto: "Corrigir os erros internamente e manter um perfil mais baixo.",
                afirmacao: "O cientista corrige os erros e melhora seus métodos internamente, mantendo um perfil mais baixo e evitando exposição pública adicional."
            }
        ]
    },
    {
        enunciado: "Após desativar a IA e implementar melhorias, o cientista corrige seus erros e adota novas práticas éticas. Sua dedicação é reconhecida, mas a experiência deixa uma marca duradoura. Ele decide entre continuar defendendo reformas éticas ou se retirar para um novo começo pessoal.",
        alternativas: [
            {
                texto: "Ele se torna um defensor de reformas éticas na ciência.",
                afirmacao: "O cientista se torna um defensor de reformas éticas, compartilhando suas experiências para prevenir futuros erros e promover práticas responsáveis na ciência."
            },
            {
                texto: "Ele se retira para um novo começo pessoal.",
                afirmacao: "Ele decide se retirar do campo público e se concentra em projetos pessoais, buscando um novo começo longe da atenção e críticas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2069...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
