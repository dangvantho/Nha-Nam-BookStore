const util = require('util');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Book = require('../models/Book')

var storage = new GridFsStorage({
  url: "mongodb+srv://thothotho123:dangvantho123@cluster0.5dfml.mongodb.net/bookStore",
  // options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: async (req, file) => {
    const match = ["image/png", "image/jpeg"];
    const {title,size,type,money,pages,author,time,intro,publishCompany} = req.body
    console.log(title,size,type,money,pages,author,time,intro,publishCompany)
    const data=await Book.create({title,size,type,money,pages,author,time,intro,publishCompany,sold: 0})
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "images/books",
      filename: `${Date.now()}-${file.originalname}`,
      id:data._doc._id
    };
  }
});

var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;