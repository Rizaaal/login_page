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
<nav>
<ul>
    <li><button id="back"><</button></li>
</ul>
</nav>
`;


loginButton.addEventListener('click', () => {
    //const mainPage = document.body.innerHTML;
    document.body.innerHTML = welcome;
});