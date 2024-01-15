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
