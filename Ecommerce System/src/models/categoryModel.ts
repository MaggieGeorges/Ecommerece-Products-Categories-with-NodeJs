export interface Category {
    Id: string;
    Name: string;
}

export interface CategoryWithProducts extends Category {
    ProductId?: string;
    ProductName?: string;
    ProductPrice?: number;
}
