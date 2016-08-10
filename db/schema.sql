
CREATE DATABASE pizza_db;
USE pizza_db;

CREATE TABLE pizza
(
	id int NOT NULL AUTO_INCREMENT,
	pizza_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY (id)
);
