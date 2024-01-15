export function getUserObject(mail){
    return JSON.parse(localStorage.getItem("users"))
    .find(user => user.mail === mail);
}

export function logUser(mail){
    localStorage.setItem("logged", mail);
    let loginCount = JSON.parse(localStorage.getItem("users"))
    .find(user => user.mail === mail);
    console.log(loginCount);
}

export function logOut(){
    localStorage.removeItem("logged");
}

export function addUser(user){
    let users = JSON.parse(localStorage.getItem("users"));

    //controlla che l'user non esista gia'
    //preservare immutabilità
    if (!getUserObject(user)){
        users.push({
            mail: user, 
            lastLogin: new Date(), 
            logins: 1
        });
    }

    localStorage.setItem("users", JSON.stringify(users));
}