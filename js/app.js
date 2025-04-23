import { UserService } from './classes.js';
import { createUserElement } from "./utils.js";

const usersContainers = document.getElementById("users");
//Carregar usuarios
async function loadUsers() {
    const userList = await UserService.getUsers();
    userList.forEach((user) => {
        const  userElement = createUserElement(user, "deleteUser");
        usersContainers.appendChild(userElement);
    })
}

//Adicionar usuario
document.getElementById("add").addEventListener("click", async () => {
    const name = document.getElementById("inputName").value;
    const mail = document.getElementById("inputEmail").value;

    const newUser = await UserService.addUser(name, mail);
    const userElement = createUserElement(newUser, "deleteUser");
    usersContainers.appendChild(userElement);
})

//Deletar usuario
window.deleteUser = async function(id) {
    await UserService.deleteUser(id);
    location.reload();
}

loadUsers();

// const users = document.getElementById("users");

// //Listar usuarios
// fetch("https://crudcrud.com/api/de2ec28ab93648d68c018180038b80a4/usuarios").then(resposta => resposta.json()).then((userList) => {
//     userList.forEach(element => {
//         const item = document.createElement("user");
//         item.innerHTML = `<article id="user"><h2 id="name">${element.name}</h2>
//                     <p id="email">${element.mail}</p>
//                     <button onclick="deletar('${element._id}')">X</button></article>`;
//         users.appendChild(item);
//     })
// })