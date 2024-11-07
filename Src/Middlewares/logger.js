
import fs from 'fs';
import winston from 'winston';


let logger = winston.createLogger({
    level:'info',
    format:winston.format.json(),
    defaultMeta:{service:'request-logging'},
    transports:[new winston.transports.File({filename:'logs.txt'})]
})


let loggerMiddleware = async (req,res,next)=>{
    if(!req.url.includes('signIn')){
        const logData = `${req.url} - ${JSON.stringify(req.body)}`;
        logger.info(logData)
    }
    next();
}

export default loggerMiddleware;