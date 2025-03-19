// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const entrada = document.getElementById('amigo'); // Campo de entrada
    let nome = entrada.value.trim(); // Remove espaços em branco

    if (nome === "") {
        alert("Por favor, insira um nome válido!"); // Valida a entrada
        return;
    }

    // Formata o nome para começar com letra maiúscula
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!"); // Verifica se o nome já está na lista
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    entrada.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista exibida
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos'); // Elemento <ul> da lista
    lista.innerHTML = ""; // Limpa a lista atual

    amigos.forEach((nome) => {
        const item = document.createElement('li'); // Cria um item da lista
        item.textContent = nome; // Define o texto do item
        lista.appendChild(item); // Adiciona o item à lista
    });
}

// Função para realizar o sorteio de um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione ao menos um nome antes de sortear."); // Alerta para lista vazia
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatório
    const amigoSorteado = amigos[indiceAleatorio]; // Seleciona o nome pelo índice
    exibirResultado(amigoSorteado); // Exibe o resultado
}

// Função para exibir o resultado do sorteio
function exibirResultado(nome) {
    const resultado = document.getElementById('resultado'); // Elemento <ul> para o resultado
    resultado.innerHTML = ""; // Limpa o resultado anterior

    const itemResultado = document.createElement('li'); // Cria um novo item
    itemResultado.textContent = `O amigo secreto sorteado é: ${nome}`; // Define o texto do item
    resultado.appendChild(itemResultado); // Adiciona o item ao resultado
}
