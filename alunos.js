const alunos = [
    "Ana Beatriz Silva Santos",
    "Carlos Eduardo Pereira Oliveira",
    "Diana Fonseca Ribeiro",
    "Fernando Henrique Souza Mendes",
    "Giovanna da Costa Alencar",
    "Júlio Arthur César Gomes",
    "Larissa Martins Rodrigues",
    "Marcelo de Souza Andrade",
    "Natália Ferreira Neves Bastos",
    "Vinícuis Cruz Borges"
];

function buscarAlunos() {
    const input = document.getElementById("inputBusca");
    const sugestoesDiv = document.getElementById("sugestoes");
    const termoBusca = input.value.toLowerCase();

    // Limpar sugestões
    sugestoesDiv.innerHTML = "";

    // Se o campo de pesquisa estiver vazio, não exiba sugestões
    if (termoBusca === "") {
        return;
    }

    // Filtrar e exibir sugestões
    const sugestoes = alunos.filter(aluno => aluno.toLowerCase().includes(termoBusca));
    sugestoes.forEach(sugestao => {
        const sugestaoDiv = document.createElement("div");
        sugestaoDiv.textContent = sugestao;



        // Adicione um manipulador de eventos de clique para a sugestão
        sugestaoDiv.addEventListener("click", function () {
            // Preencha o campo de pesquisa com o nome clicado
            input.value = sugestao;
            // Limpe a lista de sugestões
            sugestoesDiv.innerHTML = "";
        });

        sugestoesDiv.appendChild(sugestaoDiv);
    });
}

const Buscar = document.getElementById("Buscar");

        Buscar.addEventListener("click", function () {
            // Redirecionar para a página desejada quando o botão é clicado
            window.location.href = "ana.html";
        });