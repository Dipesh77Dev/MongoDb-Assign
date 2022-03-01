module.exports = (mongoose) => {
    const Quote = mongoose.model(
        "quote",mongoose.Schema({
            quote:String,
            author:String
        },{
            timestamps:true
        })
    )
    return Quote
}