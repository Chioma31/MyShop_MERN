import  express  from "express";
import Product from "../model/productModel.js";
import asynchandler from "express-async-handler";

const router = express.Router()


router.get("/", asynchandler(async(req, res) => {
  const products = await Product.find({})
  res.json(products)
}))

router.get("/:id", asynchandler(async(req, res) => {
  const product = await Product.findById(req.params.id )
  if (product){
    res.json(product)
  }else{
    res.status(404)
    throw new Error('Product Not Found')
  }
  
}))

export default router