import express from 'express';
import userRouter from './Src/Features/User/Routes/user.routes.js'


let server = express(); 

// Helps in parsing raw data into JSON
server.use(express.json());


// Major Routes
server.use('/api/user',userRouter)




server.listen(3000,()=>{
    console.log('Server is running at 3000')
})