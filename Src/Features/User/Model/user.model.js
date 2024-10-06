

let userData = [
    
    {
        id: 1,
        userName: "Athar Nawaid",
        email: "athar@mail.com",
        password: "123"
    },
    {
        id: 2,
        userName: "Talha Rihan",
        email: "talha@mail.com",
        password: "123"
    },
    {
        id: 3,
        userName: "Ariba Nausin",
        email: "ariba@mail.com",
        password: "123"
    }

]

export default class UserModel{
    constructor(userName,email,password){
        this.id = userData.length+1;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    static getUsers(){
        return userData
    }
    static signUp(userName,email,password){
        let newUser = new UserModel(userName,email,password);
        userData.push(newUser);
        
    }

    static signIn(email,password){
        let user = userData.find(user => user.email==email && user.password==password);
        return user;
    }
}