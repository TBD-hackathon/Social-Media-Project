import express from 'express';
import PostController from '../Controller/post.controller.js';


let postRouter = express.Router();

postRouter.get('/',PostController.getAllPost);
postRouter.get('/user-post',PostController.getUserPost)

export default postRouter;