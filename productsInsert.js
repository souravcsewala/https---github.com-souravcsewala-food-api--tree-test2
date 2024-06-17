    
              require("dotenv").config();
           const {connection}=require("./database/db");

              const ProductModel=require("./models/models");
               const ProductsList=require("./products.json")
       
                const InsertProducts=async()=>{
                          try{
                                  await connection();
                                  await ProductModel.deleteMany();
                                await ProductModel.create(ProductsList) 
                                console.log("products insert on the cloud system success")
                          }catch(error){
                              console.log(error,"failed to insertProducts")   
                          }
                }
                
                   InsertProducts()