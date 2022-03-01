const db = require('../models/index.js');
const Products = db.product;

exports.create = (req, res) => {
    // res.send("Create");
    const products = new Products({
        productName: req.body.productName,
        price: req.body.price
    })
    products.save(products).then(
        data =>{
            // res.send(data);
            res.json({"result":"Success"});
        }
    ).catch(
        err => {
            res.status(500).send(err);
        })
};

exports.findAll = (req, res) => {
    // res.send("FindAll");
    Products.find().then(
        data =>{
            res.send(data);
        }
    ).catch(
        err =>{
            res.status(500).send(err);
        })
};