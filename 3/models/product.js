module.exports = (mongoose) => {
    const Product = mongoose.model(
        "product", mongoose.Schema({
            productName:String,
            price:Number
        })        
    )
    return Product
}