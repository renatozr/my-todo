DROP DATABASE IF EXISTS my_todo_db;
CREATE DATABASE my_todo_db;
USE my_todo_db;

CREATE TABLE status (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO my_todo_db.status
  (`name`)
VALUES
  ('In progress'), ('Pending'), ('Complete');

CREATE TABLE task (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `status_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL,
  FOREIGN KEY (`status_id`) REFERENCES status (`id`)
);

INSERT INTO my_todo_db.task
	(`name`, `status_id`, `created_at`)
VALUES
  ('Wash the dishes', 2, NOW()),
  ('Brush my teeth', 3, NOW()),
  ('Study for the exam', 1, NOW());
