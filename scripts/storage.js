export function getUserObject(mail){
    return JSON.parse(localStorage.getItem("users"))
    .find(user => user.mail === mail);
}

