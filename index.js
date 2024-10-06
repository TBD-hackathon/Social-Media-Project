import express from 'express';
import userRouter from './Src/Features/User/Routes/user.routes.js'
import postRouter from './Src/Features/Post/Routes/post.routes.js';
import jwtAuth from './Src/Middlewares/jwt.middleware.js';

let server = express(); 

// Helps in parsing raw data into JSON
server.use(express.json());


// Major Routes
server.use('/api/user',userRouter)
server.use('/api/post',jwtAuth,postRouter)



server.listen(3000,()=>{
    console.log('Server is running at 3000')
})