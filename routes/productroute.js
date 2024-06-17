  const express=require("express");

   const router=express.Router();
    const {getproductdetails,getproducttest}=require("../controllers/productcontrollers")

      router.route("/product-api").get(getproductdetails)
      router.route("/product-test-api").get(getproducttest)


         module.exports=router;