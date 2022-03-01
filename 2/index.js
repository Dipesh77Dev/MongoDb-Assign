const express = require('express');
const server = express();
const quoteRouter = require('./router/quote.js');
const db = require('./models/index.js');

db.mongoose.connect(
    db.url,
).then(()=>{
    console.log('MongoDb Database has been connected');
    server.listen(3001, () =>{
        console.log("Application is running on port no 3001, Enjoy");
    });
}).catch(
    err => {
        console.log('MongoDb Database has been connected', err);
    }
)

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Welcome to MongoDb Assign2");
});

server.use('/quote', quoteRouter.router);

// server.listen(3001, () =>{
//     console.log("Application is running on port no 3001, Enjoy");
// });