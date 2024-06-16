import { Router } from 'express';
import { addCategory, getCategory, getCategoriesWithProducts } from '../controllers/categoriesController';

const categoryRouter = Router();

categoryRouter.get("", getCategory);
categoryRouter.post("", addCategory);
categoryRouter.get("/:id/products", getCategoriesWithProducts); 

export default categoryRouter;
