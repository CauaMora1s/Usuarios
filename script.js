const listatar = document.getElementById("listatarefas");

fetch("https://crudcrud.com/api/d31d3d64a3d34cd483f961b8da322a36/tarefas")
.then(resposta => resposta.json())
.then((listaDeTarefas) => {
    listaDeTarefas.forEach(elment => {
        const item = document.createElement("li");
        item.innerHTML = `${elment.descricao} <button onclick="deletar('${elment._id}')">X</button>`;
        listatar.appendChild(item);
    })
})

document.getElementById("adicionar").addEventListener("click", () => {
    const tarefaVa = document.getElementById("tarefa").value;

    fetch("https://crudcrud.com/api/d31d3d64a3d34cd483f961b8da322a36/tarefas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            descricao: tarefaVa
        })
    }).then(resposta => resposta.json()).then((elment) => {
        const item = document.createElement("li");
        item.innerHTML = `${elment.descricao} <button onclick="deletar('${elment._id}')})>X</button>`;
        listatar.appendChild(item);
    })
})

function deletar(id) {
    fetch(`https://crudcrud.com/api/d31d3d64a3d34cd483f961b8da322a36/tarefas/${id}`, {
        method: "DELETE"
    }).then(() => {
        location.reload();
    });
}