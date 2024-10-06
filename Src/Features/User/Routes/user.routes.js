import express from "express";
import UserController from "../Controller/user.controller.js";


let userRouter = express.Router();

userRouter.get('/',UserController.getUsers);
userRouter.post('/signUp',UserController.signUp);
userRouter.post('/signIn',UserController.signIn);


export default userRouter;