

let userData = [
    {
        id:1,
        userName:'Athar Nawaid',
        email:'athar@mail.com',
        password:'123'
    },
    {
        id:2,
        userName:'Talha Rihan',
        email:'talha@mail.com',
        password:'123'
    }

]

export default class UserModel{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}