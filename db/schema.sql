CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured TINYINT(0) NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

