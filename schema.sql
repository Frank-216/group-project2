CREATE DATABASE soap_Store;

USE user_DB;

CREATE TABLE user_DB{
	id int NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(250) NOT NULL,
	email VARCHAR(250) NOT NULL,
	password VARCHAR(16) NOT NULL,
	street_name VARCHAR(100) NOT NULL,
	city VARCHAR(100) NOT NULL,
	state VARCHAR(2) NOT NULL,
	zip VARCHAR(5) NOT NULL,
	phone_number INT(10),
	date TIMESTAMP NOT NULL,
	PRIMARY KEY(id);
;

CREATE TABLE products_DB{
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(250) NOT NULL,
	price DECIMAL(6,2) NOT NULL,
	stock INT (1000) NOT NULL,
	materials VARCHAR("2000"),
	out_of_stock BOOLEAN default false,
	PRIMARY KEY(id);

	}
	CREATE TABLE IMAGES{
		id INT NOT NULL AUTO_INCREMENT,
		image_1 VARCHAR(200) NOT NULL,
		image_2 VARCHAR(200),
		image_3 VARCHAR(200),
		image_4 VARCHAR(200)
		}
	}
	;
-- Manually adding information to the Images Table 
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/tobaccovan.jpg',curdate(),curdate(), 3);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/peppermintSquare.jpg',curdate(),curdate(), 2);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/bachelorSquare.jpg',curdate(),curdate(), 1);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/bachelorSquare.jpg',curdate(),curdate(), 6);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/beardbalmSquare.jpg',curdate(),curdate(), 4);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/tobaccocandleSquare.jpg',curdate(),curdate(), 7);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/shavesoapsetSquare.jpg',curdate(),curdate(), 8);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/crate.jpg',curdate(),curdate(), 5);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/explorerscrate.jpg',curdate(),curdate(), 9);
INSERT INTO Images(url, createdAt, updatedAt, ITEMId) VALUES ('/img/adventurecrateSquare.jpg',curdate(),curdate(), 10);

sequelize model:create --name Users -- attributes "user_name:string email:string password:string street_name:string city:string state:string zip:string phone_number:string"
