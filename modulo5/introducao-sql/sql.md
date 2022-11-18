Exercício 1 - 

a) FLOAT é um número não inteiro;
VARCHAR é uma limitação de caracteres, no caso 255;
PRIMARY KEY é uma chave única na tabela; 
NOT NULL indica que a coluna não pode ser nula; 
DATE indica que representa uma data.

b) O comando SHOW DATABASE me retorna as informações do schema e o comando
SHOW TABLES me retorna as tabelas criadas.

c) o comando DESCRIBE é pra verificar a estrutura da tabela e descreve quais são os tipos principais dos dados.


Exercício 2 -

a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
120000,
"1973-08-23",
"female"
);

b) Erro: 'Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'." 
Significa que não foi possível criar a query pois houve a 
duplicação de uma chave única. 

c) Erro : "'Error Code: 1163. Column count doens't match value count."
at row 1".
Signicia que o número de colunas informadas não é o mesmo com 
o número de valores informados. 

d) Erro: "'Error Code: 1364. Field 'name' doesn't have a default value."
Significa que o campo 'nome' não foi preenchido. 

e) Erro: "Error Code: 1292. Incorrect date value:'1950' for column 
'birth_date' at row 1.
Significa que a data de nascimento não está em formato de string. 

Exercício 3 -

a) SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

b)SELECT salary from Actor WHERE name = "Tony Ramos";

c) SELECT * from Actor WHERE gender = "Invalid";
O retorno foi uma tabela vazia, uma vez que nenhum componente da 
tabela apresenta gender = 'invalid'.

d) SELECT id, name, salary from Actor WHERE salary < 500000;

e) Erro Code: 1054. Unknown column 'nome' in 'fild list'.
Significa que não existe o campo 'nome' na lista. O correto seria 'name'. 
Comando correto: SELECT id, name from Actor WHERE id = "002";

Exercício 4 -

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

A query a cima seleciona todos os valores da tabela 'Actor' que comecem com a letra 'A' ou 'J' e que tenham o salário maior do que 300000.

b) SELECT * FROM Actor 
WHERE (name NOT LIKE "A%") AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;


Exercício 5 -

a) CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

Text indica que a quantidade de caracteres na sinopse é praticamente ilimitada.

b) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    Values(
	"001",
	"Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
    7
);

c) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    Values(
	"002",
	"Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
    10
);

d) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    Values(
	"003",
	"Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-2",
    8
);

e) INSERT INTO Movie (id, title, synopsis, release_date, rating) 
    VALUES(
	"004",
    "Cidade de Deus",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2002-08-30",
    9
);

Exercício 6 -

a) SELECT id, title, rating from Movie WHERE id = "004"

b) SELECT * FROM Movie WHERE title = "Deus é Brasileiro";

c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

Exercício 7 -

a) SELECT * FROM Movie WHERE title LIKE "%vida%";

b) SELECT * FROM Movie WHERE title LIKE "%Maridos%" OR synopsis LIKE "%Deus%";

c) SELECT * FROM MOVIE WHERE release_date < "2022-11-08";

d) SELECT * FROM MOVIE WHERE release_date < "2022-11-08" AND 
      (title LIKE "%Maridos%" OR synopsis LIKE "%Deus%") AND rating > 7;
