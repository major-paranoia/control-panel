const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Categories
router.get('/', async (req, res) => {
    try{
        const categories = await loadCategoriesCollection();
        res.send(await categories.find({}).toArray());
    }
    catch(err){
        res.json({message: err});
    }
});

// Get Categories By CategoryType
router.get('/:categoryType', async (req, res) => {
    try{
        const categories = await loadCategoriesCollection()
        res.send(await categories.find({ categoryType: req.params.categoryType}).toArray());
    }
    catch(err){
        res.json({message: err});
    }
});

// Add Categories
router.post('/', async (req, res) => {
    try{
        const categories = await loadCategoriesCollection();
        await categories.insertOne({
            title: req.body.title,
            categoryId: req.body.categoryId,
            categoryType: req.body.categoryType
        });
        res.status(201).send();
    }
    catch(err){
        res.json({message: err});
    }
});

// Update Category
router.patch('/:id', async (req, res) => {
    try{
        const categories = await loadCategoriesCollection();
        await categories.updateOne({ _id: new mongodb.ObjectID(req.params.id)}, {$set: {
            title: req.body.title,
            categoryId: req.body.categoryId,
            categoryType: req.body.categoryType
        }});
        res.status(200).send();
    }
    catch(err){
        res.json({message: err});
    }   
});

// Delete Category
router.delete('/:id', async (req, res) => {
    try{
        const categories = await loadCategoriesCollection();
        await categories.deleteOne({ _id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    }
    catch(err){
        res.json({message: err});
    }
});

async function loadCategoriesCollection() {
    const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true});
    return client.db('blog').collection('categories');
}

module.exports = router;