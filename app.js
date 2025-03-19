//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const entrada = document.getElementById('entradaNome');
    const novoAmigo = entrada.value.trim();

    if (novoAmigo === "") {
        alert("Insira um nome válido!");
        return;
    }

    amigos.push(novoAmigo);
    entrada.value = "";
    exibirAmigos();
}

function exibirAmigos() {
    const elementoLista = document.getElementById('exibirLista');
    elementoLista.innerHTML = "";

    amigos.forEach((nome) => {
        const item = document.createElement('li');
        item.textContent = nome;
        elementoLista.appendChild(item);
    });
}

function realizarSorteio() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio.");
        return;
    }

    const sorteado = Math.floor(Math.random() * amigos.length);
    alert(`O nome sorteado é: ${amigos[sorteado]}`);
}
