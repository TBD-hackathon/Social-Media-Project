
// Post controller

import { ApplicationError } from '../../../Error Handler/errorHandler.js';
import { Container } from "winston";
import PostModel from "../Model/post.model.js"


export default class PostController{

    static getAllPost(req,res){
        let postData = PostModel.getAllPost();
        if(!postData){
            throw new ApplicationError('Could not get post data',404)
        }else{
            res.status(200).send(postData)
        }
    }

    static getPostById(req,res){
        console.log('Get Post By Id')
        let postId = req.params.id;
        let userId = req.userId;
        let post = PostModel.getPostById(userId,postId);
        if(!post){
            throw new ApplicationError('could not find specific post',404)
        }else{
            res.status(200).send(post);
        }
    }

    static deleteUserPost(req,res){
        let postId = req.query.postId;
        let userId = req.userId;
        console.log('userId',userId)
        console.log('postId',postId)

        let index = PostModel.deletePost(userId,postId);
        if(index>=0){
            res.status(200).send('Post has been deleted');
        }else{
            throw new ApplicationError('Post and user mismatch',404)
            res.status(404).send('post not found')
        }
    }

    static  getUserPost(req,res){
        
        let postArr = PostModel.getUserPost(req.userId);
        if(!postArr){
            throw new ApplicationError('No posts found',404)
        }else{
            res.status(200).send(postArr)
        }
    }

    static createPost(req,res){
        let email = req.userEmail;
        let caption = req.body.caption;
        let postUrl = req.file?req.file.filename:null;

        if (!postUrl) {
            throw new ApplicationError('File upload required', 400);
        }
        
        let  post = PostModel.createPost(email,postUrl,caption);
        if(!post){
            
            throw new ApplicationError('Unable to add post',501)
        }else{
            res.status(200).send(post)
        }
    }

    static updatePost(req,res){
        let postId = req.params.id;
        let postUrl = req.file.filename;
        let caption = req.body.caption;
    }
}