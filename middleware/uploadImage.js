const util = require('util');
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");

var storage = new GridFsStorage({
  url: "mongodb+srv://thothotho123:dangvantho123@cluster0.5dfml.mongodb.net/bookStore",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "images",
      filename: `${Date.now()}-${file.originalname}`,
    };
  }
});

var uploadFile = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;