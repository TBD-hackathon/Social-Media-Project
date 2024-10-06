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
        let email = req.userEmail;
        let postUrl = req.file.filename

        console.log(email)
        console.log(postUrl)

        let  post = PostModel.createPost(email,postUrl);
        if(!post){
            res.status(501).send('Unable to add post')
        }else{
            res.status(200).send(post)
        }
    }
}