CREATE DATABASE burgers_db;

USE	burgers_db;

CREATE TABLE burger(
id INT AUTO_INCREMENT,
burger_name VARCHAR(100),
devoured BOOLEAN DEFAULT false,
date TIMESTAMP,
PRIMARY KEY(id)
);

