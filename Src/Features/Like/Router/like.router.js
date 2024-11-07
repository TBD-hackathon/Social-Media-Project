//Like router

import express from "express";
import LikeController from "../Controller/like.controller.js";
import jwtAuth from "../../../Middlewares/jwt.middleware.js";

const likeRouter = express.Router();

likeRouter.post('/',jwtAuth,LikeController.like);
likeRouter.get('/',jwtAuth,LikeController.getLikeByPost)


export default likeRouter;