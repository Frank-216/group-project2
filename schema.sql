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


sequelize model:create --name Users -- attributes "user_name:string email:string password:string street_name:string city:string state:string zip:string phone_number:string"
