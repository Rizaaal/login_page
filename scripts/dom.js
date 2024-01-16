import { addUser, getUserObject, logOut, logUser } from "./localstorage.js";

const page = document.querySelector('main');

    logOut();

    page.innerHTML = 
    `
    <h1>Login</h1>
    <p>inserisci una mail valida:</p>
    <input type="text" id="login" >
    <button id="login" disabled>entra</button>
    `;

    const loginButton = document.querySelector('button#login');

    loginButton.addEventListener('click', buildMainPage);

    //validazione mail
    document.querySelector('input#login')
    .addEventListener('keyup', e => {
        const pattern = /[\w\-\.]+@([\w-]+\.)+[\w-]+/;
        if (pattern.test(e.target.value)){
            loginButton.removeAttribute('disabled');
        } else {
            loginButton.setAttribute("disabled", "disabled");
        }
    });

}

    //su pagina di benvenuto non esiste input.value
    //e logged === null solo su login page
    if (localStorage.getItem('logged') === null){
        logUser(document.querySelector('input#login').value);
    };

    addUser(localStorage.getItem("logged"));

    const welcomeMessage = getUserObject(localStorage.getItem('logged'))
    .logins > 1 ? 'Welcome back' : 'Welcome'; 

    page.innerHTML = 
    `
    <nav>
        <li><button id="logout">logout</button></li>
        <li id="login-info"></li>
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

