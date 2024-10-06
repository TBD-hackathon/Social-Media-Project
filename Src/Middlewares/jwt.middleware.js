import jwt from 'jsonwebtoken';

let jwtAuth = (req,res,next)=>{
    
    let token = req.headers['authorization'];
    
    if(!token){
        res.status(401).send('Unauthorized User');
    }

    try{
        let payload = jwt.verify(token,"NDK8EjSPnwbraZaVeqVvqCKY9O5tQrV0");

        req.userId = payload.userId;
        req.userEmail = payload.userEmail;
    }catch(err){
        res.status(401).send('Unauthorized User')
    }

    next();
}

export default jwtAuth;