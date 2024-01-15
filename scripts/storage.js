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

