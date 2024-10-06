
import multer from 'multer';
import path from 'path';

const storageConfig = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(path.resolve(),"Src","Features","Post","Upload"))
    },
    filename:function(req,file,cb){
        let fileName = req.userEmail+" "+new Date().toISOString().replace(/:/g,'_')+" "+file.originalname;
        cb(null,fileName)
    }
})


let upload = multer({storage:storageConfig});;

export default upload;