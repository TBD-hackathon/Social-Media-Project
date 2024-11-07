import { ApplicationError } from "../../../Error Handler/errorHandler.js";

export default class CommentModel{
    constructor(userId,postId,content){
        this.id = commentData.length+1;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static comment(userId,postId,content){
        let comment = new CommentModel(userId,postId,content);
        commentData.push(comment);
        return comment;
    }

    static getCommentByPost(postId){
        let commentArr = commentData.filter(cmnt=>cmnt.postId==postId);
        return commentArr;
    }

    static update(commentId,content){
        let comment = commentData.find(cmnt=>cmnt.id==commentId);
        if(!comment){
           throw new ApplicationError('Could not fetch comment ',503)
        }else{
            comment.content = content;
            return comment;
        }
    }

    static delete(commentId){
        let index = commentData.findIndex(cmnt=>cmnt.id==commentId);
        if(index>=0){
            commentData.splice(index,1);
        }else{
            throw new ApplicationError('Could not find comment to be deleted',403)
        }
    }
}


let commentData = [

];