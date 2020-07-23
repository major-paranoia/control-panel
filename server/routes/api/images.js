const express = require('express');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const router = express.Router();

const conn = mongoose.createConnection(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true});

// Init gfs
let gfs;

conn.once("open", () => {
  // init stream
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "uploads"
  });
});

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.DB_CONNECTION,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });


router.post('/upload', upload.single('file'), (req, res) => {
    res.status(201).send();
});


router.get('/files', (req, res) => {
  gfs.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    return res.json(files);
  });
});

router.get("/image/:filename", (req, res) => {
  const file = gfs.find({ filename: req.params.filename}).toArray((err, files) => {

    if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
    }
    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  });
});

router.delete("/files/del/:id", (req, res) => {
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return res.status(404).json({ err: err.message });
    res.status(204).send();
  });
});

module.exports = router;