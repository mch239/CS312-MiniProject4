    DROP DATABASE IF EXISTS blogdb;
    CREATE DATABASE IF NOT EXISTS blogdb;
    USE blogdb;
    
    CREATE TABLE users (
	id SERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
   	username VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL
);

	CREATE TABLE blogs (
	id SERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	body text,
    	user_id SERIAL NOT NULL, 
	creator_username VARCHAR(255) NOT NULL,
	creator_name VARCHAR(255) NOT NULL,
	date date NOT NULL,
    	FOREIGN KEY (user_id) REFERENCES users(id),
	FOREIGN KEY (creator_username) REFERENCES users(username)
);