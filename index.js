//    index.js
   
   import express from 'express';
    import path from 'path';
    import userRouter from './Src/Features/User/Routes/user.routes.js'
    import postRouter from './Src/Features/Post/Routes/post.routes.js';
    import commentRouter from './Src/Features/Comment/Router/comment.router.js';
    import likeRouter from './Src/Features/Like/Router/like.router.js';
    import swagger from 'swagger-ui-express';
    import apiDocs from './Swagger.json' assert {type:"json"}
    import jwtAuth from './Src/Middlewares/jwt.middleware.js';
    import loggerMiddleware from './Src/Middlewares/logger.js';
    import { ApplicationError } from './Src/Error Handler/errorHandler.js';

    let server = express(); 
// Helps in parsing raw data into JSON

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    server.use(loggerMiddleware);
    server.use('/api-docs',swagger.serve,swagger.setup(apiDocs))
   


    // Major Routes
    server.use('/api/user',userRouter)
    server.use('/api/post',jwtAuth,postRouter)
    server.use('/api/comment',jwtAuth,commentRouter)
    server.use('/api/like',jwtAuth,likeRouter)
    


    server.use((err,req,res,next)=>{
        if(err instanceof ApplicationError){
            res.status(err.code).send(err.message)
        }
        res.status(503).send('Something went Wrong! Please try again later')
    })

    let port = 3000;


    server.listen(port,()=>{
        console.log('Server is running at 3000')
    })