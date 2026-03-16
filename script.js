document.getElementById("bookForm").addEventListener("submit", function(e){

e.preventDefault();

let nom = document.getElementById("nom").value;
let phone = document.getElementById("phone").value;
let livre = document.getElementById("livre").value;
let motivation = document.getElementById("motivation").value;

let message = `📚 Nouvelle inscription - Du Café et des Livres

👤 Nom : ${nom}
📱 WhatsApp : ${phone}
📖 Livre préféré : ${livre}
✍ Motivation : ${motivation}

Je souhaite rejoindre le club de lecture.`;


let url = "https://wa.me/225XXXXXXXX?text=" + encodeURIComponent(message);

window.open(url, "_blank");

});
