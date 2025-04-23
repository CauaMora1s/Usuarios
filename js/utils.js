export function createUserElement(user, deleteCB) {
    const item = document.createElement("user");
    item.innerHTML = `<article id="user"><h2 id="name">${user.name}</h2>
                        <p id="email">${user.mail}</p>
                        <button onclick="(${deleteCB})('${user._id}')">X</button></article>`
    return item;
}
//     const item = document.createElement("user");
//         item.innerHTML = `<article id="user"><h2 id="name">${element.name}</h2>
//                     <p id="email">${element.mail}</p>
//                     <button onclick="deletar('${element._id}')">X</button></article>`;