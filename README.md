# CRUD-POLL-SERVER

This is the page that works with my CRUD application server.
Right now we have the option to CREATE, READ and DELETE.

I used NodeJS and MYSQL and extensions: nodemon, body-parser, cors, dotenv, express, mysql.

To server start, just open a terminal and write: npm start. The port i'm using is 3002.


And the code in MYSQL is:

CREATE DATABASE dbApiVote;

USE dbApiVote;

CREATE TABLE IF NOT EXISTS enquetes(
codigo INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
data_inicio DATE,
data_termino DATE,
pergunta VARCHAR(255)
);

INSERT INTO enquetes (nome,data_inicio,data_termino,pergunta) VALUES ('Primeira Enquete', '2022-08-04', '2022-08-31', 'Qual é o dia da semana...?');
INSERT INTO enquetes (nome,data_inicio,data_termino,pergunta) VALUES ('Segunda Enquete', '2022-08-05', '2022-08-25', 'Em que dia...?');

SELECT * FROM enquetes;


/*DROP TABLE enquetes;*/
