const express = require('express');
const server = express();
const productRouter = require('./router/product.js');
const db = require('./models/index.js');

db.mongoose.connect(
    db.url,
).then(()=>{
    console.log('MonGoDB database has been Connected, Lets Enjoy!!');
    server.listen(3002, () =>{
        console.log("Application is running on port, 3002... Enjoy!!!");
    });
}).catch(
    err => {
        console.log('MongoDb Database Connection Failed, Try Again ....', err);
    }
)
server.use(express.json());

server.get('/', (req, res) => {
    res.send("Welcome to MongoDb3 Assignment");
});

server.use('/product', productRouter.router);

// server.listen(3002, () =>{
//     console.log("Application is running on port, 3002... Enjoy!!!");
// });