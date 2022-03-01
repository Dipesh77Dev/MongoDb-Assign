const db = require('../models/student.js')
const Student = db.tutorial

// save student docs
exports.create =(req, res) => {
    // res.json("create")
    const student = new Student({
        name: req.body.name,
        collegeName: req.body.collegeName,
        location: req.body.location
    })
    student.save(student).then(
        data => {
            // res.send(data);
            res.json({"result": "Success"});
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

// exports.findById =(req, res) => {
//     // res.json("findById")
//     Student.findById(req.params.id).then(
//         data => {
//             res.send(data)
//         }
//     ).catch(
//         err =>{
//             res.status(500).send(err)
//         })
// }

exports.find =(req, res) => {
    const name = req.query.name
    // const location = req.query.location
    // const collegeName = req.query.collegeName
    var condition = name?{name:{$regex:new RegExp(name)}}:{}
    // var condition1 = location?{location:{$regex:new RegExp(location)}}:{}
    // var condition2 = collegeName?{collegeName:{$regex:new RegExp(collegeName)}}:{}
    // res.json("findAll")
    Student.find(condition).then(
        data => {
            res.send(data)
        }
    ).catch(
        err =>{ 
            res.status(500).send(err)
        })
        /*
        Student.find(condition1).then(
            data => {
                res.send(data)
            }
        ).catch(
            err =>{ 
                res.status(500).send(err)
            })
            Student.find(condition2).then(
                data => {
                    res.send(data)
                }
            ).catch(
                err =>{ 
                    res.status(500).send(err)
                })
                */
}

/*
exports.update =(req, res) => {
    // res.json("update")
    Student.findByIdAndUpdate(req.params.id).then(
        data =>{
            res.send(data);
        }
    ).catch(
        err => {
            res.status(500).send(err)
        })
}

exports.deleteById =(req, res) => {
    // res.json("deleteById")
    Student.deleteByIdAndRemove(req.params.id, req.body).then(
        data => {
            if(!data){
                res.send("No data has been found");
            }else{
            res.send(data + "documents deleted")
        }}
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}

exports.deleteAll =(req, res) => {
    // res.json("deleteAll")
    Student.deleteAll({}).then(
        data => {
            res.send(data+ "documents deleted")
        }
    ).catch(
        err =>{
            res.status(500).send(err)
        })
}
*/