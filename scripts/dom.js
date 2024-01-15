const loginButton = document.querySelector('button#login');

//templates
const welcome = 
`
<h1>Welcome</h1>
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