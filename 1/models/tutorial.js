module.exports =(mongoose) => {
    const Student = mongoose.model(
        "student", mongoose.Schema({
            name: String,
            collegeName: String,
            location: String
        },{
            timestamps:true
        })
    )
    return Student
}