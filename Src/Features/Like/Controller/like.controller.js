//Like controller

import LikeModel from "../Model/like.model.js";

export default class LikeController{
    
    static like(req,res){
        let userId = req.userId;
        let postId = req.query.postId;
       
        let likeCount = LikeModel.like(userId,postId);
        
        res.send('Like count = '+likeCount)
        
    }

    static getLikeByPost(req,res){
        let postId = req.query.postId;
        let likeCount = LikeModel.getLikeByPost(postId);

        res.send('Like count = '+likeCount);
        
    }

}