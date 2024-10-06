import UserModel from "../Model/user.model.js";
import jwt from 'jsonwebtoken';



export default class UserController{

    static getUsers(req,res){
        let data = UserModel.getUsers();
        res.status(200).send(data)
    }

    static signUp(req,res){
        // console.log(req.body)
        let userName = req.body.userName;
        let email = req.body.email;
        let password = req.body.password;

        UserModel.signUp(userName,email,password);
        res.status(200).send('Registration Successful!')
    }

    static signIn(req,res){
        let email = req.body.email;
        let password = req.body.password;

        let user = UserModel.signIn(email,password);

        if(!user){
            
            res.status(401).send('Invalid credentials')

        }else{
            let token = jwt.sign({userId:user.id,userEmail:user.email},'NDK8EjSPnwbraZaVeqVvqCKY9O5tQrV0',{expiresIn:'1h'});
            res.status(200).send(token)
        }
    }
}