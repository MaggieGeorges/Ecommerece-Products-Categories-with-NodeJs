
import { Router } from "express";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct} from "../controllers/productController";
import { verifyToken } from "../middlewares";


const productSRouter = Router()

productSRouter.post("", addProduct)
productSRouter.get("",getProducts)
productSRouter.get("/:id",verifyToken, getProduct)
productSRouter.put("/:id",  updateProduct)
productSRouter.delete("/:id", deleteProduct)



export default productSRouter