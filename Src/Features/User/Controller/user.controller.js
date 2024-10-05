import UserModel from "../Model/user.model.js";

export default class UserController{

    static getUsers(req,res){
        let data = UserModel.getUsers();
        res.status(200).send(data)
    }

    static signUp(req,res){
        console.log(req.body)
        let userName = req.body.userName;
        let email = req.body.email;
        let password = req.body.password;

        UserModel.signUp(userName,email,password);
        res.status(200).send('Registration Successful!')
    }
}