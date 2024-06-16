import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import { DbHelper } from '../DatabaseHelper';  // Assuming the DbHelper is located in the helpers directory
import { Product, ProductRequest } from '../models/productModel';

const dbHelper = new DbHelper();

export const addProduct = async (req: ProductRequest, res: Response) => {
    try {
        const { Name, Price, CategoryId } = req.body;
        const id = uid();
        await dbHelper.query(
            `INSERT INTO Product (Id, Name, Price, CategoryId) VALUES ('${id}', '${Name}', ${Price}, '${CategoryId}')`
        );
        return res.status(201).send('<h1> Product Added</h1>');
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = (await dbHelper.exec('getProducts', {})).recordset as Product[];
        return res.status(200).json(products);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};

export const getProduct = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const result = (await dbHelper.exec('getProduct', { Id: req.params.id }));
        const product = result.recordset[0] as Product;

        if (product) {
            return res.status(200).json(product);
        }
        return res.status(404).json({ Message: 'Product not Found!' });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const updateProduct = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params;
        const { Name, Price } = req.body;
        
        const result = await dbHelper.exec('updateProduct', { Id: id, Name, Price });

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ Message: 'Product not Found!' });
        }
        return res.status(200).json({ message: "Product Updated!" });
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json(error);
    }
};

export const deleteProduct = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params;
        const result = await dbHelper.exec('deleteProduct', { Id: id });

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ Message: 'Product not Found!' });
        }
        return res.status(200).json({ Message: "Product deleted Successfully!" });
    } catch (error) {
        console.error('Error deleting product:', error);
        return res.status (500).json(error);
    }
};
