USE  Ecommerce;
GO

CREATE OR ALTER PROCEDURE updateProduct(@Id VARCHAR(255) ,@Name VARCHAR(255) ,@Price INT)
AS
BEGIN
UPDATE Product SET Name=@Name, Price=@Price
WHERE Id=@Id
END
GO