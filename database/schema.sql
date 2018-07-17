DROP DATABASE IF EXISTS chorecat;

CREATE DATABASE chorecat;

USE chorecat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  symbol VARCHAR(500),
  household int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE chores (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  PRIMARY KEY (ID)
);

CREATE TABLE completedChores (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  chore_id int NOT NULL,
  day VARCHAR(10) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (chore_id) REFERENCES chores(id),
  CONSTRAINT completedChore UNIQUE(user_id, chore_id, day)
);
