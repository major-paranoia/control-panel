const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Articles
router.get('/', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        res.send(await articles.find({}).toArray());
    }
    catch(err){
        res.json({message: err});
    }
});

// Get Articles By CategoryId
router.get('/:categoryId', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        res.send(await articles.find({ categoriesId: req.params.categoryId}).toArray());
    }
    catch(err){
        res.json({message: err});
    }
});

// Get Article By Id
router.get('/article/:id', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        res.send(await articles.findOne({ _id: new mongodb.ObjectID(req.params.id)}));
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
            categoriesId: req.body.categoriesId
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Add Podcast
router.post('/podcasts', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            categoriesId: 'podcasts'
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Add InfoPageArticle
router.post('/infoPage', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: 'none',
            content: req.body.content,
            previewImage: 'none',
            fullImage: req.body.fullImage,
            categoriesId: req.body.categoriesId
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Update Article
router.patch('/:id', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.updateOne({ _id: new mongodb.ObjectID(req.params.id)}, {$set: {
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            previewImage: req.body.previewImage,
            fullImage: req.body.fullImage,
            categoriesId: req.body.categoriesId
        }});
        res.status(200).send();
    }
    catch(err){
        res.json({message: err});
    }   
});

// Update InfoPageArticle
router.patch('/infoPage/:id', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.updateOne({ _id: new mongodb.ObjectID(req.params.id)}, {$set: {
            title: req.body.title,
            content: req.body.content,
            fullImage: req.body.fullImage,
            categoriesId: req.body.categoriesId
        }});
        res.status(200).send();
    }
    catch(err){
        res.json({message: err});
    }   
});

// Update a podcast
router.patch('/podcasts/:id', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.updateOne({ _id: new mongodb.ObjectID(req.params.id)}, {$set: {
            title: req.body.title,
            content: req.body.content,
            fullImage: req.body.fullImage
        }});
        res.status(200).send();
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

// Delete articles by categoryId
router.delete('/categories/:categoryId', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.deleteMany({ categoriesId: req.params.categoryId });
        res.status(200).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Recovery Article
router.post('/article/recover', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            previewImage: req.body.previewImage,
            fullImage: req.body.fullImage,
            categoriesId: req.body.categoriesId
        }).then(async result => {
            const recArticle = await articles.findOne({_id: new mongodb.ObjectID(result.insertedId.toString())});
            recArticle._id = new mongodb.ObjectID(req.body.oldId);
            await articles.insertOne(recArticle);
            await articles.deleteOne({_id: new mongodb.ObjectID(result.insertedId.toString())});
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Recovery InfoPage
router.post('/infoPage/recover', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            previewImage: req.body.previewImage,
            fullImage: req.body.fullImage,
            categoriesId: req.body.categoriesId
        }).then(async result => {
            const recArticle = await articles.findOne({_id: new mongodb.ObjectID(result.insertedId.toString())});
            recArticle._id = new mongodb.ObjectID(req.body.oldId);
            await articles.insertOne(recArticle);
            await articles.deleteOne({_id: new mongodb.ObjectID(result.insertedId.toString())});
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Recovery Podcast
router.post('/podcast/recover', async (req, res) => {
    try{
        const articles = await loadArticlesCollection();
        await articles.insertOne({
            title: req.body.title,
            subText: req.body.subText,
            content: req.body.content,
            categoriesId: 'podcasts'
        }).then(async result => {
            const recArticle = await articles.findOne({_id: new mongodb.ObjectID(result.insertedId.toString())});
            recArticle._id = new mongodb.ObjectID(req.body.oldId);
            await articles.insertOne(recArticle);
            await articles.deleteOne({_id: new mongodb.ObjectID(result.insertedId.toString())});
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

async function loadArticlesCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true});
    return client.db('blog').collection('articles');
}

module.exports = router;