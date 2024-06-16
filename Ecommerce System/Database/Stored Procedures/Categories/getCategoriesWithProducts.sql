USE Ecommerce;
GO

CREATE OR ALTER PROCEDURE getCategoriesWithProducts
AS
BEGIN
    SELECT c.*, p.*
    FROM Category c
    LEFT JOIN Product p ON c.Id = p.CategoryId;
END
GO
