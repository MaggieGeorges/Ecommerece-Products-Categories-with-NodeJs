import { Request } from "express"

export interface Product {
    Id:string,
    Name:string,
    Price:string,
    CategoryId:string
   
}

interface addProduct {
    Name:string,
    Price:string,
    CategoryId:string
   
}

export interface ProductRequest extends Request{
    body:addProduct
}