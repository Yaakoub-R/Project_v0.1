const multer = require('multer')

const storage = multer.diskStorage({
    destination :  function (req, file, cb) {
        cb(null,'client/public/upload')
    },
    filename : function (req, file, cb){
        cb(null,file.originalname.replace(' ',''))
    }
})

exports.upload = multer({storage : storage})