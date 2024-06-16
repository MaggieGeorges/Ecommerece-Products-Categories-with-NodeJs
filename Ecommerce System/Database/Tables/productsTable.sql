USE Ecommerce;
GO

CREATE TABLE Product (
    Id VARCHAR(255) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    CategoryId  VARCHAR(255) FOREIGN KEY (CategoryId) REFERENCES Category(Id)
);
 INSERT INTO Product(Id, Name, Price, CategoryId)
 VALUES('1', 'BOOK', 120.00, '34beecb9-4542-4c85-963e-f64f4484c18c')
 
 SELECT * FROM Product