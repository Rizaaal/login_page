import { addUser, logOut, logUser } from "./storage.js";

//comportamento validazione mail: il bottone è disabilitato
//se la mail non è valida

//approccio per salvare gli accessi: lo stato di logged in e il conto degli
//accessi li separiamo: se un utente è loggato, salviamo un valore "logged"
//dentro il localStorage. Al contempo, salviamo in un array di utenti, tutti
//tutti gli utenti che hanno fatto il login almeno una volta, ed il conteggio
//di tutte volte che un utente si è loggato, oltre che la data dell'ultimo
//login

//usa .map per modificare gli array di localStorage

//ogni controllo di utente all'interno della lista corrisponde all'utente
//loggato.

function showLogin(){
    logOut();
    document.body.innerHTML = 
    `
    <h1>Login</h1>
    <p>inserisci mail:</p>
    <input type="text" id="login" placeholder="type your email">
    <button id="login">entra</button>
    `;

    document.querySelector('button#login')
    .addEventListener('click', showPage);
}

function showPage(){
    //su pagina di benvenuto non esiste input.value
    //e logged === null solo su login page
    if (localStorage.getItem('logged') === null){
        logUser(document.querySelector('input').value);
    };

    addUser(localStorage.getItem("logged"));
    //const loggedUser = getUserObject("barbapapa");
    //console.log(!loggedUser);

    document.body.innerHTML = 
    `
    <nav>
        <li><button id="logout">logout</button></li>
    </nav>
        
    <h1>Welcome, ${localStorage.getItem("logged")}</h1>
    `;

    document.querySelector('button#logout')
    .addEventListener('click', showLogin);
}

window.onload = () => {
    if (localStorage.getItem("users") === null){
        localStorage.setItem("users", "[]");
    };

    if (localStorage.getItem('logged') === null){
        showLogin();
    } else {
        showPage();
    } 
}

