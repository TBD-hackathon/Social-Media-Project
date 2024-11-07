
export default class LikeModel{
    constructor(userId,postId){
        this.id = likeData.length+1;
        this.userId = userId;
        this.postId = postId;
       
    }

    static like(userId,postId){
        let index = likeData.findIndex(like=>like.userId==userId && like.postId==postId);

        if(index==-1){
            let like = new LikeModel(userId,postId);
            likeData.push(like);
        }else{
            likeData.splice(index,1);
        }

       
        let likeCount = this.getLikeByPost(postId)
        return likeCount;
    }

    static getLikeByPost(postId){
        let likeArr = likeData.filter(like=>like.postId==postId);
        return likeArr.length;
    }
}


let likeData = [

];