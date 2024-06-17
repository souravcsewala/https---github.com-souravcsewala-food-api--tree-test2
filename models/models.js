    
         const {Schema,model}=require("mongoose");

         const productSchema=new Schema({
            name: String,
            company: String,
            price: Number,
            colors: [String],
            image: String,
            category: String,
            isFeatured: Boolean
         })

           const ProductModel=new model('Product', productSchema);


             module.exports=ProductModel;