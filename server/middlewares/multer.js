const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    console.log(file,"<<<FILE")
    const originalName = file.originalname;
    const extension = originalName.split('.').pop(); // get file extension
    cb(null, `${Date.now()}.${extension}`);
  },
})


const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true)
    } else {
      cb({ name: "invalidFile" })
    }
  },
  onError: (error, next) => {
    next(error)
  },
})

module.exports = { upload, storage }