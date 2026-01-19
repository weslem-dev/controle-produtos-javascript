let produtos = [];

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;

    if (nome === "" || quantidade === "") {
        alert("Preencha todos os campos");
        return;
    }

    produtos.push({ nome, quantidade });
    atualizarLista();

    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
}

function atualizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    produtos.forEach((p, index) => {
        const li = document.createElement("li");
        li.innerText = `${p.nome} - ${p.quantidade}`;

        const btn = document.createElement("button");
        btn.innerText = "Remover";
        btn.onclick = () => removerProduto(index);

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

function removerProduto(index) {
    produtos.splice(index, 1);
    atualizarLista();
}
