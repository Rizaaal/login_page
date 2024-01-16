export function getUserObject(mail){
    return JSON.parse(localStorage.getItem("users"))
    .find(user => user.mail === mail);
}

export function logUser(mail){
    localStorage.setItem("logged", mail);
    const users = JSON.parse(localStorage.getItem("users"));

    //increment login count by 1    
    const newUsers = users.map(user => {
        if (user.mail === mail){
            console.log('mapped user: ', user);
            return {
                mail: mail, 
                lastLogin: new Date(), 
                logins: ++user.logins
            }
        } else {
            return user;
        }
    });

    localStorage.setItem("users", JSON.stringify(newUsers));
}

export function logOut(){
    localStorage.removeItem("logged");
}

export function addUser(user){
    let users = JSON.parse(localStorage.getItem("users"));

    if (!getUserObject(user)){
        const newUsers = [...users, {
            mail: user, 
            lastLogin: new Date(), 
            logins: 1
        }];

        localStorage.setItem("users", JSON.stringify(newUsers));
    }
}