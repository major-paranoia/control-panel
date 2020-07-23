const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Articles
router.get('/', async (req, res) => {
    try{
        const trash = await loadArticlesCollection();
        res.send(await trash.find({}).toArray());
    }
    catch(err){
        res.json({message: err});
    }
});

// Add Article
router.post('/', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            previewImage: req.body.previewImage,
            fullImage: req.body.fullImage,
            categoriesId: req.body.categoriesId,
            articleType: req.body.articleType,
            oldId: req.body.oldId
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Add Article
router.post('/podcasts', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            categoriesId: 'podcasts',
            articleType: 'category',
            oldId: req.body.oldId
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Delete Article
router.delete('/:id', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    }
    catch(err){
        res.json({message: err});
    }
});

async function loadArticlesCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true});
    return client.db('blog').collection('trash');
}

module.exports = router;