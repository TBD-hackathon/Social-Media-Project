

export default class PostModel{
    constructor(userEmail,postUrl){
        this.id = postData.length+1;
        this.email = userEmail;
        this.postUrl = postUrl;
    }
    static getAllPost(){
        return postData
    }

    static getUserPost(email){
        let postArr = postData.filter(post=>post.email==email);
        return postArr;
    }

    static createPost(userEmail,postUrl){
        let post = new PostModel(userEmail,postUrl);
        postData.push(post);
        return post;
    }
}

let postData = [
    
    {
        id: 1,
        email: "talha@mail.com",
        postUrl: "talha@mail.com 2024-10-06T19_14_48.328Z Android.jpg"
    },
    {
        id: 2,
        email: "athar@mail.com",
        postUrl: "athar@mail.com 2024-10-06T19_26_23.296Z apple.jpg"
    },
    {
        id: 3,
        email: "athar@mail.com",
        postUrl: "athar@mail.com 2024-10-06T19_26_37.494Z bird.jpeg"
    },
    {
        id: 4,
        email: "ariba@mail.com",
        postUrl: "ariba@mail.com 2024-10-06T19_27_28.819Z car.jpg"
    },
    {
        id: 5,
        email: "ariba@mail.com",
        postUrl: "ariba@mail.com 2024-10-06T19_27_37.955Z Village-CP-111.jpg"
    }
]