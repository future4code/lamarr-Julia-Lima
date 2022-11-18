Exercício 1 - 
a) Altera a tabela "Actor" removendo a coluna "salary".

b) Altera a tabela "Actor" mudando a coluna 'gender' para 'sex' e estabelecendo a restrição dessa coluna para string de até 6 caracteres. 

c) Altera a tabela "Actor" na coluna 'gender' mudando a restrição para uma string de até 255 caracteres. 

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2 - 

a) 

UPDATE Actor 
SET 
name = "Carolina Ferraz",
birth_date = "1970-08-05"
WHERE id = "003";

b)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

c)

UPDATE Actor 
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

d) O update é executado porém há 0 alteração na coluna. 

Exercício 3 - 

a) 
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)

DELETE FROM Actor
WHERE
	gender = "male" AND
	gender > 1000000;


Exercício 4 - 
a) 

SELECT MAX(salary) FROM Actor

b)

SELECT MIN(salary) FROM Actor WHERE gender = "female"

c)

SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)

SELECT SUM(salary) FROM Actor

Exercício 5 - 

a) A tabela irá mostrar a quantidade de atores e a quantidade de atrizes. 

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)

SELECT * FROM Actor
ORDER BY salary;

d) 

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)

SELECT AVG(salary), gender
FROM Actor
GROUP BY gender ;

Exercício 6 - 

a)

ALTER TABLE Movies ADD playing_limit_date DATE;

b)

ALTER TABLE Movies CHANGE rating 
rating FLOAT;

c)

UPDATE Movies
SET
	release_date = "2020-12-31"
WHERE id = "001"

d)

DELETE FROM Movies WHERE id = "001"