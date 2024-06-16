import { Request, Response } from 'express';
import { v4 as uid } from 'uuid';
import { DbHelper } from '../DatabaseHelper';  // Ensure this path is correct
import { Category, CategoryWithProducts } from '../models/categoryModel';

const dbHelper = new DbHelper();

// Add a new category
export const addCategory = async (req: Request, res: Response) => {
    try {
        const { Name } = req.body;
        const id = uid();
        await dbHelper.exec('addCategory', {
            Id: id,
            Name
        });
        return res.status(201).send('<h1> Category Added</h1>');
    } catch (error) {
        return res.status(500).json(error);
    }
};

// Get all categories
export const getCategory = async (req: Request, res: Response) => {
    try {
        const categories = (await dbHelper.exec('getCategory', {})).recordset as Category[];
        return res.status(200).json(categories);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};

// Get all categories with their products
export const getCategoriesWithProducts = async (req: Request, res: Response) => {
    try {
        const categoriesWithProducts = (await dbHelper.exec('getCategoriesWithProducts', {})).recordset as CategoryWithProducts[];
        return res.status(200).json(categoriesWithProducts);
    } catch (error: any) {
        return res.status(500).json(error.message);
    }
};
