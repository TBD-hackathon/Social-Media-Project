//Comment Routes

import express from "express";
import CommentController from "../Controller/comment.controller.js";
import jwtAuth from "../../../Middlewares/jwt.middleware.js";

const commentRouter = express.Router();

commentRouter.post('/',jwtAuth,CommentController.comment);
commentRouter.get('/',jwtAuth,CommentController.getCommentByPost)
commentRouter.delete('/:id',jwtAuth,CommentController.delete)
commentRouter.put('/:id',jwtAuth,CommentController.update)



export default commentRouter;