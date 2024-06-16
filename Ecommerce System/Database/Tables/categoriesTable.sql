USE Ecommerce;
GO

CREATE TABLE Category (Id VARCHAR(255) PRIMARY KEY  , Name VARCHAR(255)) 

INSERT INTO Category (Id, Name)
VALUES ('2', 'Books');

SELECT * FROM Category