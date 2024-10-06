import express from 'express';
import PostController from '../Controller/post.controller.js';
import upload from "../../../Middlewares/fileUpload.middleware.js";

let postRouter = express.Router();

postRouter.get('/',PostController.getAllPost);
postRouter.get('/user-post',PostController.getUserPost)
postRouter.post('/',upload.single('postUrl'),PostController.createPost)

export default postRouter;