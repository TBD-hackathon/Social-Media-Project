import { ApplicationError } from "../../../Error Handler/errorHandler.js";

export default class PostModel{
    constructor(userId,postUrl,caption){
        this.id = postData.length+1;
        this.userId = userId;
        this.postUrl = postUrl;
        this.caption = caption;
    }
    static getAllPost(){
        return postData
    }

    static getPostById(userId,postId){
        let post =  postData.find(post=>post.id==postId && post.userId==userId);
        return post;
    }

    static getUserPost(userId){
        let postArr = postData.filter(post=>post.userId==userId);
        return postArr;
    }

    static createPost(userEmail,postUrl,caption){
        let post = new PostModel(userId,postUrl,caption);
        postData.push(post);
        return post;
    }

    // static updatePost(){

    // }

    static deletePost(userId,postId){
        let index = postData.findIndex(post=>post.id==postId && post.userId==userId);
        console.log(index)
        if(index>=0){
            postData.splice(index,1);
            return index;
        }else{
            throw new ApplicationError('Could not find post',404)
        }
        
        
    }
}

let postData = [
    
    {
        id: 1,
        userId: 2,
        postUrl: "talha@mail.com 2024-10-06T19_14_48.328Z Android.jpg",
        caption: "Android >> Apple"
    },
    {
        id: 2,
        userId: 1,
        postUrl: "athar@mail.com 2024-10-06T19_26_23.296Z apple.jpg",
        caption: "An Apple a day keeps the doctor away"
    },
    {
        id: 3,
        userId: 1,
        postUrl: "athar@mail.com 2024-10-06T19_26_37.494Z bird.jpeg",
        caption: "Beauty of nature"
    },
    {
        id: 4,
        userId: 3,
        postUrl: "ariba@mail.com 2024-10-06T19_27_28.819Z car.jpg",
        caption: "Maclaren is a beast"
    },
    {
        id: 5,
        userId: 3,
        postUrl: "ariba@mail.com 2024-10-06T19_27_37.955Z Village-CP-111.jpg",
        caption: "Real peace lies in the villages"
    }
]