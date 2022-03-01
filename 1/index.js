const express = require('express');
const server = express();
const studentRouter = require('./router/student.js');
const db = require('./models/student.js')
db.mongoose.connect(
    db.url,
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // }
).then(()=>{
   console.log('MongoDb connection has been successfully done');
   server.listen(3000, () => {
    console.log("Server has been started at port 3000");
});
}).catch(
    err => {
        console.log('MongoDb connection failed', err);
    }
);

server.use(express.json());

server.get("/", (req,res) =>{
    res.send("Welcome to my mongodb Assignment application with express & nodeJs!!!");
});
server.use('/student',studentRouter.router);

// server.listen(3000, () => {
//     console.log("Server has been started at port 3000");
// });