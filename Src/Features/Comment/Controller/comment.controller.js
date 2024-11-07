//Comment COntroller

import CommentModel from "../Model/comment.model.js";

export default class CommentController{
    
    static comment(req,res){
       
        let userId = req.userId;
        let postId = req.query.postId;
        let content = req.body.content;
        let comment = CommentModel.comment(userId,postId,content);

        if(!comment){
            res.status(400).send("Couldn't add comment")
        }else{
            res.status(200).send(comment);
        }
    }

    static getCommentByPost(req,res){
        let postId = req.query.postId;
        let commentArr = CommentModel.getCommentByPost(postId);

        if(!commentArr){
            res.status(400).send("Couldn't add comment")
        }else{
            res.status(200).send(commentArr);
        }
    }

    static update(req,res){
        let commentId = req.params.id;
        let content = req.body.content;
        let comment = CommentModel.update(commentId,content);
        res.status(200).send(comment)
    }

    static delete(req,res){
        let commentId = req.params.id;
        CommentModel.delete(commentId);
        res.status(200).send('Comment Deleted')
    }

}