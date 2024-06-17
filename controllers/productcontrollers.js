    const ProductModel=require("../models/models")
  const getproductdetails= async (req,res)=>{
         try{
               const ProductList=  await ProductModel.find({})
               res.status(200).json({ALLPRODUCTS :ProductList})
         }catch(error){
              console.log(error)
         }  
  }

     const getproducttest = async (req,res)=>{
               try{
                      const {name,category,isFeatured,sort,price,select,company}=req.query
                     const queryObject={}
                         if(name){
                            queryObject.name={$regex:name,$options:'i'}
                         }
                         if(company){
                            queryObject.company={$regex:company,$options:'i'}
                         }
                         if(category){
                            queryObject.company={$regex:category,$options:'i'}
                         }
                         if(isFeatured){
                            queryObject.isFeatured=isFeatured;
                         }
                         if (price) {
                            if (price.startsWith('>')) {
                                const priceValue = parseFloat(price.substring(1)); // Extract the value after ">"
                                queryObject.price = { $gt: priceValue }; // Use $gt operator for greater than
                            } else {
                                queryObject.price = { $eq: parseFloat(price) }; // Filter products with price equal to the specified value
                            }
                        }
                              console.log("queryobject",queryObject)
                          let API_DATA=ProductModel.find(queryObject)
                          if(sort){
                             let sortFix=sort.replace(","," ")
                           API_DATA  =    API_DATA.sort(sortFix)
                          }
                           if(select){
                             let selectFix=select.replace(","," ")
                               API_DATA=API_DATA.select(selectFix)
                           }
                            let page= Number(req.query.page) || 1;
                            let limit=Number(req.query.limit) || 5;
                            let Skip_Formula=(page-1)*limit;
                            API_DATA=API_DATA.skip(Skip_Formula).limit(limit)
                  const  ProductSortList=  await API_DATA.exec();
                  res.setHeader('Content-Type', 'application/json');
                  res.setHeader('Content-Disposition', 'inline; filename=response.json');
                   res.status(200).json({SOURAV_DATA_API:ProductSortList,hits:ProductSortList.length})
                      console.log(req.query)
                      console.log(req.params)
               }catch(error){
                   console.log(error)
               }
     }

         module.exports={getproductdetails,getproducttest}