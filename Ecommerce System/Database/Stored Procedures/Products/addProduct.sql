
USE Ecommerce
GO
CREATE OR ALTER PROCEDURE addProduct(@Id VARCHAR(255) ,@Name VARCHAR(255) ,@Price DECIMAL(18,2), @CategoryId VARCHAR(255)
)
AS
BEGIN

INSERT INTO Product(Id, Name,Price, CategoryId)
VALUES(@Id,@Name,@Price,@CategoryId)
END
GO

SELECT * FROM Product

INSERT Product(Id, Name,Price, CategoryId)
VALUES(1, 'Bulb', '120.00', '1')