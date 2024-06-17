      const moongose=require("mongoose");


          const URI=process.env.MONGOURI;

            const connection= async () =>{

                    try{
                         await moongose.connect(URI)
                            console.log("database is connected")
                    }catch(error){
                          console.log(error,"connection failed with database")
                    }
            }
                 module.exports={connection}