

export default class PostModel{
    constructor(userEmail,postUrl){
        id = postData.length+1;
        this.email = userEmail;
        this.postUrl = post;
    }
    static getAllPost(){
        return postData
    }

    static getUserPost(email){
        let postArr = postData.filter(post=>post.email==email);
        return postArr;
    }
}

let postData = [
    {
        id: 1,
        email:'athar@mail.com',
        postUrl:"hjhklkl"
    },
    {
        id: 2,
        email:'talha@mail.com',
        postUrl:"jklklg"
    }
]