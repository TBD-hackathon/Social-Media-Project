// Post Router

import express from 'express';
import PostController from '../Controller/post.controller.js';
import upload from "../../../Middlewares/fileUpload.middleware.js";

let postRouter = express.Router();

postRouter.get('/all',PostController.getAllPost);
postRouter.get('/:id',PostController.getPostById)
postRouter.get('/',PostController.getUserPost);
postRouter.delete('/delete',PostController.deleteUserPost)
postRouter.put('/:id',PostController.updatePost)

postRouter.post('/',upload.single('postUrl'),PostController.createPost);

export default postRouter;