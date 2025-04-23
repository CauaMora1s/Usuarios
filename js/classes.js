const API = "https://crudcrud.com/api/201ba121c7f740e0aa7c6cea01f4bc42/usuarios";

export class UserService {
    //Carrega usuarios na API
    static async getUsers() {
        const response = await fetch(API);
        return await response.json();
    }

    //Adicionar usuario
    static async addUser(name, mail) {
        const response = await fetch(API, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                mail: mail
            })
        })
        return await response.json();
    }

    //Deletar usuario
    static async deleteUser(id) {
        await fetch(`${API}/${id}`, {
            method: "DELETE"
        })
    }

// //Adicionar usuario
// document.getElementById("add").addEventListener("click", () => {
//     const name = document.getElementById("inputName").value;
//     const mail = document.getElementById("inputEmail").value;

//     fetch("https://crudcrud.com/api/de2ec28ab93648d68c018180038b80a4/usuarios", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             name: name,
//             mail: mail
//         })
//     }).then(resposta => resposta.json()).then((element) => {
//         const item = document.createElement("user");
//         item.innerHTML = `<article id="user"><h2 id="name">${element.name}</h2>
//                     <p id="email">${element.mail}</p>
//                     <button onclick="deletar('${element._id}')">X</button></article>`;
//         users.appendChild(item);
//     })
// }) 

// //Deletar usuario
// function deletar(id) {
//     fetch(`https://crudcrud.com/api/de2ec28ab93648d68c018180038b80a4/usuarios/${id}`, {
//         method: "DELETE"
//     }).then(() => {
//         location.reload();
//     })
// }
}