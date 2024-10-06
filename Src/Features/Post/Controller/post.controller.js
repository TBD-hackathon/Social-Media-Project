import PostModel from "../Model/post.model.js"


export default class PostController{

    static getAllPost(req,res){
        let postData = PostModel.getAllPost();
        if(!postData){
            res.status(404).send("Couldn't fetch posts");
        }else{
            res.status(200).send(postData);
        }
    }

    static getUserPost(req,res){
        
        let postArr = PostModel.getUserPost(req.userEmail);
        if(!postArr){
            res.status(404).send('No posts found');
        }else{
            res.status(200).send(postArr)
        }
    }
    static createPost(req,res){
        
    }
}