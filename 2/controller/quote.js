const db = require('../models/index.js')
const Quotes = db.quote;

exports.create = (req, res) => {
    // res.json("create");
    const quotes = new Quotes({
        quote:req.body.quote,
        author:req.body.author
    })
    quotes.save(quotes).then(
        data =>{
            // res.send(data);
            res.json({"result":"Success"});
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.findAll = (req, res) => {
    // res.json("findAll");
    // const quote = req.query.quote
    // var condition = quote?{quote:{$regex: new RegExp(quote)}} : {}
    // Quotes.find(condition).then
    Quotes.find().then(
        data => {
            res.send(data)
        }
    ).catch(
        err => {
        res.status(500).send(err);
    })
}

